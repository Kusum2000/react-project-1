import React from 'react';
import guy_image from '../src/assets/guy.jpg';
import girl_image from '../src/assets/girl.jpg';
import Detail from './detail';

function Home(){
    return(
    <div className="home-div">
        <Detail age="19" name="Tharun Jain" image={guy_image} />
    <Detail age="21" name="Aishwarya Ananya" image={girl_image}/>
    </div>
    )
}
export default Home;