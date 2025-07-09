import type { ReactElement } from 'react';
import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';

const App = (): ReactElement => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};
export default App;
