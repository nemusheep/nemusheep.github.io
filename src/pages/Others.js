import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/App.css';

function Others() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>others - ひつじの寝床</title>
                <meta property="og:url" content="https://nemusheep.github.io/others" />
                <meta property="og:title" content="others - ひつじ" />
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