// import styles from '../styles/display.module.css';
import styles from "./Display.module.css";
const Display=() => {
    return(
         <div className="container">
        <div className="row">
          <div className="col-md-10">
            <input type="text" className={styles.display} />
          </div>
        </div>
    </div>
    )
}
export default Display;