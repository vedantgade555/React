import React from "react";
import { useState } from "react";
const App = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = {
      title: title,
      details: details,
    };

    setTask([...task, copyTask]);
    console.log(task);

    settitle("");
    setDetails("");
  };

  return (
    <div className="h-screen lg:flex bg-black text-white p-10">
      <form
        className="flex flex-col items-start  p-10 lg:w-1/2 gap-3"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* First Input  for heading*/}
        <input
          type="text"
          value={title}
          placeholder="Enter Heading"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="px-5 py-2 border-2 round w-full outline-none font-medium"
        />

        {/* detailed input */}
        <textarea
          value={details}
          placeholder="Write Details Here"
          onChange={(e) => setDetails(e.target.value)}
          className="px-5 py-2 border-2 rounded h-32 w-full outline-none font-medium text-white"
        />

        <button className="bg-white text-black px-5 py-2 rounded  font-medium w-full active:scale-95">
          Add Notes
        </button>
        {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/049/658/509/small_2x/vintage-note-book-png.png" alt="img" className="h-50" /> */}
      </form>

      <div className="lg:w-1/2 p-4 text-white lg:border-l rounded">
        <h1 className="text-3xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap mt-5 gap-5 overflow-auto h-full">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 w-40 rounded-2xl text-black p-6 bg-cover bg-center bg-no-repeat bg-[url('https://static.vecteezy.com/system/resources/thumbnails/049/658/509/small_2x/vintage-note-book-png.png')]"
              >
                <h3 className="leading-tight font-bold text-xl">
                  {elem.title}
                </h3>
                <p className="text-gray-500">{elem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
