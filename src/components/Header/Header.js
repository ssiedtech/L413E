import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../context/AppContext';

export default function Header() {
  const context = useContext(AppContext);

  return (
    <>
      <div
        className='blue-banner'
        style={{ width: '100%', height: '25px', backgroundColor: '#009bd1' }}
      ></div>
      <div className='d-flex justify-content-between'>
        <div class='title align-items-end row ml-5 p-3'>
          <div className='p-2'>
            <img
              style={{ height: '80px' }}
              src='https://ssilrc.army.mil/resources/FMS/GFEBS/GFEBSLegacy/Launchers/L410E/html/images/shield-01.png'
              alt=''
            />
          </div>
          <div style={{ lineHeight: '60%' }}>
            <div
              style={{
                color: 'white',
                fontWeight: '800 !important',
                letterSpacing: '.2rem',
                lineHeight: '60%',
              }}
            >
              <h5
                style={{
                  fontWeight: 'bold',
                  lineHeight: '80%',
                }}
              >
                FINANCIAL
              </h5>
              <h5
                style={{
                  fontWeight: 'bold',
                  lineHeight: '80%',
                }}
              >
                MANAGEMENT SCHOOL
              </h5>
            </div>
            <h5 style={{ color: '#f5d755', fontWeight: 'bold' }}>
              GFEBS L413E Financial Reporting
            </h5>
          </div>
        </div>
        <div className='px-4 mt-4 mr-5' style={{ width: '220px' }}>
          <div className='progress mb-3'>
            <div
              className='progress-bar progress-bar-striped bg-success'
              role='progressbar'
              style={{ width: `${context.progress}%` }}
              aria-valuenow={`${context.progress}`}
              aria-valuemin='0'
              aria-valuemax='100'
            ></div>
          </div>
          <div className='d-flex justify-content-between'>
            <button type='button' className='btn btn-primary'>
              <FontAwesomeIcon icon={faFolder} /> Index
            </button>
            <button type='button' className='btn btn-primary'>
              <FontAwesomeIcon icon={faTimes} /> Exit
            </button>
          </div>
        </div>
      </div>
      <span
        className='d-flex mx-auto justify-content-end p-1'
        style={{
          width: '900px',
          backgroundColor: '#494949',
          color: 'white',
          fontSize: '27px',
        }}
      >
        Financial Reporting
      </span>
    </>
  );
}
