import React from 'react'

const MyRefComp = () => {
   
    const inputuid = React.createRef();
    const inputpass = React.createRef();

    const getData =  () => {
        inputuid.current.focus();
        //console.log(inputuid.current.value)
        //console.log(inputpass.current.value)

        // for web storage of server

        let uid = inputuid.current.value;
        let pass = inputpass.current.value;

        sessionStorage.setItem("userid",uid)
        sessionStorage.setItem("userpass",pass)


    }
    

        return (
            <div>
                <h2>This is MyRefComp</h2>
                <form className='class'>
                <label>Enter user ID:</label> <br />
                <input type='text' name='uid' ref={inputuid}/> <br /><br />


                <label>Enter user Password:</label> <br />
                <input type='text' name='uid' ref={inputpass}/>   <br /><br />

                <button type='button' className='btn btn-primary ml-3' onClick={getData}>SUBMIT</button>


                </form>
            </div>
        )
    
}

export default MyRefComp;
