import "./HiddenMenu.css";
import React from "react";

class HiddenMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: 1
        }
    }

    renderItems = (items) => {
        return items.map((item) => {
            return(
                <li className="HiddenMenu-li">{item}</li>
            );
        })
    }

    render(){
        return(
            <div onMouseLeave={() => this.props.setShow(false)} className="HiddenMenu-container">
                <ul className="HiddenMenu-ul">
                    {this.renderItems(this.props.items)}
                </ul>
            </div>
        )
    }
}


export default HiddenMenu;