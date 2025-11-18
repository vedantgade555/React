import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ( {onButtonClick} ) => {
  const buttonNames = [
    "C", "1", "2", "+",
    "3", "4", "-", 
    "5", "6", "*",
    "7", "8", "/",
    "9", "0", ".", "="
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className={`col-md-6 text-center ${styles.buttonsContainer}`}>
          {buttonNames.map((buttonName, index) => (
            <button
              key={index}
              type="button"
              className={`btn btn-outline-primary ${styles.calcBtn}`}
              onClick={()=> onButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonsContainer;
