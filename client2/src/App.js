import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import {Home} from '../src/components/Home'
import { FindBook } from './components/FindBook';
import { Navbar } from './components/Navbar';
import { AddBook } from './components/AddBook';

function App() {
  return (
    <>

   <Router>
   <Navbar />
   <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/FindBook' element={<FindBook/>} />
         <Route path='/AddBook' element={<AddBook/>} />
          </Routes>
        </Router>



 
    </>
  );
}

export default App;
