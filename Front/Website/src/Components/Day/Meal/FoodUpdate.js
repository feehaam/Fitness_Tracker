export default function FoodUpdate({id, food, amount}){
    return(<>
        <input id={"meFo"+id} value={food}/>
        <input id={"meAm"+id} value={amount} /><br></br>
    </>)
}