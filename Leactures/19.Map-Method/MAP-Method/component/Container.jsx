import styles from './container.module.css';
// const Conatiner = (props) => {
//     return(
//         <div className={styles.container}>{props.children}</div>
//     )
// }

// OR 
destructing 

const Conatiner = ({children}) => {
    return(
        <div className={styles.container}>{children}</div>
    )
}

export default Conatiner;  