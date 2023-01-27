import HttpGet from "../../API/HttpGet";

var activities = []
export async function getActivities(){
    if(activities.length > 0) return activities;
    const response = await HttpGet("get_all_activities");
    activities = response.data;
    return activities;
}