import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AddActivity } from "./Components/Activities/AddActivity";
import { AddDay } from "./Components/Day/AddDay";
import UpdateDay from "./Components/Day/UpdateDay";
import { AddFood } from "./Components/Foods/AddFood";
import Home from "./Components/Home/Home";
import Login from "./Components/User Account/Login";
import { Registration } from "./Components/User Account/Registration";

function App() {
  let backgroundColor = "#333333";
  try{
    backgroundColor = window.localStorage.getItem('color');
  }
  catch(error) {}

  return (
    <div style={{backgroundColor: backgroundColor, height: '1000px'}}>
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
    </div>
  );
}

export default App;

/*
Daily
	- Protein vs fat vs carb bar chart
	- All nutrition bar chart
	- All burned calorie pie
	- All food calorie pie
	- Each meal pie

Weekly
	- Protein vs fat vs carb bar chart
	- All nutrition bar chart
	- All burned calorie pie
	- Daily weight loss pie
	- Daily weight loss bar
	- Each exercise analysis
		- Daily pie
		- Sub attributes bar

Weekly
	- Protein vs fat vs carb bar chart
	- All nutrition bar chart
	- All burned calorie pie
	- Daily weight loss pie
	- Daily weight loss bar
	- Each exercise analysis
		- Daily pie
		- Sub attributes bar
*/