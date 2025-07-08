import { useState } from 'react';
import ShowArea from './ShowArea';
import TextArea from './TextArea';
import data from './data';

function App() {
  const [showNum, setShowNum] = useState<number>(0);

  return (
    <main className="section-center">
      <h4 className="title">tired of boring lorem ipsum?</h4>
      <TextArea setShowNum={setShowNum} />
      <ShowArea data={data} showNum={showNum} />
    </main>
  );
}

export default App;
