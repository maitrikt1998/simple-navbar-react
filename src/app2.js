import './App.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Profile from './components/profile';
import Navigation from './components/Navigation';
import ProfileDetails from './components/profiledetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/notfound';
import { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/dashboard';

export const profile = createContext();

function App() {
  const userdata = [
    {username:"User1", name:"User1", Role:"Software Engineer"},
    {username:"User2", name:"User2", Role:"Software Engineer"},
    {username:"User3", name:"User3", Role:"Software Engineer"},
    {username:"User4", name:"User4", Role:"Software Engineer"},
    {username:"User5", name:"User5", Role:"Software Engineer"},
    {username:"User6", name:"User6", Role:"Software Engineer"},
    {username:"User7", name:"User7", Role:"Fullstack Developer"},
    {username:"User8", name:"User8", Role:"Fullstack Developer"},
    {username:"User9", name:"User9", Role:"Fullstack Developer"},
    {username:"User10", name:"User10", Role:"Fullstack Developer"},
    {username:"JOhn", name:"JOhn", Role:"Fullstack Developer"},
    {username:"Mark", name:"Mark", Role:"Frontend Developer"},
    {username:"Maitrik", name:"Maitrik", Role:"Backend Developer"},
  ];

  const [state, setstate] = useState(undefined);
  
return (
    <div className="App">
      <profile.Provider value={[state, setstate]}>
        <ToastContainer position={'top-center'} autoClose={2000}>
            <Dashboard />
        </ToastContainer>

      </profile.Provider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile userdata={userdata}/>} >
            <Route path=":username/*" element={<ProfileDetails userdata={userdata}/> } />
            {/* <Route path="/profile/:username/*" element={<ProfileDetails userdata={userdata} />}  /> */}
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;
