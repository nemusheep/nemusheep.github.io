import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/App.css';
import { useState } from 'react';
import Gallery from '../components/Gallery';

function Illust() {
    const [pageIndex, setPageIndex] = useState(0);
    return (
        <HelmetProvider>
            <Helmet>
                <title>illust - ひつじの寝床</title>
            </Helmet>
            <div className='App-illust'>
                <h1>
                    い
                </h1>
                <p>練習や落書き置き場<br />まともな絵は&nbsp;
                    <a href='https://twitter.com/myn_Mei' target='_blank' rel='noopener noreferrer'>Twitter(@myn_Mei)</a>&nbsp;あるいは&nbsp;
                    <a href='https://www.pixiv.net/users/68447218' target='_blank' rel='noopener noreferrer'>pixiv</a>&nbsp;へ
                </p>
                <Gallery />
            </div>
        </HelmetProvider>
    );
}

export default Illust;