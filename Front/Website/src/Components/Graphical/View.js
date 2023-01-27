import PieView from "./PieView";
import { randomColorArray } from "./RandomColor";

export default function View({data, color, type, size}){
    const colors = randomColorArray(data.length, color);
    return <>
        {type === 'pie' ? <PieView data={data} colors={colors} size={size} /> : ""}
    </>
}