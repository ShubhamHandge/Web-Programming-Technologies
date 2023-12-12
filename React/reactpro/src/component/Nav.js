import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <div>
            
            <Link to='img' className='btn btn-primary'>MyImagesComp</Link>
            <Link to='form' className='btn btn-primary'>MyDetailComp</Link>
            <Link to='login' className='btn btn-primary'>MyRefComp</Link>
            <Link to='dashboard' className='btn btn-primary'>DashBoard</Link>
            
            


        </div>
    )
}

export default Nav;