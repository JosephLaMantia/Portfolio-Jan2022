import React from 'react';
import Product from '../product/Product';
import './productList.css';
import { products } from '../../data';

const ProductList = () => {
  return (
      <div className="pl">
          <div className="pl-texts">
              <h1 className="pl-title">Title</h1>
              <p className="pl-desc">Description Describe Desc Description Describe Desc Description Describe Desc Description Describe Desc Description</p>
          </div>

          <div className="pl-list">
              {products.map((item) =>(
                  <Product key={item.id} img={item.img} link={item.link}/>
              ))}
          </div>
      </div>
  );
};

export default ProductList;
