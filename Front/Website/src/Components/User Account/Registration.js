import { useState } from "react"
import HttpPost from "../../API/HttpPost";
import { setUser } from "../Helper/UserInfo"
import { useNavigate } from 'react-router-dom';
import { LoginCheck } from "./Login";
import styles from '../../Styles/Styles.module.css'

export function Registration() {
    const navigate = useNavigate();
    LoginCheck().then(logged => {
        if (logged) {
            // navigate('/', { replace: true });
            return;
        }
    })
    const [heightType, setHeightType] = useState("feet");
    const [weightType, setWeightType] = useState("KG");

    function changeHeightType(event) {
        setHeightType(event.target.value);
    }
    function changeWeightType(event) {
        setWeightType(event.target.value);
    }

    async function createAccount() {
        let ok = true;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const cpassword = document.getElementById("cpassword").value;
        let weight;
        if (weightType === 'KG') {
            weight = document.getElementById("weightKG").value;
        }
        else {
            weight = parseFloat(document.getElementById("weightLB").value);
            weight = weight * 0.45359237;
        }
        console.log("POING...");
        let height;
        if (heightType === 'feet') {
            const ft = parseFloat(document.getElementById("heightFeet").value);
            const inc = parseFloat(document.getElementById("heightInch").value);
            const met = (ft + inc / 12) / 3.281;
            height = met;
        }
        else {
            height = document.getElementById("heightMeter").value;
        }
        const age = document.getElementById("age").value;
        const gen = document.getElementById("gender").value;
        let gender;
        let correction = "";
        if (gen === '0') {
            ok = false;
            correction += "Select a gender.\n";
        }
        else if (gen === '1') {
            gender = false;
        }
        else gender = true;

        if (name.length < 5) {
            ok = false;
            correction += "Enter a valid username.\n";
        }
        if (password.length < 6) {
            ok = false;
            correction += "Password must be at least 6 digits long.\n";
        }
        if (password !== cpassword) {
            ok = false;
            correction += "Passwords doen't match.\n";
        }
        if (weight < 30 || weight > 150) {
            ok = false;
            correction += "Enter a valid weight (30-150kg).\n";
        }
        if (height > 1 && height < 2.2) {
            ;
        }
        else {
            ok = false;
            correction += "Enter a valid height (3ft-7ft).\n";
        }
        if (email.length < 8 || !email.includes("@") || !email.includes(".")) {
            ok = false;
            correction += "Invalid email.\n";
        }
        if (age > 10 && age < 80) {
            ;
        }
        else {
            ok = false;
            correction += "Enter valid age.\n";
        }

        if (ok) {
            const user = {
                "name": name,
                "email": email,
                "password": password,
                "height": height,
                "weight": weight,
                "age": age,
                "gender": gender
            }
            console.log(user);
            const response = await HttpPost("create_user", user);
            if (response.status !== 200) {
                correction += response.data;
            }
            else {
                setUser(name, password);
                navigate('/', { replace: true });
            }
            console.log(response);
        }
        console.log(correction);
    }

    return (<>
        <form className={styles.container}>
            <div className={styles.inner}>
                <label className={styles.label} for="name">Username</label><br></br>
                <input className={styles.i} type="text" id="name" /><br></br>

                <label className={styles.label} for="email">Email</label><br></br>
                <input className={styles.i} type="email" id="email" /><br></br>

                <label className={styles.label} for="password">Password</label><br></br>
                <input className={styles.i} type="password" id="password" /><br></br>

                <label className={styles.label} for="cpassword">Confirm Password</label><br></br>
                <input className={styles.i} type="password" id="cpassword" /><br></br>

                {weightType === 'LB' ? <>
                    <label className={styles.label} for="weightLB">Weight (LB)</label><br></br>
                    <input type="number" id="weightLB" className={styles.eightty} />
                </> : <>
                    <label className={styles.label} for="weightKG">Weight (KG)</label><br></br>
                    <input type="number" id="weightKG" className={styles.eightty} />
                </>}
                <select className={styles.sel} onChange={changeWeightType}>
                    <option className={styles.op} value={"KG"}>KG</option>
                    <option className={styles.op} value={"LB"}>LB</option>
                </select><br></br>

                {heightType === 'feet' ? <>
                    <label className={styles.label} for="heightFeet">Feet & Inch</label><br></br>
                    <input type="number" id="heightFeet" className={styles.ihalf} />
                    <input type="number" id="heightInch" className={styles.ihalf} />
                </> : <>
                    <label className={styles.label} for="heightMeter">Meter</label><br></br>
                    <input type="number" id="heightMeter" className={styles.eightty} />
                </>}
                <select className={styles.sel} onChange={changeHeightType} name="gender">
                    <option className={styles.op} value={"feet"}>Feet</option>
                    <option className={styles.op} value={"meter"}>Meter</option>
                </select><br></br>

                <label className={styles.label} for="age">Age</label><br></br>
                <input className={styles.i} type="number" id="age" /><br></br>

                <select id="gender" className={styles.sel}>
                    <option className={styles.op} value={'0'}>Gender</option>
                    <option className={styles.op} value={'1'}>Male</option>
                    <option className={styles.op} value={'2'}>Female</option>
                </select><br></br>
            </div>
            <hr></hr>
            <div className={styles.enter}><input type={"button"} value="Create account" className={styles.ibtn} onClick={createAccount} /></div>


        </form>
    </>)
}