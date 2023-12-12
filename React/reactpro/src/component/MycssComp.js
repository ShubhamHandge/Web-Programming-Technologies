import React from 'react'
// use external css 
import './external.css';
//use of module css
import mdl from './mycsstwo.module.css';

 const MycssComp = () => {

    const txtSuccess={
        color:"green",
        fontsize:"25px",
        fontweight:"700"
    }

     let isCond= true;
        const special={
        textTransform:(isCond)?"Uppercase":"lowercase",
        color:(!isCond)?"brown":"pink",
        backgroundColor:(isCond)?"yellow":"aqua"
    }

    return (
        <div>
            {/* use of inline css  */}
            <h2 style={{"color":"red","background-color":"aqua"}}>This is MycssComp</h2>
            <p style={txtSuccess}>Hello everyone , i hope you all are tired</p>
            <p style={special}>Don't worry students we are Going</p>
            {/* use of external css  */}
            <h2 className='txtspecial'>Just wait student session is ending</h2>
            <p className={mdl.mytitle}>Everyone is tired so we stop here</p>
        </div>
    )
}

export default MycssComp;