import axios from "axios";

async function HttpGet(apiName){
    const preUrl = "https://localhost:7058/"
    const url = preUrl + apiName;
    const response = await axios.get(url);
    return response;
}
export default HttpGet;