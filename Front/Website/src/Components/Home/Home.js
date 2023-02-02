import { LoginCheck } from "../User Account/Login";
import { useNavigate } from 'react-router-dom';
import CaloriesHeading from "./CaloriesHeading";
import { getUserJSON } from "../User Account/User";
import { useCallback, useEffect, useState } from "react";
import { getFoods } from "../Helper/GetFoods";
import { getActivities } from "../Helper/GetActivities";
import { Weekly } from "./Weekly/Weekly";

function Home() {

    // Check if logged in or not
    const navigate = useNavigate();
    LoginCheck().then(logged => {
        if (!logged) {
            navigate('/login', { replace: true });
        }
    }) 

    // Collecting user data
    const [user, setUser] = useState();
    const [foods, setFoods] = useState();
    const [activities, setActivities] = useState();
    const setupUser = useCallback(async () => {
        getUserJSON().then((u) => {
            setUser(u);
        })
        getFoods().then((f) => {
            setFoods(f);
        })
        getActivities().then((a) => {
            setActivities(a);
        })
    }, []);
    useEffect(() => {
        setupUser();
    }, [setupUser]);
    
    return (<>
        <CaloriesHeading user={user} foods={foods} activities={activities} />
        <br></br>
        {/* {getMonthDates(0, user)} */}
        <Weekly user={user} foods={foods} activities={activities} />
    </>);
}
export default Home; 