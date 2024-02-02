import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/App.css';
import Greeting from '../components/Greeting';

function Home() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>ひつじの寝床</title>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nemusheep.github.io/" />
                <meta property="og:title" content="home - ひつじ" />
                <meta property="og:description" content="web site of nemusheep" />
                <meta property="og:site_name" content="ひつじの寝床" />
                <meta property="og:image" content="https://nemusheep.github.io/images/sheepicon.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:image" content="https://nemusheep.github.io/images/sheepicon.png" />
                <meta name="twitter:description" content="web site of nemusheep" />
                <meta name="twitter:creator" content="@mesheep_sleep" />
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