import React from 'react';
import { nanoid } from 'nanoid';

type ShowAreaProps = {
  data: string[];
  showNum: number;
};

const ShowArea = ({ data, showNum }: ShowAreaProps) => {
  if (!showNum) {
    return;
  }
  const showData = data.slice(0, showNum);
  console.log(showData);
  return (
    <div className="lorem-text">
      {showData.map((d) => (
        <p key={nanoid()}>{d}</p>
      ))}
    </div>
  );
};

export default ShowArea;
