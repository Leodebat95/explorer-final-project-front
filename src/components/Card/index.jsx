import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container } from "./styles";

import { PiPlus, PiMinus } from "react-icons/pi";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { ButtonHeart } from "../ButtonHeart";



export function Card({ data, dishPicture, ...rest }) {

  const [isLiked, setIsLiked] = useState(false);
  const [itemCounter, setItemCounter] = useState(0);
  const [dishes, setDishes] = useState([]);
  
  const navigate = useNavigate();


  function editNumber(rawNumber) {

    const decimal = Number(rawNumber).toFixed(2);

    const commaNumber = String(decimal).replace('.', ',');

    const finalNumber = `R$ ${commaNumber}`;

    return finalNumber;
  };


  function handleAddItem() {

    if(itemCounter <= 98) {
      setItemCounter(itemCounter + 1);
    }
  };

  function handleRemoveItem() {

    if(itemCounter >= 1) {
      setItemCounter(itemCounter - 1);
    }
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
        <ButtonText icon={PiMinus} id="btn-minus" onClick={handleRemoveItem} />

        <p className="counter">
          {String(itemCounter).padStart(2, '0')}
        </p>

        <ButtonText icon={PiPlus} id="btn-plus" onClick={handleAddItem} />
      </div>

      <Button title="incluir" />
    </Container>
  );
};
