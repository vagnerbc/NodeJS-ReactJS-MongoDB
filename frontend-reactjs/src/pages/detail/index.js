import React from 'react';
import './styles.css';

const Detail = (props) => {
    return (
        <div className="post-detail">
            <p>
                <strong>{props.location.state.title}</strong>   
            </p>
            <p>
                <strong>{props.location.state.description}</strong>
            </p>
        </div>
    )
}

export default Detail
