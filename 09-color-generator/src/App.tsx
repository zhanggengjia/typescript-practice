import { useState, type ReactElement } from 'react';
import type { Color } from './types/color';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
import Form from './Form';
import ColorList from './ColorList';

const App = (): ReactElement => {
  const initColor = '#f15025';
  const [colors, setColors] = useState<Color[]>(new Values(initColor).all(10));

  const addColor = (color: string) => {
    console.log(color);
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
        console.log(e);
      } else {
        toast.error('unknow error occurred');
        console.log(e);
      }
    }
  };

  return (
    <main>
      <Form addColor={addColor} initColor={initColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
