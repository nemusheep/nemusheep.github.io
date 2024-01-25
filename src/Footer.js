import xlogo from './images/xlogo.png';
import './App.css';

function Footer() {
    return (
        <footer className='App-footer'>
            <a className='icon' href='https://twitter.com/mesheep_sleep' target='_blank' rel='noopener noreferrer'>
                <img src={xlogo} alt='X icon' width='20' height='20' />
            </a>
            <p> &copy; 2024 nemuSheep</p>
        </footer>
    );
}

export default Footer;