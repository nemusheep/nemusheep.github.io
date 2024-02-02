import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/App.css';
import Greeting from '../components/Greeting';
import OgpSettings from '../components/OgpSetting';

function Home() {
    const ogpData = {
        title: 'home - 寝床',
        description: 'web site of nemusheep',
        url: '/',
        image: '/images/sheepicon.png'
    };
    
    return (
        <HelmetProvider>
            <OgpSettings {...ogpData} />
            <div className='App-home'>
                <h1>
                    寝床
                </h1>
                <p></p>
                <div className='time'>
                    <Greeting />
                </div>
            </div>
        </HelmetProvider>
    );
}

export default Home;