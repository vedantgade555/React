import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [UserData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)
  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(function(){
    getdata()
  },[index])

  let printUserData = <h3 className="text-gray-300 text-xs font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">  Loading... </h3>

  if (UserData.length > 0) {
    printUserData = UserData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}></Card>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen text-white p-4 overflow-auto">
      {/* <button
        onClick={getdata}
        className="bg-green-600 text-white px-5 py-2 mb-3 active:scale-95 rounded"
      >
        getdata
      </button> */}

      <div className="flex flex-wrap gap-5 p-4 ">{printUserData}</div>

      <div className="flex justify-center items-center gap-6">
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }} className="bg-amber-400 text-black px-4 py-2 font-semibold rounded cursor-pointer active:scale-95">Prev</button>
        <h4>Page {index}</h4>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }} className="bg-amber-400 text-black px-4 py-2 font-semibold rounded cursor-pointer active:scale-95">Next</button>
      
      </div>
    </div>

    
  );
};

export default App;
