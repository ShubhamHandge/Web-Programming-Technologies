import logo from './logo.svg';
import './App.css';
import FunctionComp from './component/FunctionComp';
import NameComp from './component/NameComp';
import ClassComp from './component/ClassComp';
import MyStateComp from './component/MyStateComp';
import MyDetailComp from './component/MyDetailComp';
import EventsComp from './component/EventsComp';
import ClickCount from './component/ClickCount';
import ParentComp from './component/ParentComp';
import ChildComp from './component/ChildComp';
import MyImagesComp from './component/MyImagesComp';
import ConditionalRendering from './component/ConditionalRendering';
import MycssComp from './component/MycssComp';
import IncCounter from './component/IncCounter';
import HoverCounter from './component/HoverCounter';
import MyFavColor from './component/MyFavColor';
import MyRefComp from './component/MyRefComp';
import MyRouting from './component/MyRouting';

import { BrowserRouter } from 'react-router-dom';

import { Nav } from './component/Nav';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className='text-warning bg-primary'>Welcome You All In React Session</h1>
{/* 
      <FunctionComp name="SHUBH" post="DEVELOPER" />

      <NameComp />

      <ClassComp name="SHUBHAM"  post="BACK END DEVELOPER"/>

      <MyStateComp city="NASHIK"  country="INDIA"/>

      <MyDetailComp fname="Shubham" lname="Handge" address="Nashik"/> */}

      {/* <EventsComp />
      <ClickCount />
      <ParentComp /> */}
      {/* <ChildComp /> */}
      {/* <MyImagesComp /> */}
      {/* <ConditionalRendering /> */}
      {/* <MycssComp /> */}
      {/* <IncCounter />
      <HoverCounter />
      <Hoc /> */}
      {/* <MyFavColor /> */}
      {/* <MyRefComp />  */}



       {/* ---for navigating----   */}
      
      <BrowserRouter>
      <div className='container'>
        <div className='card border-primary'>
          <div className='card-header border-primary'>
          <Nav />
          </div>    
          <div className='cars body'>
            <MyRouting />
          </div>
        </div>
      </div>

      </BrowserRouter>

      

    </div>
  );
}

export default App;
