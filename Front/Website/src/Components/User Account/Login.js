import httpGet from "../../API/HttpGet";
import { getUser, setUser } from "./UserInfo";

function Login() {
    async function signIn() {
        const handle = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const response = await httpGet("get_userid/" + handle);
        const userID = response.data;
        const userResponse = await httpGet("get_user/" + userID + "?userName=" + handle + "&password=" + password);
        if (response.status === 200) {
            setUser(userResponse.data.name, userResponse.data.password);
            //Redirect to homepage
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

export async function loginCheck() {
    try {
        const user = getUser();
        const response = await httpGet("get_userid/" + user.username);
        const userID = response.data;
        const userResponse = await httpGet("get_user/" + userID + "?userName=" + user.username + "&password=" + user.password);
        if (userResponse.status !== 200) {
            console.log("Login first");
        }
    }
    catch(e){
        console.log("Login first");
    }
}