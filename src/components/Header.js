import { Link } from 'react-router-dom';
import sheepicon from '../images/sheepicon.png';
import '../css/App.css';

function Header() {
    return (
        <header className='App-header'>
            <Link to='/' className='home'>
                <img src={sheepicon} className='home-logo' alt='logo' />
                <div className='home-name'>home</div>
            </Link>
            <nav className='menu'>
                <div className='menu-item'>
                    <Link to='/about'>about</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/illust'>illust</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/blog'>blog</Link>
                </div>
            </nav>
            
        </header>
    );
}

export default Header;