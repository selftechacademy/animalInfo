import "./App.css";
import CounterTen from "./components/counterTen/CounterTen";
import AnimalDetails from "./components/animalDetails/AnimalDetails";
import TodoApp from "./applications/todoApp/TodoApp";
import CartApp from "./applications/cartApp/CartApp";
import { FcLike } from "react-icons/fc";
import Message from "./components/message/Message";
import LoginApp from "./applications/loginApp/LoginApp";

function App() {
  return (
    <div>
      {/* <AnimalDetails /> */}
      {/* <TodoApp /> */}
      {/* <CartApp /> */}
      <LoginApp />
    </div>
  );
}

export default App;
