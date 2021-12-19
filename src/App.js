import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import Product from './pages/Home/Product/Product';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
     <BrowserRouter>
     <switch>
     <Route exact path='/'>
            <Home></Home>
     </Route>
     </switch>
          
      </BrowserRouter>
  );
}

export default App;
