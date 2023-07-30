import useLogic from "./hooks/useLogic";
import Keyboard from "./components/Keyboard";
import Pinata from "./components/Pinata";
import MyModal from "./components/MyModal"
import Button from "./components/Button";
import Select from "./components/Select";
import { nanoid } from "nanoid";
import "./App.css"

function App() {
  const {
    end,
    start,
    word,
    isLoading,
    hits,
    misses,
    win,
    loss,
    play,
    closeModal,
    handleClick,
    selectLength,
  } = useLogic()


  const mapAndDisplay = (letter) => (
    <div key={nanoid()}>
      <span style={{ display: `${hits.includes(letter) ? 'flex' : 'none'}` }}>
        {letter}
      </span>
    </div>
  );

  return (
    <>
      <MyModal word={word} closeModal={closeModal} end={end} win={win} loss={loss} />
      <div className="pinataAndWord">
        <Pinata misses={misses} />
        <div className="wordAndMisses">
          <h2 style={{ color: "red" }}>{misses.length > 0 && misses.map(miss => miss + ",")}</h2>
          <div className="query-word" >{isLoading ? <h2>Loading...</h2> : word && word.map(mapAndDisplay)} </div>
        </div>

      </div>
      < Keyboard handleClick={handleClick} />

      <div id="form">
        <Button play={play} start={start} />
        <Select start={start} selectLength={selectLength} />
      </div>
    </>
  )
}

export default App
