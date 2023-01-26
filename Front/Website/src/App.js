import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AddActivity } from "./Components/Activities/AddActivity";
import { AddDay } from "./Components/Day/AddDay";
import UpdateDay from "./Components/Day/UpdateDay";
import { AddFood } from "./Components/Foods/AddFood";
import Home from "./Components/Home";
import Login from "./Components/User Account/Login";
import { Registration } from "./Components/User Account/Registration";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Registration />} />
          <Route path='/add_food' element={<AddFood />} />
          <Route path='/add_activity' element={<AddActivity />} />
          <Route path="/add_day" element={<AddDay />} />
          <Route path="/update_day" element={<UpdateDay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
