import { useState, useEffect, useId } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { api } from '../../services/api';
import { useCustom } from "../../contexts/CustomPropsContext";

import { PiCaretLeft, PiMinus, PiPlus, PiReceipt } from "react-icons/pi";

import { Container } from './styles';

import dishPhoto from "../../assets/food-3-gambe.png";

import { Header } from '../../components/Header';
import { MenuMobile } from '../../components/MenuMobile';
import { Footer } from '../../components/Footer';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';



export function DishPreview() {

  const [data, setData] = useState(null);

  const params = useParams();
  
  const navigate = useNavigate();

 
  const { menuOpen, setMenuOpen } = useCustom();
  const { receiptCounter, setReceiptCounter } = useCustom();

  const { itemCounter, setItemCounter } = useCustom();
  const { updateItemCounter, getItemCounter } = useCustom();


  function handleBack() {

    navigate(-1);
  };


  useEffect(() => {

    async function fetchDish() {

      const response = await api.get(`/dishes/${params.id}`);
      
      setData(response.data);
    };

    fetchDish();
  }, []);


  function editNumber(rawNumber) {

    const decimal = Number(rawNumber).toFixed(2);

    const commaNumber = String(decimal).replace('.', ',');

    return commaNumber;
  };


  const previewCounter = getItemCounter(data.id);

  function handleAddItem() {

    if(previewCounter <= 98) {
      updateItemCounter(data.id, previewCounter + 1);
      // setItemCounter(itemCounter + 1);

      setReceiptCounter(previewCounter + 1);
    };
  };

  function handleRemoveItem() {

    if(previewCounter >= 1) {
      updateItemCounter(data.id, previewCounter - 1);
      // setItemCounter(itemCounter - 1);

      setReceiptCounter(previewCounter - 1);
    };
  };

  function handleShopItem() {

    if(previewCounter === 0) {
      alert("Escolha pelo menos 1 item para continuar");

      return;
    }

    if (!confirm("Deseja finalizar o pedido?")) {
      return;
    };

    updateItemCounter(data.id, 0)
    // setItemCounter(0);

    setReceiptCounter(0);

    navigate('/');
  };


  const itemCounterDisplay = () => {

    const display = String(previewCounter).padStart(2, '0');

    return display;
  };

  const dynamicPrice = () => {
    
    const items = Number(itemCounterDisplay());
    const price = data.price;

    const totalPrice = items * price;
    
    const finalPrice = String(totalPrice).padStart(2, '0');

    return finalPrice;
  };



  return(
    <Container menuOpen={menuOpen}>

      <Header />
      <MenuMobile />

      {
        data &&
        <main>
          <ButtonText title="voltar" icon={PiCaretLeft} onClick={handleBack} />

          <img src={dishPhoto} alt="Foto do prato" />

          <h2>{data.title}</h2>

          <p>{data.description}</p>

          <section>
            {
              data.tags &&
              data.tags.map( tag => (
                <Tag
                  key={String(tag.id)}
                  title={tag.name}
                />
              ))
            }
          </section>

          <div className="btn-group">
            <div className="counter-group">
              <ButtonText icon={PiMinus} id="btn-minus" onClick={handleRemoveItem} />

              <p className="counter">
                {itemCounterDisplay()}
              </p>

              <ButtonText icon={PiPlus} id="btn-plus" onClick={handleAddItem} />
            </div>

            <Button
              icon={PiReceipt}
              title={`pedir ∙ R$ ${editNumber(dynamicPrice())}`}
              onClick={handleShopItem}
            />
          </div>
        </main>
      }

      <Footer />
    </Container>
  );
};
