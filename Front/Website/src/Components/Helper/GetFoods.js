import HttpGet from "../../API/HttpGet";

var foods = []
export async function getFoods(){
    if(foods.length > 0) return foods;
    const response = await HttpGet("get_all_foods");
    foods = response.data;
    return foods;
}