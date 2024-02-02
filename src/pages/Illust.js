import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { images, imgsrcs } from '../contents/illustration/images';
import OgpSettings from '../components/OgpSetting';
import ShareButton from '../components/ShareButton';
import '../css/App.css';

function Illust() {
    const ogpData = {
        title: 'illust - 寝床',
        description: 'illustration of nemusheep',
        url: '/illust',
        image: '/images/sheepicon.png'
    };
    
    const [pageIndex, setPageIndex] = useState(-1);

    const handleClick = (i) => {
        let nextPageIndex = pageIndex;
        nextPageIndex = i;
        setPageIndex(nextPageIndex);
    };

    return (
        <HelmetProvider>
            <OgpSettings {...ogpData} />
            <div className='App-illust'>
                <h1>
                    pixheep
                </h1>
                <p>練習や落書き置き場<br />まともな絵は&nbsp;
                    <a href='https://twitter.com/myn_Mei' target='_blank' rel='noopener noreferrer'>Twitter(@myn_Mei)</a>&nbsp;あるいは&nbsp;
                    <a href='https://www.pixiv.net/users/68447218' target='_blank' rel='noopener noreferrer'>pixiv</a>&nbsp;へ
                </p>
                {pageIndex === -1 ?
                    <div className='card-container'>
                        <div className='illust-list'>
                            {images.map((image, index) => (
                                <img key={ index } src={ imgsrcs[index] } alt={ image.alt } onClick={ () => handleClick(index) } style={{ cursor:'pointer' }}/>
                            ))}
                        </div>
                    </div> :
                    <DetailGallery pageIndex={ pageIndex } onImageClick={ () => handleClick(-1) }/>}
            </div>
        </HelmetProvider>
    );
}

function DetailGallery({ pageIndex, onImageClick }) {
    return (
        <HelmetProvider>
            <OgpSettings title={pageIndex + ' - illust - 寝床'}
                description={'illustration of nemusheep'}
                url={'/illust'}
                image={'/images' + images[pageIndex].src} />
            <div className='card-container'>
                <div className='illust-card'>
                    <img src={ imgsrcs[pageIndex] } alt={ images[pageIndex].alt } onClick={ onImageClick } style={{ cursor: 'pointer' }}/>
                    <div className='illust-card-content'>
                        <h2>{ images[pageIndex].title }</h2>
                        <p>{ images[pageIndex].description }</p>
                        <p style={{ color: '#a0a0a0' }}>Date: { images[pageIndex].date }</p>
                        <div className='illust-card-share'>
                            <ShareButton text={ images[pageIndex].title + ' on pixseep' } url={ 'https://nemusheep.github.io/illust' } />
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
}

export default Illust;