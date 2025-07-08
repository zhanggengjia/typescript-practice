import React, { useState } from 'react';

type TextAreaProps = {
  setShowNum: React.Dispatch<React.SetStateAction<number>>;
};

const TextArea = ({ setShowNum }: TextAreaProps) => {
  const [value, setValue] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const showNum = formData.get('showNum');
    if (typeof showNum === 'string') {
      const parsed = parseInt(showNum);
      if (!isNaN(parsed)) {
        setShowNum(parsed);
        setValue(value + 1);
      }
    }
    e.currentTarget.reset();
  };

  return (
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="showNum" className="label">
        Paragraphs:{' '}
      </label>
      <input
        type="number"
        id="showNum"
        name="showNum"
        className="input"
        min="1"
        max="8"
        placeholder="1"
      ></input>
      <button type="submit" className="btn">
        Generate
      </button>
    </form>
  );
};

export default TextArea;
