import "./CardContainer.css";
import React, {useState} from "react";

const CardContainer = () => {
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState("");

    return(
        <div className="CardContainer-container">
            <div className="CardContainer-form">
                 <input value={title} placeholder="title..." onChange={(e) => setTitle(e.target.value)} type="text" />
                 <div onClick={() => {
                    const cardId = Math.floor(Math.random() * 999999999) //not perfect, OK for now
                    setCards([...cards, {
                        id: cardId,
                        content: title
                    }]);
                    setTitle("");
                 }}><span>Add Card</span></div>
            </div>

            <div className="CardContainer-cards">
                {
                    cards.map((card) => {
                        return(
                            <div key={card.id} className="CardContainer-card">
                                <span>{card.content}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CardContainer;