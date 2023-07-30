import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
const useLogic = () => {
  const [wordLength, setWordLength] = useState(6);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(false);
  const [word, setWord] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hits, setHits] = useState([]);
  const [misses, setMisses] = useState([]);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);

  useEffect(() => {
    if (start) {
      setIsLoading(true);
      fetch(
        `https://random-word-api.herokuapp.com/word${
          wordLength ? '?length=' + wordLength : ''
        }`
      )
        .then((res) => res.json())
        .then((res) => {
          setWord(res[0].split(''));
          setIsLoading(false);
        });
    }
  }, [start]);

  useEffect(() => {
    if (
      misses.length >= 6 ||
      (word.length && word.every((letter) => hits.includes(letter)))
    ) {
      let timerID = setTimeout(() => {
        if (misses.length >= 6) {
          setLoss(true);
        }
        if (word.length && word.every((letter) => hits.includes(letter))) {
          setWin(true);
        }
        setEnd(true);
        setStart(false);
        setMisses([]);
        setHits([]);
      }, 1000);
      return () => clearTimeout(timerID);
    }
  }, [misses, hits]);

  /*   const mapAndDisplay = (letter) => (
    <div key={nanoid()}>
      <span style={{ display: `${hits.includes(letter) ? 'flex' : 'none'}` }}>
        {letter}
      </span>
    </div>
  ); */

  function play() {
    setStart(true);
  }

  function closeModal() {
    setEnd(false);
    setWord('');
  }

  function handleClick(e) {
    let letter = e.target.closest('.key').innerText;
    if (word.length) {
      if (word.includes(letter)) {
        if (hits.includes(letter)) {
          return;
        }
        setHits((prev) => [...prev, letter]);
        return;
      }
      if (!misses.includes(letter)) {
        setMisses((prev) => [...prev, letter]);
      }
    }
  }

  function selectLength(e) {
    setWordLength(e.target.value);
  }

  return {
    wordLength,
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
  };
};

export default useLogic;
