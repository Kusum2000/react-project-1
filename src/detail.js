import React from 'react';

function Detail(props) {
    return(
        <div>
            <img src={props.image} alt="User_photo" height="200px" width="200px"/>
            <h2>Age: {props.age}</h2>
            <h3>Name: {props.name}</h3>
        </div>
    )
}
export default Detail;