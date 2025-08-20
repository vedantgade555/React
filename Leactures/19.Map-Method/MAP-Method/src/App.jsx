import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from '../component/foodItems'
import ErrorMessage from '../component/ErrorMessage'
import Item from '../component/item'


function App(){
  // let foodItem=[]
   let foodItem=["Paneer", "Green Veggies", "Soy", "Milk", "Salad"]
  //  using conditional operators
  // let emptyMessage = foodItem.length === 0 ? <h3>I am still Hungry</h3>:null
  // We are also use if else condition also 
  // using logicaloperators
  let emptyMessage = foodItem.length === 0 && <h3>I am still Hungry</h3>


  return(
    <>
      <h1>Healthy Food</h1>
      {/* // 19.Conditional Randring */}
      {emptyMessage}
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>


     
    </>
  )


}

export default App;
