import logo from '../images/Logo.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} />
      <Nav />
    </div>
  );
};

export default Header;
