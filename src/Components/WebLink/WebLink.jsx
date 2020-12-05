import React from 'react';
import './WebLink.scss';

const WebLink = ({ img, lable }) => {
  return (
    <div className='web-link'>
      <a
        href='https://github.com/adeolaadeoti'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={img} alt='github' />
        {lable}
      </a>
    </div>
  );
};

export default WebLink;