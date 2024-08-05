import './App.css';
import Layout from './components/layout/Layout';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/pages/Menu';
import Reservations from './components/pages/Reservations';
import OrderOnline from './components/pages/OrderOnline';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/order-online" element={<OrderOnline />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
