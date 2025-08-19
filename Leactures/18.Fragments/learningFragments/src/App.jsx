import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  

  return (
  //  <div>
  //    <h1>Healthy Foods</h1>
  //     <ul class="list-group">
  //       <li class="list-group-item">An item</li>
  //       <li class="list-group-item">A second item</li>
  //       <li class="list-group-item">A third item</li>
  //       <li class="list-group-item">A fourth item</li>
  //       <li class="list-group-item">And a fifth one</li>
  //     </ul>
  //   </div>

  // Fragments are used to avoid unneceserily  div tag
  // If we dont close in div tag then they will show error
  // Due to that we are use fragments

  // <React.Fragment>
  //   <h1>Healthy Foods</h1>
  //      <ul class="list-group">
  //        <li class="list-group-item">Panner</li>
  //        <li class="list-group-item">Green Vegitabels</li>
  //        <li class="list-group-item">Salad</li>
  //        <li class="list-group-item">Milk</li>
  //        <li class="list-group-item">Proteins </li>
  //      </ul>
  // </React.Fragment>
  // The above syntax is long syntax
  // For use of long syntax we need to import the the react file 
  // The file is import React from "react"


  // Another Short Syntax is enclosed in  <></> 

  <>
    <h1>Healthy Foods</h1>
       <ul class="list-group">
         <li class="list-group-item">Panner</li>
         <li class="list-group-item">Green Vegitabels</li>
         <li class="list-group-item">Salad</li>
         <li class="list-group-item">Milk</li>
         <li class="list-group-item">Proteins </li>
       </ul>
  </>
  );
}

export default App
