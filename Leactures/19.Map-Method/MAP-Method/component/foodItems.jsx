import Item from "./item";
const FoodItems = ({items}) => {
  
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item key={item} foodItem = {item}
        handleBuyButton={()=> console.log("clicked")}></Item>
        // We are passing argument as props to item component
      ))}
    </ul>
  );
};

export default FoodItems;
