import logo from './images/sheepicon.png';
import xlogo from './images/xlogo.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a className='icon' href='https://nemusheep.github.io/'>
          <img src={logo} className='App-logo' alt='logo' />
        </a>
        <ul className='menu-bar'>
          <li>
            <a href='https://nemusheep.github.io/'>home</a>
          </li>
          <li>
            <a href='https://nemusheep.github.io/'>about</a>
          </li>
          <li>
            <a href='https://nemusheep.github.io/'>link</a>
          </li>
        </ul>
      </header>
      <main className='App-main'>
        <h1>
          あああああ
        </h1>
        <p>
          WIP
        </p>
        <div className='centered-list'>
          <ol>
          <li>おはよう</li>
          <li>こんにちわ</li>
          <li>こんばんわ</li>
          <li>おはよう</li>
          <li>こんにちわ</li>
          <li>こんばんわ</li>
          <li>おはよう</li>
          <li>こんにちわ</li>
          <li>こんばんわ</li>
          <li>おはよう</li>
          <li>こんにちわ</li>
          <li>こんばんわ</li>
          <li>おはよう</li>
          <li>こんにちわ</li>
          <li>こんばんわ</li>
          <li>おはよう</li>
          <li>こんにちわ</li>
          <li>こんばんわ</li>
          <li>おはよう</li>
          <li>こんにちわ</li>
          <li>こんばんわ</li>
          <li>おはよう</li>
          <li>こんにちわ</li>
          <li>こんばんわ</li>
        </ol>
        </div>
        <p>
          毎日ってこの繰り返しらしいです
          <br /><br />
          虚しいもんですね人生って
          <br /><br />
        </p>
      </main>
      <footer className='App-footer'>
        <a className='icon' href='https://twitter.com/mesheep_sleep' target='_blank' rel='noopener noreferrer'>
          <img src={xlogo} alt='X icon' width='20' height='20' />
        </a>
        <p> &copy; 2024 nemuSheep</p>
      </footer>
    </div>
  );
}

export default App;
