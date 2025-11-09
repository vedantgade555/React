import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from '../component/foodItems'
import ErrorMessage from '../component/ErrorMessage'
import Item from '../component/item'
import Conatiner from '../component/Container'
import { useState } from 'react'


function App(){
  // let foodItem=[]
   let foodItem=["Paneer", "Green Veggies", "Soy", "Milk", "Salad"]
  //  using conditional operators
  // let emptyMessage = foodItem.length === 0 ? <h3>I am still Hungry</h3>:null
  // We are also use if else condition also 
  // using logicaloperators

  let textState = useState();
  // let textToShow = textState[0];
  // let setTextState = textState[1];  

  let [textToShow, setTextState] = useState('Food Item  ');

  let emptyMessage = foodItem.length === 0 && <h3>I am still Hungry</h3>

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  }

  return(
    <>
      <Conatiner>
       <h1 className="food-heading">Healthy Food</h1>
      {/* // 19.Conditional Randring */}
      {emptyMessage}
      <ErrorMessage items={foodItem}></ErrorMessage>
      
      <FoodItems items={foodItem}></FoodItems>
      </Conatiner>

      {/* <Conatiner>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eius, id explicabo voluptate ea iste earum in quo alias magnam!</p>
      </Conatiner> */}


    </>
  )


}

export default App;
