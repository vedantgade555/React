import styles from './WelcomeMessage.module.css';
import { useContext } from "react";
import { TodoItemsContext } from '../store/todo-items-store';

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);

  if (todoItems.length === 0) {
    return <p className={styles.welcome}>Enjoy Your Day</p>;
  }

  return null;
};

export default WelcomeMessage;
