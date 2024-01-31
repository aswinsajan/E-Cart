
import './App.css';
import Cart from './Pages/Cart';
import Whishlist from './Pages/Whishlist';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/whishlist' element={<Whishlist/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
