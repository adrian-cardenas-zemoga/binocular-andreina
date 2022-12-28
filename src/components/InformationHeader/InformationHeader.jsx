import React from "react";
import './InformationHeader.css';

function InformationHeader() {
  return (
    <div className="information-header-container">
      <div className="information-header-contact">
        <a href="#" className='information-header-link'>
          <img src="email.svg" alt="" className='information-header-link-image' />
          <span>informacion@binocular.com</span>
        </a>
        <a href="#" className='information-header-link'>
          <img src="phone.svg" alt="" className='information-header-link-image' />
          <span>+1 253 335 9982</span>
        </a>
      </div>
      <div>
        <span className="information-header-language">Español</span>
        <img src="chevron-down.svg" alt="chevron-down" />
      </div>
    </div>
  );
}

export default InformationHeader;
