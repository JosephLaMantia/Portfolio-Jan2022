import React from 'react';
import { useState } from 'react';
import './product.css';

const Product = ({img,link,title,desc,team,tech}) => {

  // formatTitle(title => {
  //   return 
  // })

  return (
    <div className="p-wrapper">
        <div className="p">
          <div className="p-browser">
              <div className="p-circle red"></div>
              <div className="p-circle yellow"></div>
              <div className="p-circle green"></div>
          </div>
          <a href={link} target="_blank" rel="noreferrer">
              <img src={img} alt="" className="p-img" />
          </a>
        </div>

        <div className="p-info">
        <h1 class="p-title">{title}</h1>
        <p class="p-desc">{desc}.</p>
        <p class="p-team"> {team} </p>
        <div className='p-tech'>{tech}</div>
        </div>
    </div>
  );
};

export default Product;
