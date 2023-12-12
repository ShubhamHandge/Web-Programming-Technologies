import React from 'react'

export const EventsComp = () => {
    const greet = ()=>{
        console.log("This is my greeting function");
    }
    const Welcome = (myname)=>{
        console.log(`welcomes you  ${myname}`);
    }
    const Welcomestudents = (myname)=>{
        window.alert(`welcomes you all in AIT YCP MUMBAI`);
    }


    return (
        <div>
            <h2>THis is my EventsComp</h2>
            <button type='button' onClick={greet}>Greet</button>
            <button type='button' onClick={()=>Welcome("Shubham")}>Welcome</button>

            <h2 onMouseOver={Welcomestudents}>Hover on me to welcome students</h2>


        </div>
    )
}

export default EventsComp;