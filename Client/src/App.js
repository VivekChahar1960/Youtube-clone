import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import AllRoutes from './components/AllRoutes';
import { useState } from 'react';
import {
BrowserRouter as Router,
} from 'react-router-dom';
import DrawerSidebar from './components/leftsidebar/DrawerSidebar';
function App() {
  const [toggleDrawerSidebar, settoggleDrawerSidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      settoggleDrawerSidebar({
        display:"flex"
      })
    }else{
      settoggleDrawerSidebar({
        display:"none"
      })
    }
  }
  return (
    <div className="App">
      <Router>
        <Navbar
        toggleDrawer={toggleDrawer}
        />
        <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />
        <AllRoutes />
      </Router>
    </div>
  );
}
export default App;
