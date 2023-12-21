import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router , Routes,route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Product from './product/Product';
import { DisplayProduct } from './displayProduct/DisplayProduct';
function App() {
  const productArray = ['a' , 'b', 'c' , 'd']
const cartITems = [];

  return (
    <div className="App">
      <Navbar cartITems = {cartITems}/>
      {/* <Product productArray = {productArray} cartITems = {cartITems} /> */}
      
<Routes>
  <Route path="/" element={ <Product  cartITems = {cartITems} />} />
  <Route  path="/product/:id" element={<DisplayProduct  />} />
</Routes>
      
    </div>
  );
}

export default App;
