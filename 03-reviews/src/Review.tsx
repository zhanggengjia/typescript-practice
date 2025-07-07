import React, { type ReactElement } from 'react';
import type { Person } from './types/person';
import { FaQuoteRight } from 'react-icons/fa';

const Review = ({ id, name, job, image, text }: Person): ReactElement => {
  return (
    <div className="">
      <div className="img-container">
        <img src={image} className="person-img" />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </div>
  );
};

export default Review;
