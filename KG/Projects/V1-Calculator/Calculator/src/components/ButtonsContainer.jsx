const ButtonsContainer = () =>{
     const buttonNames = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9","0","."]; 


    return (
        <div className="container">
          <div className="row">
            <div className="col-md-3">
                {buttonNames.map(buttonName => <button type="button" class="btn btn-outline-primary">{buttonName}</button>)}
            </div>
          </div>
        </div>
    )
}

export default ButtonsContainer;



