import { Routes, Route } from "react-router-dom";

// PAGES
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

// REDUX
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
