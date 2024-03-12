import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <button onClick={onClickButton}>New 페이지로 이동</button>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/new"
            element={<New />}
          ></Route>
          <Route
            path="/diary"
            element={<Diary />}
          ></Route>
          <Route
            path="/*"
            element={<NotFound />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
