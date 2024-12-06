import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Main />}>
        <Route path="/admin/main" element={<Main />} />
        <Route path="/admin/page-one" element={<PageOne />} />
        <Route path="/admin/page-two" element={<PageTwo />} />
      </Route>
    </Routes>
  );
}

export default App;
