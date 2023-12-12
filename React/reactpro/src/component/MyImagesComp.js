import React from 'react'
import samosa from '../component/shared/multimedia/samosa.jpeg';
import dog from '../component/shared/multimedia/dogimages.jpeg';
import vdo from '../component/shared/multimedia/cartoon.mp4';

//accessing constant data file
import Data from './shared/constant/constantData';


 const MyImagesComp = () => {
    return (
        <div>
            <h1>This is my images component</h1>
            <img src={samosa} alt="samosa" />
            <img src={dog} alt="dog" />
            <hr />
            <img src={Data.book} alt="book" /> 
            <hr />
            <video src={vdo} controls height="200px" width="300px"></video>

        </div>
    )
}
export default MyImagesComp;
