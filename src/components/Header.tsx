import sheepicon from '@/images/sheepicon.png';
import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css';

function Header() {
    return (
        <header className='App-header'>
            <Link href='/' className='home'>
                    <Image src={sheepicon} className='home-logo' alt='logo' />
                    <div className='home-name'>home</div>
            </Link>
            <nav className='menu'>
                <div className='menu-item'>
                    <Link href='/about'>about</Link>
                </div>
                <div className='menu-item'>
                    <Link href='/blog'>blog</Link>
                </div>
                <div className='menu-item'>
                    <Link href='/illust'>illust</Link>
                </div>
            </nav>
            
        </header>
    );
}

export default Header;