import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/App.css';
import Greeting from '../components/Greeting';

function Home() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>ひつじの寝床</title>
            </Helmet>
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