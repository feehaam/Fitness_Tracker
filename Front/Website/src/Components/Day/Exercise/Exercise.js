export default function Exercise({index}) {
    return (<>
        <select id={"exAc"+index}>
            <option value={1}>Item 1</option>
            <option value={2}>Item 2</option>
            <option value={3}>Item 3</option>
        </select>
        <input type={"number"}  id={"exTi"+index} placeholder={index} />
        <br></br> 
    </>)
}
