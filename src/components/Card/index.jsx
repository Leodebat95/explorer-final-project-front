import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useCustom } from "../../contexts/CustomPropsContext";

import { Container } from "./styles";

import { PiPlus, PiMinus } from "react-icons/pi";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { ButtonHeart } from "../ButtonHeart";



export function Card({ data, dishPicture, ...rest }) {

  const navigate = useNavigate();
  
  const [isLiked, setIsLiked] = useState(false);


  const { itemCounter, setItemCounter } = useCustom();
  const { receiptCounter, setReceiptCounter } = useCustom();

  const { updateCardCounter, getCardCounter } = useCustom();


  const counter = getCardCounter(data.id);
  
  function handleAddCounter() {

    if(counter <= 98) {
      updateCardCounter(data.id, counter + 1);
    };
  };

  function handleRemoveCounter() {

    if(counter >= 1) {
      updateCardCounter(data.id, counter - 1);
    };
  };


  function editNumber(rawNumber) {

    const decimal = Number(rawNumber).toFixed(2);

    const commaNumber = String(decimal).replace('.', ',');

    const finalNumber = `R$ ${commaNumber}`;

    return finalNumber;
  };


  function handleCardCounter() {

    setItemCounter( currentValue => currentValue + counter);

    setReceiptCounter( currentValue => currentValue + counter);

    updateCardCounter(data.id, 0);
  };


  function handleLike() {

    setIsLiked(!isLiked);
  };


  function handleToEdit() {

    navigate(`/edit/${String(data.id)}`);
  };

  function handleToPreview() {

    navigate(`/preview/${String(data.id)}`);
  };



  return(
    <Container {...rest}>
      <ButtonHeart
        isFilled={isLiked}
        onClick={handleLike}
      />

      <button
        type="button"
        id="btn-dish-picture"
        onClick={handleToPreview}
      >
        <img src={dishPicture} alt="Foto do prato" />
      </button>

      <button
        type="button"
        id="btn-dish-name"
        onClick={handleToEdit}
      >
        <h3>{data.title}</h3>
      </button>

      <p className="dish-value">
        {editNumber(data.price)}
      </p>

      <div className="counter-group">
        <ButtonText icon={PiMinus} id="btn-minus" onClick={handleRemoveCounter} />

        <p className="counter">
          {String(counter).padStart(2, '0')}
        </p>

        <ButtonText icon={PiPlus} id="btn-plus" onClick={handleAddCounter} />
      </div>

      <Button title="incluir" onClick={handleCardCounter} />
    </Container>
  );
};
