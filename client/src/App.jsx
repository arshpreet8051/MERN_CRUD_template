import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Users";
import Users from './components/Users';
import CreateUsers from './components/CreateUsers';
import UpdateUsers from './components/UpdateUsers';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}/>
        <Route path='/create' element={<CreateUsers/>}/>
        <Route path='/update/:id' element={<UpdateUsers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
