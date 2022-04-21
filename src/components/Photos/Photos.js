import React from "react";
import Model from '../Model/Model';
import './Photos.css';
import { Link } from 'react-router-dom';


const Photo = (props) => {

    const { photos } = props;
    const style = {
        width: 200,
        height: 200
      };

    if (!photos || photos.length === 0) return <p>No photos, sorry</p>;
    return (
        <div className="UsersDiv">
            {photos.map((photo) => {
                return (
                    <Model key={photo.id}>
                        <img className="Photo" src={photo.url} alt={photo.url}/>
                        <h3>{photo.title}</h3>
                        <Link style={style}to={`/photos/${photo.url}`}>About photo</Link>
                    </Model>
                )
            })
            }
        </div>

    )

}
export default Photo;