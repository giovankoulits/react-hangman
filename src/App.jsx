import Button from "./components/Button";
import { useEffect, useState } from "react";
import Keyboard from "./components/Keyboard";
import Pinata from "./components/Pinata";
import MyModal from "./components/MyModal"
import Form from "./components/Form";
import "./App.css"
import { nanoid } from "nanoid";

function App() {
  const [wordLength, setWordLength] = useState(10)
  const [end, setEnd] = useState(false)
  const [start, setStart] = useState(false)
  const [word, setWord] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hits, setHits] = useState([])
  const [guesses, setGuesses] = useState([])
  const [win, setWin] = useState(false)
  const [loss, setLoss] = useState(false)

  useEffect(() => {
    if (start) {
      setIsLoading(true)
      fetch(`https://random-word-api.herokuapp.com/word${wordLength ? "?length=" + wordLength : ""}`).then(res => res.json()).then(res => {
        setWord(res[0].split(""));
        setIsLoading(false)
      })
    }
  }, [start])

  function handleClick(e) {
    let letter = e.target.closest(".key").innerText
    if (word.includes(letter)) {
      setHits(prev => [...prev, letter])
      return
    }
    setGuesses(prev => [...prev, letter])
  }

  function handleEnd() {
    if (guesses.length >= 6) {
      setLoss(true)
      setEnd(true);
    }
  }

  function rePlay() {
    setEnd(false);
    setStart(true)
    setGuesses([])
    setHits([])
  }

  function handleForm() {
    setStart(true)
  }

  const mapAndDisplay = (letter) =>
    (<div key={nanoid()}><span style={{ display: `${hits.some(char => char === letter) ? "flex" : "none"}` }}>{letter}</span></div>)

  return (
    <>
      <MyModal rePlay={rePlay} open={end} win={win} loss={loss} />
      <Pinata guesses={guesses} />
      <div className="query-word" >{isLoading ? <h1>Loading...</h1> : word && word.map(mapAndDisplay)} </div>
      < Keyboard handleEnd={handleEnd} onClick={handleClick} />
      <Form onSubmit={handleForm} />
    </>
  )
}

export default App
