
import './App.css';
import Chooser from './components/chooser/Chooser';
import Nav from './components/nav/Nav'
import { NavProvider } from './context/NavContext';

function App() {

  return (
    <>
    <div className="title">I SMOKE WINDOW</div>
    <NavProvider>
      <Nav></Nav>
      <Chooser />
    </NavProvider>
    </>
  );
}

export default App;
