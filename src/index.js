// $ npm install react-icons --save
// $ npm install --save normalize.css


// 1
// Додамо до проекту бібліотеку Redux - набір функцій для створення стора (сховища, store),
// роботи зі станом програми (state) та відправлення екшенів (дій, actions).

// $ npm install redux

// Для використання React та Redux разом, необхідно додати до проекту бібліотеку React Redux.
// Це набір компонентів та хуків зв'язуючих компонентів React та Redux стор (store).

// $ npm install react-redux

// 2

// Після створення стору необхідно зв'язати його з компонентами React, 
// щоб вони могли отримувати доступ до стору та його методів. Для цього у 
// бібліотеці React Redux є компонент Provider, котрий чекає однойменний пропс store. 
// Для того щоб будь-який компонент у додатку міг використовувати стор, обертаємо 
// Provider все дерево компонентів.

// 3

// Далі встановлюємо бібліотеку, яка дозволить ініціалізувати логіку Redux DevTools
// та зв'язати її з розширенням в інструментах розробника.
// $ npm install @redux-devtools/extension


import ReactDOM from "react-dom/client";
import { App } from "components/App";
import "./index.css";

// 2 Додали
import { Provider } from "react-redux";
import { store } from "./redux/store";

// БУЛО
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// 2 Додали
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
