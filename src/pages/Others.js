import { HelmetProvider } from 'react-helmet-async';
import OgpSettings from '../components/OgpSetting';
import '../css/App.css';
import PuzzlePanel from '../components/PuzzlePanel/PuzzlePanel';

function Others() {
    const ogpData = {
        title: 'others - 寝床',
        description: 'others',
        url: '/others',
        image: '/images/sheepicon.png'
    };

    return (
        <HelmetProvider>
            <OgpSettings {...ogpData} />
            <div className='App-about'>
                <h1>
                    その他
                </h1>
                <div>
                    <p>どこかで見たようなゲーム<br />お手本と同じになるように動かしてね</p>
                    <PuzzlePanel />
                </div>
            </div>
        </HelmetProvider>
    );
}

export default Others;