import { useEffect, useState } from "react"

export default function ExerciseUpdate({time, activity, id}) {
    return (<>
        Activity: <input type={'number'} id={"exAc"+id} value={activity} />
        Time: <input type={'number'} id={"exTi"+id}  value={time} /><br></br>
    </>)
}
