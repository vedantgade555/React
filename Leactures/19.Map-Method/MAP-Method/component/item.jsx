import styles from './item.module.css';

const Item = ({ foodItem,handleBuyButton }) => {

  const handleBuyButtonClick = (event) => {
    console.log(event);
    console.log(`Item Bought: ${foodItem}`);
  };

  return (
    <li className={`list-group-item ${styles['kg-item']} list-group-item`}>
      <span className={styles['kg-span']}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`}
      onclick = {handleBuyButton} 
      >BUY</button>

    </li>
  );
};

export default Item;
