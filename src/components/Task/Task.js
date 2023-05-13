import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

// Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { deleteTask } from "../../redux/actions";


export const Task = ({ task }) => {

    // Отримуємо посилання на функцію відправки екшенів
    const dispatch = useDispatch();


      // Викликаємо генератор екшену та передаємо ідентифікатор завдання
      // Відправляємо результат - екшен видалення завдання
      const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};