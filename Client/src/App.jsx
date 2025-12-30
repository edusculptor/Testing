import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Pratik from './Pages/Pratik'
import Piyush from './Pages/Piyush';
import Bhavna from './Pages/Bhavna';
import Devyani_Steffi from './Pages/Devyani_Steffi'
import Dhanasvi from './Pages/Dhanasvi'
import Minal from './Pages/Minal'
import Akash from './Pages/Akash'
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Pratik/>}/>
     <Route path="/Piyush" element={<Piyush/>}/>
      <Route path="/Devyani_Steffi" element={<Devyani_Steffi/>}/>
       <Route path="/Dhanasvi" element={<Dhanasvi/>}/>
        <Route path="/Minal" element={<Minal/>}/>
         <Route path="/Akash" element={<Akash/>}/>
          <Route path="/Bhavna" element={<Bhavna/>}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App