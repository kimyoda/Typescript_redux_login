import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<></>} />
      <Route path="/admin" element={<></>}>
        <Route path="/admin/main" element={<></>} />
        <Route path="/admin/page-one" element={<></>} />
        <Route path="/admin/page-two" element={<></>} />
      </Route>
    </Routes>
  );
}

export default App;
