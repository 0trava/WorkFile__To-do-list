import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
// Додаємо
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {

    // Отримуємо значення фільтра із стану Redux
    const filter = useSelector(state => state.filters.status);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};