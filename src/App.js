import logo from './logo.svg';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <ProductList/>
      
    </div>
  );
}

export default App;
