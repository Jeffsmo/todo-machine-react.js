import React from "react";
import { ReactComponent as CheeckSVG } from "../imagenes/Checked.svg";
import { ReactComponent as DeleteSVG} from "../imagenes/close.svg";
import './TodoIcon.css';
const iconTypes = {
    "CompleteItem":(color)=><CheeckSVG className="Icon-svg" fill={color}/>,
    "CloseItem": (color)=><DeleteSVG className="Icon-svg" fill={color}/>
}

function TodoIcon(props){
    return (
        <span
            className={`Icon-container list-Todo__item--${props.type}`}
            onClick={props.onClick}
        >
            {iconTypes[props.type](props.color)}
        </span>
    );
}

export {TodoIcon};