import React from 'react';

export default function Menu() {
  return (
    <div className='modal' tabindex='-1'>
      <div className='modal-dialog modal-dialog-scrollable'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='modalScrollableLabel'>
              Modal title
            </h5>
            <button
              type='button'
              className='btn-close'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              numquam, saepe repellat perspiciatis rerum magnam, sapiente vel
              molestiae cum beatae error corporis eum atque eveniet!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              mollitia vero odio quos error dolorem numquam, nemo explicabo modi
              similique! Eveniet porro exercitationem autem ratione.
            </p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary'>
              Close
            </button>
            <button type='button' className='btn btn-primary'>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
