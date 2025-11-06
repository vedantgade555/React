// 21. Passing Data via Prop
// used to pass values as a arguments 
const ErrorMessage = ({items})=>{
   
    return (
    <>
        {items.length === 0 && <h3>I am still Hungry</h3>}
    </>)
}