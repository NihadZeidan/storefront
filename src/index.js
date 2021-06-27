import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import store from "./store/index";

function All() {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}

ReactDOM.render(<All />, document.getElementById("myRoot"));
