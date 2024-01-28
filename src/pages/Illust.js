import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/App.css';
import pic1 from '../images/twicon1.png';

function Illust() {
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
                <div className='card-container'>
                    <div className='illust-card'>
                        <img src={ pic1 } alt='picture1'/>
                        <div className='illust-card-content'>
                            <h2>アイコン(2024/01/26〜)</h2>
                            <p>手癖で描いた子。意外と気に入っている。</p>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
}

export default Illust;