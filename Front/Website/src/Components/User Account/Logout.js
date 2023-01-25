import { setUser } from "./UserInfo";
import { useNavigate } from 'react-router-dom';

export function Logout(){
    const navigate = useNavigate();
    function out(){
        setUser('', '');
        navigate('/login', { replace: true });
    }

    return (<>
        <button onClick={()=>out()} >Logout</button>
    </>)
}