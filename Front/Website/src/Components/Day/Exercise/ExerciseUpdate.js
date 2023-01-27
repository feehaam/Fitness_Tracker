import { useState } from "react"

export default function ExerciseUpdate({time, activity, id}) {
    const [editA, setEditA] = useState(false);
    const [editT, setEditT] = useState(false);
    return (<>
        Activity: {editA ? <input type={'number'} id={"exAc"+id} /> : <input type={'number'} id={"exAc"+id} value={activity} onChange={()=>setEditA(true)}/>}
        <br></br>
        Time: {editT ? <input type={'number'} id={"exTi"+id} /> : <input type={'number'} id={"exTi"+id} value={time} onChange={()=>setEditT(true)}/>}
    </>)
}
