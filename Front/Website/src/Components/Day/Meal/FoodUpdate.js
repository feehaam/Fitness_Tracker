import { useState } from "react";

export default function FoodUpdate({ id, food, amount }) {
    const [editA, setEditA] = useState(false);
    const [editT, setEditT] = useState(false);
    return (<>
        Activity: {editA ? <input type={'number'} id={"meFo" + id} /> : <input type={'number'} id={"meFo" + id} value={food} onChange={() => setEditA(true)} />}
        <br></br>
        Time: {editT ? <input type={'number'} id={"meAm" + id} /> : <input type={'number'} id={"meAm" + id} value={amount} onChange={() => setEditT(true)} />}
    </>)
}