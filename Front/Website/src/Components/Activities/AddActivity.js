import { useNavigate } from 'react-router-dom';
import HttpPost from '../../API/HttpPost';
import { LoginCheck } from '../User Account/Login';
import styles from '../../Styles/Styles.module.css'

export function AddActivity() {
    const navigate = useNavigate();
    LoginCheck().then(logged => {
        if (!logged) {
            navigate('/login', { replace: true });
        }
    })

    function addActivity(){
        let name, calorieBurnPerHour;
        let key = document.getElementById("key").value;
        
        let val = parseFloat(document.getElementById("calorieBurnPerHour").value);
        calorieBurnPerHour = isNaN(val) ? 0.0 : val;
        val = document.getElementById("name").value;
        name = val;
        
        const activity = {
            "name": name,
            "calorieBurnPerHour": calorieBurnPerHour
        }

        console.log(activity);

        HttpPost("create_activity?adminKey="+key, activity).then((response) => {
            console.log(response);
        })
    }

    return (<>
        <form className={styles.container}>

            <label className={styles.label} for="name">Name</label> <br></br>
            <input className={styles.i} type={"text"} id={"name"} /><br></br>

            <label className={styles.label} for="calories">Calories burn per hour</label> <br></br>
            <input className={styles.i} type={"number"} id={"calorieBurnPerHour"} /><br></br>

            <label className={styles.label} for="key">Admin key</label> <br></br>
            <input className={styles.i} type={"text"} id={"key"} placeholder="" /><br></br>

            <hr></hr>

            <div className={styles.enter}><input type={"button"} className={styles.ibtn} value="Add activity" onClick={addActivity} /></div>

        </form>
    </>)
}