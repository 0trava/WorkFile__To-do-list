// $ npm install react-icons --save
// $ npm install --save normalize.css


// 1
// Додамо до проекту бібліотеку Redux - набір функцій для створення стора (сховища, store),
// роботи зі станом програми (state) та відправлення екшенів (дій, actions).

// $ npm install redux

// Для використання React та Redux разом, необхідно додати до проекту бібліотеку React Redux.
// Це набір компонентів та хуків зв'язуючих компонентів React та Redux стор (store).

// $ npm install react-redux


import ReactDOM from "react-dom/client";
import { App } from "components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

