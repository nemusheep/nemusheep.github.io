import { HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import OgpSettings from '../components/OgpSetting';
import sheepicon from '../images/sheepicon.png';
import '../css/App.css';

function About() {
    const ogpData = {
        title: 'about - 寝床',
        description: 'who is nemusheep?',
        url: '/about',
        image: '/images/sheepicon.png'
    };
    
    return (
        <HelmetProvider>
            <OgpSettings {...ogpData} />
            <div className='App-about'>
                <h1>わたしについて</h1>
                <img src={ sheepicon } className='image-sheep' alt='image of nemusheep' />
                <h2>🐏 / ひつじ</h2>
                <p>加ひつじ項なし←流石に嘘</p>
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
                <ul>
                    <li>絵描く</li>
                    <li>曲聴く(広義ボカロが主)</li>
                    <li>本読む(雑食だけどSFは特に)</li>
                </ul>
                <h2>ひとこと</h2>
                <p>おもしろい本、漫画、アニメいつでも募集中</p>
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