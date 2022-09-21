import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects/Projects';
function App() {
  
  return (
  <>
  <Routes>
    <Route exact path="/" element={<Dashboard />}/>
    <Route path ="/projects" element= {<Projects />} />
  </Routes>
  

  </>
  );
}

export default App;
