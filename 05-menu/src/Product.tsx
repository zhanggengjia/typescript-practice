import React, { type ReactElement } from 'react';
import type { ProductProps } from './types/product';

const Product = (props: ProductProps): ReactElement => {
  const { id, title, category, price, img, desc } = props;

  return (
    <div className="menu-item">
      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <p className="item-price">{`$ ${price}`}</p>
        </header>
        <div className="item-text">{category}</div>
        <div className="item-text">{desc}</div>
      </div>
    </div>
  );
};

export default Product;
