import HttpGet from "../API/HttpGet";
import HttpPost from "../API/HttpPost";
import Login, { loginCheck } from "./User Account/Login";
import { getUser, setUser } from "./User Account/UserInfo";

function Home() {
    loginCheck();
    // const response = await HttpGet("get_all_users");
    // console.log(response);
    // const data = {
    //     "name": "A5",
    //     "calorieBurnPerHour": 1000
    // }
    // const response = await HttpPost("create_activity?adminKey=fee98", data);
    // const user = await getUser();
    // console.log(user);

    
    return (<>
        <Login />
    </>);
}
export default Home;