import React from "react";
import './PhotoDetails.css';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../UseFetch/UseFetch';
import { useParams } from "react-router-dom";



function PhotoDetails () {

    const {id} = useParams();
    const { data: photo, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/photos/' + id);

    const navigateTo = useNavigate();

    const BackHandle = () => {
        navigateTo('/')
    }

    return (
        <div className="PostDetails">

             { isPending && <div>Loading...</div>}
             { error && <div>{error}</div>}
            {photo && (
                <div className="usersDiv">
                    <img className="Photo" src={photo.url} alt={photo.url} />
                    <h3>{photo.title}</h3>
                </div>)}
                <button onClick={BackHandle}>Back to Gallery</button>
        </div>
            )
}

export default PhotoDetails;