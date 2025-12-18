import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    // we are use fetch
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/posts"
    // );
    // const data = await response.json();
    // console.log(data);
    // ----------------------------------------------------------------------
    // here we use axios
    // for use forst we need to run command ' npm i axios '
    // const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log(response.data)
    // --------------------------------------------------------------------------------------

    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    // console.log(response.data)
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
          return <h3 key={elem.id}>Hello, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  );
};

export default App;
