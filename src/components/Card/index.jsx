import { useState } from "react";

import { Container } from "./styles";

import { PiPlus, PiMinus } from "react-icons/pi";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { ButtonHeart } from "../ButtonHeart";



export function Card({ dishPicture }) {

    const [isHeartFilled, setIsHeartFilled] = useState(false);

    function handleHeartClick() {

        setIsHeartFilled(!isHeartFilled);
    };


    return(
        <Container>
            <ButtonHeart
                isFilled={isHeartFilled}
                onClick={handleHeartClick}
            />

            <button type="button" id="btn-dish-picture">
                <img src={dishPicture} alt="Foto do prato" />
            </button>

            <button type="button" id="btn-dish-name">
                <h3>{"Gambe >"}</h3>
            </button>

            <p className="dish-value">R$ 79,99</p>

            <div className="counter-group">
                <ButtonText icon={PiMinus} id="btn-minus" />

                <p className="counter">01</p>

                <ButtonText icon={PiPlus} id="btn-plus" />
            </div>

            <Button title="incluir" />
        </Container>
    );
};
