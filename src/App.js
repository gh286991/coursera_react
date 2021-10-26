import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './dishes';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES}></Menu>
    </div>
  );
}

export default App;
