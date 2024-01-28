import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/App.css';
import pic1 from '../images/twicon1.png';

function Illust() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>illust - ひつじの寝床</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/css/lightbox.css" rel="stylesheet"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/js/lightbox.min.js" type="text/javascript"></script>
            </Helmet>
            <div className='App-about'>
                <h1>
                    い
                </h1>
                <p>練習や落書き置き場<br />まともな絵は
                    <a href='https://twitter.com/myn_Mei' target='_blank' rel='noopener noreferrer'>Twitter(@myn_Mei)</a>あるいは
                    <a href='https://www.pixiv.net/users/68447218' target='_blank' rel='noopener noreferrer'>pixiv</a>へ
                </p>
                <div className='illust-card'>
                    <img src={ pic1 } alt='picture1'/>
                    <div className='illust-card-content'>
                        <h2>アイコン(2024/01/26〜)</h2>
                        <p>手癖で描いた子。意外と気に入っている。</p>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
}

export default Illust;