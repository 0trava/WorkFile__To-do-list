import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
// Додаємо
import { statusFilters } from "../../redux/constants";

// Імпортуємо хук
import { useSelector, useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { setStatusFilter } from "../../redux/actions";




export const StatusFilter = () => {

    // Отримуємо посилання на функцію відправки екшенів
    const dispatch = useDispatch();

    // Отримуємо значення фільтра із стану Redux
    const filter = useSelector(state => state.filters.status);

    // Викликаємо генератор екшену та передаємо значення фільтра
    // Відправляємо результат - екшен зміни фільтра
    const handleFilterChange = filter => dispatch(setStatusFilter(filter));


  return (
    <div className={css.wrapper}>
      <Button 
        onClick={() => handleFilterChange(statusFilters.all)} 
        selected={filter === statusFilters.all}
        >All</Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.active)}
        selected={filter === statusFilters.active}
        >Active</Button>
      <Button 
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
        >Completed</Button>
    </div>
  );
};