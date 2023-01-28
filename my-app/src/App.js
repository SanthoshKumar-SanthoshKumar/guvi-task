
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './components/Home';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/details" element={<ProfilePage/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;

