import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PiPlus, PiMinus } from "react-icons/pi";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useCustom } from "../../contexts/CustomPropsContext";

import { Container } from "./styles";

import dishPlaceholder from "../../assets/plch-dish.png";
import dessertPlaceholder from "../../assets/plch-dessert.png";
import beveragePlaceholder from "../../assets/plch-beverage.png";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { ButtonHeart } from "../ButtonHeart";
import { ButtonPencil } from "../ButtonPencil";



export function Card({ data, ...rest }) {

  const navigate = useNavigate();

  const { isAdmin } = useAuth();
  
  const [isLiked, setIsLiked] = useState(data.like === true || data.like === 1);


  const dishPictureUrl = data.picture ? `${api.defaults.baseURL}/files/${data.picture}` : dishPlaceholder;

  const dessertPictureUrl = data.picture ? `${api.defaults.baseURL}/files/${data.picture}` : dessertPlaceholder;

  const beveragePictureUrl = data.picture ? `${api.defaults.baseURL}/files/${data.picture}` : beveragePlaceholder;


  const { receiptCounter, setReceiptCounter } = useCustom();

  const { updateItemCounter, getItemCounter } = useCustom();
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


  const previewCounter = getItemCounter(data.id);

  function handleCardCounter() {

    updateCardCounter(data.id, 0);
    
    updateItemCounter(data.id, previewCounter + counter);

    setReceiptCounter( currentValue => currentValue + counter);
    
    if(counter > 0) {
      alert(`${data.title} foi incluído no seu carrinho!`);
    };
  };


  function editNumber(rawNumber) {

    const decimal = Number(rawNumber).toFixed(2);

    const commaNumber = String(decimal).replace('.', ',');

    const finalNumber = `R$ ${commaNumber}`;

    return finalNumber;
  };


  async function handleLike() {

    const newLikeState = !isLiked;

    await api.patch(`/dishes/${data.id}`, {
      like: newLikeState
    });

    setIsLiked(newLikeState);
  };


  function handlePicture() {

    if(data.category === "prato-principal") {
      return dishPictureUrl;
    };

    if(data.category === "sobremesa") {
      return dessertPictureUrl;
    };

    if(data.category === "bebida") {
      return beveragePictureUrl;
    };
  };


  function handleToEdit() {

    navigate(`/edit/${String(data.id)}`);
  };

  function handleToPreview() {

    navigate(`/preview/${String(data.id)}`);
  };



  return(
    <Container {...rest}>
      {isAdmin() &&
        <ButtonPencil onClick={handleToEdit} />
      }

      {!isAdmin() &&
        <ButtonHeart
          isFilled={isLiked}
          onClick={handleLike}
        />
      }

      <button
        type="button"
        id="btn-dish-picture"
        onClick={handleToPreview}
      >
        <img src={handlePicture()} alt={`Foto: ${data.title}`} />
      </button>

      <button
        type="button"
        id="btn-dish-name"
        onClick={handleToPreview}
      >
        <h3>{`${data.title} >`}</h3>
      </button>

      <p className="description">
        {`${data.description}`}
      </p>

      <p className="dish-value">
        {editNumber(data.price)}
      </p>

      <div className="btn-group-container">
        {!isAdmin() && 
          <div className="counter-group">
            <ButtonText icon={PiMinus} id="btn-minus" onClick={handleRemoveCounter} />

            <p className="counter">
              {String(counter).padStart(2, '0')}
            </p>

            <ButtonText icon={PiPlus} id="btn-plus" onClick={handleAddCounter} />
          </div>
        }

        {!isAdmin() &&
          <Button title="incluir" onClick={handleCardCounter} />
        }
      </div>
    </Container>
  );
};
