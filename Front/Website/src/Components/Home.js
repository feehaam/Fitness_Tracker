import HttpGet from "../API/HttpGet";
import HttpPost from "../API/HttpPost";
import Login, { LoginCheck } from "./User Account/Login";
import { getUser, setUser } from "./User Account/UserInfo";
import { Logout } from "./User Account/Logout";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    LoginCheck().then(logged =>{
        if(!logged){
            navigate('/login', { replace: true });
        }
    })
    
    const food = {
        "id": 8,
        "name": "Apple vin",
        "calories": 1,
        "carbohydrateDietryFiber": 2,
        "carbohydrateSugar": 3,
        "protein": 4,
        "fatSaturated": 5,
        "fatTrans": 6,
        "cholesterol": 7,
        "iron": 8,
        "magnesium": 9,
        "calcium": 10,
        "sodium": 11,
        "potassium": 12,
        "cobalamin": 13,
        "vitamin": 0,
        "vitaminA": 14,
        "vitaminB": 15,
        "vitaminC": 16,
        "vitaminD": 17,
        "vitaminE": 18,
        "vitaminK": 19
      }
    
    return (<>
        This is the home page.
    </>);
}
export default Home;