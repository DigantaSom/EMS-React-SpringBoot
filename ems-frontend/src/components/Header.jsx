import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav
        className='navbar navbar-expand-md navbar-dark bg-dark'
        style={{ marginBottom: 25 }}>
        <Link to='/' className='navbar-brand'>
          Employee Management System
        </Link>
      </nav>
    </header>
  );
};

export default Header;
