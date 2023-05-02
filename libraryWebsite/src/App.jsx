import './App.css'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Repository from './components/Feeds/feeds'
import Onboarding from './components/Onbaording/onboarding'
import Dashboard from './components/Dashboard/Dashboard'



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repository" element={<Repository />} /> 
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/onboarding' element={ <Onboarding /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


