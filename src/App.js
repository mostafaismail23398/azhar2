import './App.css';
import Home from './Pages/home';
// import About from "./Pages/about";
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
var x=9

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element ={<Home />}/>
        {/* <Route path='about' element={<About/>}/> */}

      </Route>
    </Routes>   
   </BrowserRouter>
  );
}


export default App;
