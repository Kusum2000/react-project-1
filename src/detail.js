import React from 'react';

function Detail(props) {
    return(
        <div className="detail">
            <img src={props.image} alt="User_photo"/>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            
        </div>
    )
}
export default Detail;