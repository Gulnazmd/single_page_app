import React from "react";
import Model from '../Model/Model';
import './Photos.css';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


const Photo = (props) => {

    const { photos } = props;
    const style = {
        width: 100,
        height: 40,
        marginTop: '5px'
      };

    if (!photos || photos.length === 0) return <p>No photos, sorry</p>;
    return (
        <div className="UsersDiv">
            {photos.map((photo) => {
                return (
                    <Model key={photo.id}>
                        <img className="Photos" src={photo.url} alt={photo.url}/>
                        <Button style={style} variant="outline-info"><Link  to={`/photo_details/${photo.id}`}>Подробнее</Link></Button>
                    </Model>
                )
            })
            }
        </div>

    )

}
export default Photo;