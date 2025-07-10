import type { ReactElement } from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

const App = (): ReactElement => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
