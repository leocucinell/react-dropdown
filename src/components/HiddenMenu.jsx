import "./HiddenMenu.css";
import React from "react";

class HiddenMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: 1
        }
    }

    render(){
        return(
            <div className="hiddenList-container">
                <ul>
                    <li>Mission</li>
                    <li>Team</li>
                    <li>History</li>
                </ul>
            </div>
        )
    }
}


export default HiddenMenu;