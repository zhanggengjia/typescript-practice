import React, { useState, type ReactElement } from 'react';
import { toast } from 'react-toastify';

type FormProp = {
  addItem: (itemName: string) => void;
};

const Form = (props: FormProp): ReactElement => {
  const { addItem } = props;
  const [newItemName, setNewItemName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('provide value');
      return;
    }

    addItem(newItemName);
    setNewItemName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
