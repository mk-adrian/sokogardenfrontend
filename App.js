import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route, Link }from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProducts';
import Mpesa from './components/Mpesa';


function App() {
  return (

    <Router>

    <div className="App">
      <header className="App-header">
        <h1 className='text-black'>Sokogarden-Buy and sell online</h1>
      </header>  

      <nav>
        <Link to='/signup' className='btn bg-dark  text-white m-2'>Sign Up</Link>
        <Link to='/signin' className='btn bg-dark  text-white m-2'>Sign In</Link>
        <Link to='/' className='btn bg-dark  text-white m-2'>Get Products</Link>
        <Link to='/addproducts' className='btn bg-dark  text-white m-2'>Add Products</Link>

      </nav>


      <Routes>

        <Route path='/signup'element={<SignUp/>}/>
        <Route path='/signin'element={<SignIn/>}/>
        <Route path='/'element={<GetProducts/>}/>
        <Route path='/addproducts'element={<AddProducts/>}/>
        <Route path='/mpesa'element={<Mpesa/>}/>
        

      </Routes>    
    </div>
    </Router>
  );
}

export default App;
