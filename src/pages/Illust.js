import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { images, imgsrcs } from '../contents/illustration/images';
import '../css/App.css';

function Illust() {
    const { id } = useParams();
    const [pageIndex, setPageIndex] = useState(id >= 0 ? id : -1);


    const handleClick = (i) => {
        let nextPageIndex = pageIndex;
        nextPageIndex = i;
        setPageIndex(nextPageIndex);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>illust - ひつじの寝床</title>
            </Helmet>
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
                                <Link key={ index } to={'/illust/' + index}>
                                    <img src={ imgsrcs[index] } alt={ image.alt } onClick={ () => handleClick(index) } style={{ cursor:'pointer' }}/>
                                </Link>
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
        <div className='card-container'>
            <div className='illust-card'>
                <Link to='/illust'>
                <img src={ imgsrcs[pageIndex] } alt={ images[pageIndex].alt } onClick={ onImageClick } style={{ cursor: 'pointer' }}/>
                </Link>
                <div className='illust-card-content'>
                    <h2>{ images[pageIndex].title }</h2>
                    <p>{ images[pageIndex].description }</p>
                    <p style={{ color: '#909090' }}>Date: { images[pageIndex].date }</p>
                </div>
            </div>
            <a href={ 'https://twitter.com/intent/tweet?text=' + images[pageIndex].title + ' on pixheep&url=https://nemusheep.github.io/illust/' + pageIndex } target="_blank" rel="noopener noreferrer">ポスト(旧ツイート)する</a>
        </div>
    );
}

export default Illust;