import axios from "axios";

async function HttpPost(apiName, data){
    const preUrl = "https://localhost:7058/"
    const url = preUrl + apiName;
    const response = await axios.post(url, data);
    return response;
}
export default HttpPost;