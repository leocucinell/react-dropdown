import React, { useState } from "react"
import {CSSTransition} from 'react-transition-group';

import HiddenMenu from "./HiddenMenu";

import "./ListItem.css";

const ListItem = ({title}) => {
    const [show, setShow] = useState(false)
    return(
        <li className="ListItem-container" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <span className="ListItem-span">{title}</span>
            {
                show ?
                <CSSTransition
                    in={show}
                    timeout={300}
                    appear={true}
                    classNames="showList"
                >
                    <HiddenMenu items={["About", "Team", "Mission"]} />
                </CSSTransition>
                :
                null
            }
        </li>
    );
}

export default ListItem;