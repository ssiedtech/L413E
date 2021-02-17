import React, { createContext, useState, useRef } from 'react';
import { ListGroup } from 'react-bootstrap';

const AppContext = createContext();

function AppProvider(props) {
  //Global state variables
  const [progress, setProgress] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [total, setTotal] = useState();
  const [quizComplete, setQuizComplete] = useState(false);
  const [index, setIndex] = useState();

  const slideRef = useRef();

  function compileIndex() {
    const slideTitles = [...document.querySelectorAll('.slide-title')];
    const index = slideTitles.map((title, i) => `${title.innerText}`);
    setIndex(index);
    console.log(index);
  }

  // Recalculates progress bar percentage on every slide change
  function toggleProgress() {
    setTotal(document.querySelectorAll('.slide').length - 3);
    let progressBar = (currentSlide / total) * 100;
    setProgress(progressBar);
  }

  // Initializes progress bar
  function initProgress() {
    let progressBar = (1 / total) * 100;
    console.log('initial progress is ' + progressBar + '%');
    setProgress(progressBar);
  }

  // Updates slide index on slide change
  function onSlideChange(previous, next) {
    let currentSlide = next + 1;
    setCurrentSlide(currentSlide);
  }

  // Sets quiz state to complete
  function onQuizCompletion(obj) {
    setQuizComplete(true);
    console.log(quizComplete);
  }

  const goto = ({ target }) => {
    slideRef.current.goTo(parseInt(target.value, 10));
  };

  const value = {
    progress: progress,
    toggleProgress: toggleProgress,
    total: total,
    index: index,
    currentSlide: currentSlide,
    setCurrentSlide: setCurrentSlide,
    onSlideChange: onSlideChange,
    initProgress: initProgress,
    onQuizCompletion: onQuizCompletion,
    quizComplete: quizComplete,
    compileIndex: compileIndex,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };
