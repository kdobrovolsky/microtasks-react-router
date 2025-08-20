import {useParams} from "react-router-dom";
import {adidasArr, AdidasItem} from "./Adidas.tsx";
import s from '../Site.module.css'
import {nikeArr, NikeItem} from "./Nike.tsx";

type CrossModels = {
    [key: string]: (AdidasItem[] | NikeItem[])
}

const crossModels: CrossModels = {
    adidas: adidasArr,
    nike: nikeArr,
}

export const Model = () => {
    debugger
    const model = useParams()
    console.log(model.id);
    console.log(model.model);

    const currentModel = model
    ? crossModels[model.d].find(item => item.id === Number(id))
        : null;

    if(!currentModel) {
        return <h2>Model undefined</h2>;
    }


    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <h2>{currentModel.model}</h2>
                    <h3>{currentModel.collection}</h3>
                    <h4>{currentModel.price}</h4>
                    <img src={currentModel.picture} alt="" className={s.img}/>
        </div>
    );
};


