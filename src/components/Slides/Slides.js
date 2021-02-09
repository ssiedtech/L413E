import React, { useRef, useEffect, useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import { AppContext } from '../../context/AppContext';

function Slides() {
  // State management
  const slideRef = useRef();
  const context = useContext(AppContext);

  // Calculates and sets progress bar percentage after every slide change
  useEffect(() => {
    context.toggleProgress();
  }, [context]);

  // React-Slideshow package settings
  const properties = {
    indicators: false,
    arrows: true,
    autoplay: false,
    defaultIndex: 0,
    prevArrow: (
      <div style={{ width: '30px', marginRight: '-30px' }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: '30px', marginLeft: '-30px' }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
        </svg>
      </div>
    ),
    onChange: (previous, next) => {
      context.onSlideChange(previous, next);
    },
  };

  // Changes slide to specific index from dropdown menu
  const goto = ({ target }) => {
    slideRef.current.goTo(parseInt(target.value, 10));
  };

  return (
    <>
      <div
        className='mx-auto my-auto'
        style={{
          top: '300px',
          height: '500px',
          width: '900px',
          backgroundColor: '#f4f4f4',
        }}
      >
        <Slide ref={slideRef} easing='ease' {...properties}>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <h3
                  style={{
                    fontSize: '24px',
                    color: '#fa4e10',
                    fontWeight: 'bold',
                  }}
                >
                  Welcome to Financial Reporting
                </h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, explicabo aliquam voluptatibus, reprehenderit saepe
                  tenetur eaque itaque officia corporis eligendi doloribus vitae
                  non, ratione commodi delectus deserunt ab provident quidem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, explicabo aliquam voluptatibus, reprehenderit saepe
                  tenetur eaque itaque officia corporis eligendi doloribus vitae
                  non, ratione commodi delectus deserunt ab provident quidem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, explicabo aliquam voluptatibus, reprehenderit saepe
                  tenetur eaque itaque officia corporis eligendi doloribus vitae
                  non, ratione commodi delectus deserunt ab provident quidem.
                </span>
              </div>
              <div className='col'>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, explicabo aliquam voluptatibus, reprehenderit saepe
                  tenetur eaque itaque officia corporis eligendi doloribus vitae
                  non, ratione commodi delectus deserunt ab provident quidem.
                </span>
                <select onChange={goto}>
                  <option>--Select--</option>
                  <option value='0'>First</option>
                  <option value='1'>Second</option>
                  <option value='2'>Third</option>
                </select>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div>
              <span>Slide 2</span>
            </div>
          </div>
          <div className='slide'>
            <div>
              <span>Slide 3</span>
            </div>
          </div>
          <div className='slide'>
            <div>
              <span>Slide 4</span>
            </div>
          </div>
          <div className='slide'>
            <div>
              <span>Slide 5</span>
            </div>
          </div>
          <div className='slide'>
            <div>
              <span>Slide 6</span>
            </div>
          </div>
          <div className='slide'>
            <div>
              <span>Slide 7</span>
            </div>
          </div>
          <div className='slide'>
            <div>
              <span>Slide 8</span>
            </div>
          </div>
          <div className='slide'>
            <div>
              <span>Slide 9</span>
            </div>
          </div>
          <div className='slide'>
            <div>
              <span>Slide 10</span>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Slides;
