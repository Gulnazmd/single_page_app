import React from "react";
import './PhotoDetails.css';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../UseFetch/UseFetch';
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Spinner from "../../UI/Spinner/Spinner";



function PhotoDetails () {

    const {id} = useParams();
    const { data: photo, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/photos/' + id);

    const navigateTo = useNavigate();

    const BackHandle = () => {
        navigateTo('/')
    }

    return (
        <div className="PostDetails">

            {isPending ? <Spinner /> : <div>{ error}</div> }
             { error && <div>{error}</div>}
            {photo && (
                <div className="usersDiv">
                    <img className="Photo" src={photo.url} alt={photo.url} />
                    <h3>{photo.title}</h3>
                </div>)}
                <Button onClick={BackHandle}>Back to Gallery</Button>
        </div>
            )
}

export default PhotoDetails;