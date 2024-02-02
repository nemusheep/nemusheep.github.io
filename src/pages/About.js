import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import sheepicon from '../images/sheepicon.png';
import '../css/App.css';

function About() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>about - ひつじの寝床</title>
                <meta property="og:url" content="https://nemusheep.github.io/about" />
                <meta property="og:title" content="about - ひつじ" />
            </Helmet>
            <div className='App-about'>
                <h1>わたしについて</h1>
                <img src={ sheepicon } className='image-sheep' alt='image of nemusheep' />
                <h2>🐏 / ひつじ</h2>
                <p>加ひつじ項なし←流石に嘘なので自己紹介のようなものを書きます</p>
                <div className='centered-list' >
                <h2>基本情報</h2>
                <ul>
                    <li>東京大学工学部機械情報工学科</li>
                    <li>絵描き人</li>
                    <li>同人活動初心者</li>
                </ul>
                <h2>興味</h2>
                <p>人工知能、感情、創作</p>
                <h2>趣味・好きな</h2>
                <p>特にこれが！というものです<br/>もっと詳しく書いたページも作る予定</p>
                <ul>
                    <li><div className='favorite'>イラスト</div>
                        <ul>
                            <li>描く→&ensp;
                                <Link to='/page'>illust</Link>
                            </li>
                            <li>観る
                                <ul>
                                    <li>rurudo</li>
                                    <li>荻pote</li>
                                    <li>みきさい</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><div className='favorite'>曲</div>
                        <ul>
                            <li>作る</li>
                            <li>聴く
                                <ul>
                                    <li>広義ボカロ</li>
                                    <li>Reol</li>
                                    <li>DUSTCELL</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><div className='favorite'>アニメ</div>
                        <ul>
                            <li>STEINS;GATE</li>
                            <li>魔法少女まどか☆マギカ</li>
                            <li>ぼっち・ざ・ろっく！</li>
                            <li>ウマ娘プリティダービーseason2</li>
                        </ul>
                    </li>
                    <li><div className='favorite'>本</div>
                        <ul>
                            <li>花の鎖</li>
                            <li>わたしを離さないで</li>
                            <li>アンドロイドは電気羊の夢を見るか？</li>
                        </ul>
                    </li>
                    </ul>
                    <h2>Contact</h2>
                    <ul>
                        <li>Twitter(主):&ensp;
                            <a href='https://twitter.com/mesheep_sleep' target='_blank' rel='noopener noreferrer'>
                                @mesheep_sleep
                            </a>
                        </li>
                        <li>Twitter(絵):&ensp;
                            <a href='https://twitter.com/myn_Mei' target='_blank' rel='noopener noreferrer'>
                                @myn_Mei
                            </a>
                        </li>
                        <li>pixiv:&ensp;
                            <a href='https://www.pixiv.net/users/68447218' target='_blank' rel='noopener noreferrer'>
                                68447218
                            </a>
                        </li>
                        <li>pixivFANBOX:&ensp;
                            <a href='https://mesheep.fanbox.cc' target='_blank' rel='noopener noreferrer'>
                                mesheep
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </HelmetProvider>
    );
}

export default About;