import '../css/App.css';
import Greeting from '../components/Greeting';

function Home() {
    return (
        <div className='App-home'>
            <h1>
                ねむ＝ひつじ
            </h1>
            <p></p>
            <div className='time'>
                <Greeting />
            </div>
        </div>
    );
}

export default Home;