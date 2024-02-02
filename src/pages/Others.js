import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/App.css';

function Others() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>others - ひつじの寝床</title>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nemusheep.github.io/others" />
                <meta property="og:title" content="others - ひつじ" />
                <meta property="og:description" content="web site of nemusheep" />
                <meta property="og:site_name" content="ひつじの寝床" />
                <meta property="og:image" content="https://nemusheep.github.io/images/sheepicon.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:image" content="https://nemusheep.github.io/images/sheepicon.png" />
                <meta name="twitter:description" content="web site of nemusheep" />
                <meta name="twitter:creator" content="@mesheep_sleep" />
            </Helmet>
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