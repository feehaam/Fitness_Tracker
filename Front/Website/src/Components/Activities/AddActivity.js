import { useNavigate } from 'react-router-dom';
import HttpPost from '../../API/HttpPost';
import { LoginCheck } from '../User Account/Login';
import styles from '../../Styles/Styles.module.css'
import { useState } from 'react';
import Attributes from './Attributes';

export function AddActivity() {

    const navigate = useNavigate();
    LoginCheck().then(logged => {
        if (!logged) {
            navigate('/login', { replace: true });
        }
    })

    const [otherComps, setOtherComps] = useState([]);
    const [refreshPage, setRefreshPage] = useState(0);

    let idx = 0;
    const additionalAttributes = otherComps.map((number) =>
        <Attributes index={idx++} />
    );

    function addActivity() {
        let name, calorieBurnPerHour;
        let key = document.getElementById("key").value;

        let val = parseFloat(document.getElementById("calorieBurnPerHour").value);
        calorieBurnPerHour = isNaN(val) ? 0.0 : val;
        val = document.getElementById("name").value;
        name = val;

        const activity = {
            "Name": name,
            "CalorieBurnPerHour": calorieBurnPerHour,
            "OtherParameterName": [],
            "OtherParameterValue": []
        }

        let OPptr = 0;
        let OPname = [], OPvalue = [];
        for(let i=0; i<idx; i++){
            let pName = document.getElementById("opn"+i).value;
            let pValue = parseFloat(document.getElementById("opv"+i).value);
            if(pName.length > 2 && pValue > 0){
                OPname[OPptr] = pName;
                OPvalue[OPptr++] = pValue;
            }
        }

        activity.OtherParameterName = OPname;
        activity.OtherParameterValue = OPvalue;

        console.log(activity);

        HttpPost("create_activity?adminKey=" + key, activity).then((response) => {
            console.log(response);
        })
    }

    function addOrRemoveOther(add) {
        if (add) {
            let newOtherAr = otherComps;
            newOtherAr[otherComps.length] = 10;
            setOtherComps(newOtherAr)
            setRefreshPage(refreshPage + 1);
        }
        else {
            let newOtherAr = [];
            for(let i=0; i<otherComps.length-1; i++){
                newOtherAr[i] = 10;
            }
            setOtherComps(newOtherAr)
            setRefreshPage(refreshPage + 1);
        }
    }

    return (<>
        <form className={styles.containerCen}>

            <label className={styles.title} for="name">Name</label> <br></br>
            <input className={styles.i} type={"text"} id={"name"} /><br></br><br></br>

            <label className={styles.title} for="calorieBurnPerHour">Calories burn per hour</label> <br></br>
            <input className={styles.i} type={"number"} id={"calorieBurnPerHour"} /><br></br><br></br>

            <label className={styles.title}>Other attributes</label> <br></br>
            {additionalAttributes}
            {otherComps.length === 0 ? <div className={styles.noFood}>No additional attributes has been added, addd some below. I.e. for activity running, there can be attributes 'kilometers', 'steps' and value shall be amount of that attribute per hour.</div> : ""}
            <input className={styles.afbtn} type={'button'} onClick={() => addOrRemoveOther(true)} value={"(+) Add attribute"} />
            <input className={styles.afbtn2} type={'button'} onClick={() => addOrRemoveOther(false)} value={"(-) Remove attribute"} /><hr></hr>

            <label className={styles.title} for="key">Admin key</label> <br></br>
            <input className={styles.i} type={"text"} id={"key"} placeholder="" /><br></br>

            <hr></hr>

            <div className={styles.enter}><input type={"button"} className={styles.ibtn} value="Add activity" onClick={addActivity} /></div>

        </form>
    </>)
}