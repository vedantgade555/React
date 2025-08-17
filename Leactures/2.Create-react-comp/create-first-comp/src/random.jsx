// Code Reusability

function Random(){
    let number = Math.random()*100;

    return <h1 style={{'background-color':'aqua'}}
    // double curley brackets {{}} used for inline CSS
    >Random number is : {Math.round(number)}</h1>
}
export default Random; 