import logo from '../images/Logo.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <div>
      <img src={logo} />
      <Nav />
    </div>
  );
};

export default Header;
