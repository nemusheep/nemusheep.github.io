import { Helmet, HelmetProvider } from 'react-helmet-async';
import OgpSettings from '../components/OgpSetting';
import '../css/App.css';

const ogpData = {
    title: 'others - 寝床',
    description: 'others',
    url: '/others',
    image: '/images/sheepicon.png'
};

function Others() {
    return (
        <HelmetProvider>
            <OgpSettings {...ogpData} />
            <div className='App-about'>
                <h1>
                    その他
                </h1>
                <p>なんか書く</p>
                <p>なに書こうかな</p>
                <p>なにも書くことない</p>
            </div>
        </HelmetProvider>
    );
}

export default Others;