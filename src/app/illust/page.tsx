'use client';

import '@/app/globals.css';
import React, { useState } from 'react';
import Image from 'next/image';
import ShareButton from '@/components/ShareButton';
import { images, imgsrcs } from '@/contents/illustration/images';

export default function IllustPage() {
    const [pageIndex, setPageIndex] = useState<number>(-1);

    const handleClick = (i: number) => {
        setPageIndex(i);
    };

    return (
        <div className='App-illust'>
            <h1>pixheep</h1>
            <p>練習や落書き置き場<br />
                まともな絵は&nbsp;<a href='https://twitter.com/myn_Mei' target='_blank' rel='noopener noreferrer'>Twitter(@myn_Mei)</a>&nbsp;
                あるいは&nbsp;<a href='https://www.pixiv.net/users/68447218' target='_blank' rel='noopener noreferrer'>pixiv</a>&nbsp;へ
            </p>
            {
                pageIndex === -1 ?
                <div className='card-container'>
                    <div className='illust-list'>
                        {
                            images.map((image, index) => (
                            <Image key={ index } src={ imgsrcs[index] } alt={ image.alt } onClick={ () => handleClick(index) } style={{ cursor:'pointer' }}/>
                            ))
                        }
                    </div>
                </div> :
                <DetailGallery pageIndex={ pageIndex } onImageClick={ () => handleClick(-1) }/>
            }
        </div>
    );
}

interface DetailGalleryProps {
    pageIndex: number;
    onImageClick: (i: number) => void;
};

function DetailGallery(props: DetailGalleryProps) {
    return (
            <div className='card-container'>
                <div className='illust-card'>
                    <Image src={ imgsrcs[props.pageIndex] } alt={ images[props.pageIndex].alt } onClick={ () => props.onImageClick(props.pageIndex) } style={{ cursor: 'pointer' }}/>
                    <div className='illust-card-content'>
                        <h2>{ images[props.pageIndex].title }</h2>
                        <p>{ images[props.pageIndex].description }</p>
                        <p style={{ color: '#a0a0a0' }}>Date: { images[props.pageIndex].date }</p>
                        <div className='illust-card-share'>
                            <ShareButton text={ images[props.pageIndex].title + ' on pixseep' } url={ 'https://nemusheep.github.io/illust' } />
                        </div>
                    </div>
                </div>
            </div>
    );
}