import Login, { LoginCheck } from "../User Account/Login";
import { useNavigate } from 'react-router-dom';
import View from '../Graphical/View'
import CaloriesHeading from "./CaloriesHeading";
import { getUserJSON } from "../User Account/User";
import { useCallback, useEffect, useState } from "react";
import { getFoods } from "../Helper/GetFoods";
import { getActivities } from "../Helper/GetActivities";

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

    //Just a random test for view
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
    // <View data={data} type='pie' color='any' size={10} />

    return (<>
        <CaloriesHeading user={user} foods={foods} activities={activities} />

    </>);
}
export default Home; 