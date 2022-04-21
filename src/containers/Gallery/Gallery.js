import React, { useEffect, useState } from 'react';
import './Gallery.css';
import Photos from '../../components/Photos/Photos';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Gallery () {

    const [ myPics, setPics ] = useState({
        loading: false,
        photos: null,
        curPage: null
    });

    const dispatch = useDispatch()
    const page = useSelector(state => state.currentPage.currentPage)
    const myPhotos = useSelector(state => state.myPhotos.myPhotos)

    const handlePrev = (photo) => {
        dispatch({ type: 'prev', payload: 1 })
        dispatch({type: 'hide', payload: photo.id})
    }

    const handleNext = (photo) => {
        dispatch({ type: 'next', payload: 1 })
        dispatch({type: 'show', payload: photo})
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Подробнее
        </Tooltip>
      );

    useEffect(() => {
        setPics({ loading: true });
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((photos) => {
                const allPhotos = photos.data;
                const myPage = allPhotos.slice(0, 24)
                setPics({ loading: false, photos: allPhotos, curPage: myPage })
            });

    }, [ setPics ]

    );

        return (
            <div className='Users'>
                <h1>All photos</h1>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <Photos isLoading={myPics.loading} photos={myPics.curPage}>
                        {myPhotos}
                    </Photos>
                </OverlayTrigger>
                <Button onClick={() => handlePrev()}>Prev</Button>
                <span style={{ fontSize: '17px', color: 'grey', marginTop: '12px' }}>{page < 1 ? 1 : page}</span>
                <Button onClick={() => handleNext()}>Next</Button>

            </div>
        )
    }

export default Gallery;