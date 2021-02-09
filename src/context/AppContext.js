import React, { createContext, useState } from 'react';

const AppContext = createContext();

function AppProvider(props) {
  //Global state variables
  const [progress, setProgress] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [total, setTotal] = useState();

  // Initializes progress bar
  function initProgress() {
    let progressBar = (1 / total) * 100;
    console.log('initial progress is ' + progressBar + '%');
    setProgress(progressBar);
  }

  // Recalculates progress bar percentage on every slide change
  function toggleProgress() {
    setTotal(document.querySelectorAll('.slide').length - 3);
    let progressBar = (currentSlide / total) * 100;
    setProgress(progressBar);
  }

  // Updates slide index on slide change
  function onSlideChange(previous, next) {
    let currentSlide = next + 1;
    setCurrentSlide(currentSlide);
  }

  const value = {
    progress: progress,
    toggleProgress: toggleProgress,
    total: total,
    currentSlide: currentSlide,
    onSlideChange: onSlideChange,
    initProgress: initProgress,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };
