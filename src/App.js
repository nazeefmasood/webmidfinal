import './App.css';
import Footer from './components/Footer';
import Homepage from './Homepage';
import { Route, Routes } from 'react-router-dom'
import QEA from './components/QEA';
import IOSApp from './components/IOSApp'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/qeaTrophy' element={<QEA />} />
        <Route path='/qeaTrophy' element={<IOSApp />} />
      </Routes>

    </div>
  );
}

export default App;
