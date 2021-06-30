import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./store/index";

function All() {
  return (
    <>
      <BrowserRouter>
        <Provider store={myStore}>
          <App />
        </Provider>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<All />, document.getElementById("myRoot"));
