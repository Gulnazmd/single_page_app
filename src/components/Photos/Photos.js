import React from "react";
import Model from '../Model/Model';
import './Photos.css';
import { Link } from 'react-router-dom';
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";


const Photo = (props) => {

    const { photos } = props;

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Read about photo
        </Tooltip>
      );

    if (!photos || photos.length === 0) return <p>No photos, sorry</p>


    return (
        <div className="UsersDiv" >
            {photos.map((photo) => {
                return (
                        <Model  key={photo.id}>
                            <img className="Photos" src={photo.url} alt={photo.url} />
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                    <Button variant="outline-info"><Link to={`/photo_details/${photo.id}`}>Click</Link></Button>
                            </OverlayTrigger>

                        </Model>


                )
            })
            }

        </div>

    )

}
export default Photo;