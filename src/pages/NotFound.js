import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/App.css';

function NotFound() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>NotFound - ひつじの寝床</title>
            </Helmet>
            <div className='App-nfound'>
                <h1>
                    ないよ
                </h1>
                <p>なにもないよ</p>
            </div>
        </HelmetProvider>
    );
}

export default NotFound;