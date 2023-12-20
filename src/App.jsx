import './App.css';
import { useAppStore } from './store/store';
import Count from './Count';
import Username from './Username';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Count />
      <hr />
      <Username />
    </>
  );
}

export default App;
