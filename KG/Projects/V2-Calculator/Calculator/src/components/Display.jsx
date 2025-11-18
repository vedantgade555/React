// import styles from '../styles/display.module.css';
import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <input
            type="text"
            className={`${styles.display} form-control`}
            value={displayValue}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
