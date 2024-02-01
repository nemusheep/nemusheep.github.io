import '../css/App.css';
import pic1 from '../images/twicon1.png';

function Gallery() {
    return (
        <div className='card-container'>
            <div className='illust-card'>
                <img src={ pic1 } alt='picture1'/>
                <div className='illust-card-content'>
                    <h2>アイコン(2024/01/26〜)</h2>
                    <p>手癖で描いた子。意外と気に入っている。</p>
                </div>
            </div>
        </div>
    );
}

export default Gallery;