import React from 'react';
import Menu from './components/Menu';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      underConst : {
        Docs: false,
        Tutorials:true,
        Community:false

      }
       
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Docs />} />
          <Route path="/tutorial" element={<Tutorials />} />
          <Route path="/community" element={<Community />} />
          <Route path="/users/:profileId" element ={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
       
      </BrowserRouter>
    );

  }
  
}

export default App;
