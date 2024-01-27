import { Link } from 'react-router-dom';
import logo from '../images/sheepicon.png';
import '../css/App.css';

function Header() {
    return (
        <header className='App-header'>
            <Link to='/' className='home'>
                <img src={logo} className='home-logo' alt='logo' />
                <div className='home-name'>ね＝ひ</div>
            </Link>
            <nav className='menu'>
                <div className='menu-item'>
                    <Link to='/about'>あああ</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/page'>いい</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/page2'>う</Link>
                </div>
            </nav>
            
        </header>
    );
}

export default Header;