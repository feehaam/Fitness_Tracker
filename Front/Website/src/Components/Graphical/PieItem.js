export default function PieItem({key, entry, color}){
    return (<>
        <div style={{color: color}}><li>{entry.name}<br></br>{entry.value}</li></div>
    </>)
}