import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas.tsx";
import s from '../Site.module.css'
import {nikeArr} from "./Nike.tsx";

export const Model = () => {
    const params = useParams();
    console.log(params.id)
    const modelData = adidasArr.find((item) => item.id.toString() === params.id)
    if(!modelData) {
        return null;
    }
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h2>{modelData.model}</h2>
            <h3>{modelData.collection}</h3>
            <h4>{modelData.price}</h4>
            <img src={modelData.picture} alt="" className={s.img}/>
        </div>
    );
};




export const NikeModel = () => {
    const { id } = useParams();
    const modelData = nikeArr.find(item => item.id.toString() === id);

    if (!modelData) return null;

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h2>{modelData.model}</h2>
            <h3>{modelData.collection}</h3>
            <h4>{modelData.price}</h4>
            <img src={modelData.picture} alt="" className={s.img}/>
        </div>
    );
};
