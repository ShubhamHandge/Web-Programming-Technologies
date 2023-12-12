import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Dashboard = () => {
    //create state
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios.get("http://localhost:8888/products").then((res) => {
            console.log(res.data);
            setProduct(res.data);
        }).catch((err) => { })
    }

    //delete request
    const deleteRecord = (id) => {
        if(window.confirm(`Are you sure to delete record of ID: ${id}`)){
            axios.get("http://localhost:8888/products").then((res) => {
            window.alert("product Deleted successfully");
            fetchData();
        }).catch((err) => { })
        }
        
    }

    return (
        <div>
            <h2>This is Dashboard</h2>
            <table className='table table-striped table-hover'>
                <thead className='table-dark'>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th><th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((val, index) => {
                            return <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.company}</td>
                                <td>
                                    <button type='button' className='btn btn-outline-primary'>
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </button>

                                    <button type='button' onClick={()=>deleteRecord(val.id)} className='btn btn-outline-success'>
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard