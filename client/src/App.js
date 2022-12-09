import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
