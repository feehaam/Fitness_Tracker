import httpGet from "../../API/HttpGet";
import { getUser, setUser } from "./UserInfo";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    LoginCheck().then(logged =>{
        if(logged){
            navigate('/', { replace: true });
            return;
        }
    })
    async function signIn() {
        const handle = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const response = await httpGet("get_userid/" + handle);
        const userID = response.data;
        const userResponse = await httpGet("get_user/" + userID + "?userName=" + handle + "&password=" + password);
        console.log(userResponse);
        if (response.status === 200) {
            setUser(userResponse.data.name, password);
            navigate('/', { replace: true });
        }
    }
    return (<>
        <form>
            <input type={"text"} id="username" /><br></br>
            <input type={"password"} id="password" /><br></br>
            <input type={"button"} id="submit" value={"Login"} onClick={() => { signIn() }} />
        </form>
    </>)
}
export default Login;

export async function LoginCheck() {
    try {
        const user = getUser();
        const response = await httpGet("get_userid/" + user.username);
        const userID = response.data;
        const userResponse = await httpGet("get_user/" + userID + "?userName=" + user.username + "&password=" + user.password);
        if (userResponse.status === 200) {
            return true;
        }
        else return false;
    }
    catch (e) {
        return false;
    }
}