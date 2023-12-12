import React, { useState } from 'react'
import axios, { Axios } from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


export const AddComp = () => {
    const Navigate = useNavigate()
    const [product,setProduct] = useState({
        name:'',
        price:'',
        company:''
    });
    
    // console.log(event.target.type)
    // console.log(event.target.name)
    // console.log(event.target.value)
    setProduct({...product,[event.target.name]:event.target.value})

}

const addData = (event=>){
    event.prevent();
    axios.get("http://localhost:8888/products").then(()=>{
        window.alert("product added successfully");
        navigate("/dashboard");
    }).catch()


    return (
        <div>
            <h2>Add Component</h2>
            <label>Enter Your Name:</label>
            <input type='text' name='name' ></input>
        </div>
    )
}

export default AddComp;