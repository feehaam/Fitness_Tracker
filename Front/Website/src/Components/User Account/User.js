import HttpGet from "../../API/HttpGet";
import { getUser } from "../Helper/UserInfo";

export async function getUserJSON() {
    const user = getUser();
    const response = await HttpGet("get_userid/" + user.username);
    const userID = response.data;
    const userResponse = await HttpGet("get_user/" + userID + "?userName=" + user.username + "&password=" + user.password);
    if (userResponse.status == 200) return userResponse.data;
    else return null;
}