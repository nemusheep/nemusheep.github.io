import { Link } from 'react-router-dom';
import logo from './images/sheepicon.png';
import './App.css';

function Header() {
    return (
        <header className='App-header'>
            <Link to='/' className='icon'>
                <img src={logo} className='App-logo' alt='logo' />
            </Link>
            <div className='menu-item'>
                <Link to='/about'>あ</Link>
            </div>
            <div className='menu-item'>
                <Link to='/page'>い</Link>
            </div>
            <div className='menu-item'>
                <Link to='/page2'>う</Link>
            </div>
        </header>
    );
}

export default Header;