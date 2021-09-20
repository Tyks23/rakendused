import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

//Is this how you comment???
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path='/' exact >
        <Home />
      </Route>
      <Route path='/cart' exact >
        <Cart />
        </Route>
      <Route path='/add-item' exact >
        <AddItem />
      </Route>
    </div>
  );
}

export default App;
    

