import logo from './logo.svg';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import { Link, animateScroll as scroll } from "react-scroll";
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';


import './app.css';
import Scroll from './components/SmoothScroll';

function App() {
  return (
    <div className="App">
      <Scroll/>
      <Intro/>
      <About/>
      <ProductList/>
      
    </div>
  );
}

export default App;
