import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import MyFavColor from './MyFavColor';
import MyRefComp from './MyRefComp';
import MyImagesComp from './MyImagesComp';
import MycssComp from './MycssComp';
import MyStateComp from './MyStateComp';
import MyDetailComp from './MyDetailComp';
import HoverCounter from './HoverCounter';
import PageNotFound from './PageNotFound';
import PureComp from './PureComp';
import IncCounter from './IncCounter';
import ChildComp from './ChildComp';
import Dashboard from '../CRUD/DashBoard';


export const MyRouting = () => {
    return (
         
        //<BrowserRouter>
            <Routes> 

                {/* default routing  */}
                <Route path='' element={<MyRefComp />}></Route>
                <Route path='login' element={<MyRefComp />}></Route>

                {/* naming routing */}
                <Route path='form' element={<MyDetailComp />}></Route>
                <Route path='img' element={<MyImagesComp />}></Route>
                <Route path='dashboard' element={<Dashboard />}></Route>
                {/* paramerized routing  */}
                <Route path='mycss/:id' element={<MycssComp />}> </Route>

                {/* child routing */}

                <Route path='hoverincrement' element={<HoverCounter />}></Route>
                <Route path='child' element={<ChildComp />}></Route>

                {/* wild card routing---- redirect to another tab due to wrong input nd this routing must at last */}
                <Route path='*' element={<PageNotFound />}></Route>







            </Routes>
        
        //</BrowserRouter>
    )
}

export default MyRouting;