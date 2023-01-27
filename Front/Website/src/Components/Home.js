import HttpGet from "../API/HttpGet";
import HttpPost from "../API/HttpPost";
import Login, { LoginCheck } from "./User Account/Login";
import { getUser, setUser } from "./Helper/UserInfo"
import { Logout } from "./User Account/Logout";
import { useNavigate } from 'react-router-dom';
import PieChartTest from "./Testing/PieChartTest";
import PieView from "./Graphical/PieView";
import View from "./Graphical/View";

function Home() {
    const navigate = useNavigate();
    LoginCheck().then(logged =>{
        if(!logged){
            navigate('/login', { replace: true });
        }
    })
    
    const data = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 500
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ]

    return (<>
        {/* This is the home page. */}
        {/* <View data={data} type='pie' color='any' size={10} /> */}
        
    </>);
}
export default Home; 