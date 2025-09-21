import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useCustom } from "../../contexts/CustomPropsContext";

import { PiCaretLeft, PiMinus, PiPlus, PiReceipt } from "react-icons/pi";

import { Container } from './styles';

import dishPlaceholder from "../../assets/plch-dish.png";
import dessertPlaceholder from "../../assets/plch-dessert.png";
import beveragePlaceholder from "../../assets/plch-beverage.png";

import { Header } from '../../components/Header';
import { MenuMobile } from '../../components/MenuMobile';
import { Footer } from '../../components/Footer';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';



export function DishPreview() {

  const [data, setData] = useState(null);

  const { isAdmin } = useAuth();


  const params = useParams();
  
  const navigate = useNavigate();

 
  const { menuOpen, setMenuOpen } = useCustom();
  const { receiptCounter, setReceiptCounter } = useCustom();

  const { updateItemCounter, getItemCounter } = useCustom();


  useEffect(() => {

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10)
    
  }, []);


  function handleBack() {

    navigate("/");
  };

  function handleToEdit() {

    navigate(`/edit/${String(data.id)}`);
  };


  function editNumber(rawNumber) {

    const decimal = Number(rawNumber).toFixed(2);

    const commaNumber = String(decimal).replace('.', ',');

    return commaNumber;
  };


  useEffect(() => {

    async function fetchDish() {

      const response = await api.get(`/dishes/${params.id}`);
      
      setData(response.data);
    };
    fetchDish();

  }, [params.id]);

  if (!data) return;


  const previewCounter = getItemCounter(data.id);

  function handleAddItem() {

    if(previewCounter <= 98) {

      updateItemCounter(data.id, previewCounter + 1);

      setReceiptCounter( currentValue => currentValue + 1)
    };
  };

  function handleRemoveItem() {

    if(previewCounter >= 1) {

      updateItemCounter(data.id, previewCounter - 1);

      setReceiptCounter( currentValue => currentValue - 1)
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

    setReceiptCounter(0);

    navigate("/");

    window.location.reload();    
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


  const getPictureUrl = () => {

    if (!data?.picture) {

      if (data?.category === "sobremesa") return dessertPlaceholder;

      if (data?.category === "bebida") return beveragePlaceholder;

      return dishPlaceholder;
    };

    return `${api.defaults.baseURL}/files/${data.picture}`;
  };



  return(
    <Container menuOpen={menuOpen}>

      <Header />
      <MenuMobile />

      {
        data &&
        <main>
          <ButtonText title="voltar" icon={PiCaretLeft} onClick={handleBack} />

          <div className="content-page">
            <img src={getPictureUrl()} alt={`Foto: ${data.title}`} />

            <div className="content-text">
              <h2>{data.title}</h2>

              <p className='description'>
                {data.description}
              </p>

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

              {isAdmin() &&
                <Button
                  title="Editar item"
                  className="btn-edit"
                  onClick={handleToEdit}
                />
              }

              {!isAdmin() &&
                <div className="btn-group">
                  <div className="counter-group">
                    <ButtonText icon={PiMinus} id="btn-minus" onClick={handleRemoveItem} />

                    <p className="counter">
                      {itemCounterDisplay()}
                    </p>

                    <ButtonText icon={PiPlus} id="btn-plus" onClick={handleAddItem} />
                  </div>

                  {window.innerWidth < 768
                    ? <Button
                        id="btn-icon-receipt"
                        icon={PiReceipt}
                        title={`pedir ∙ R$ ${editNumber(dynamicPrice())}`}
                        onClick={handleShopItem}
                      />
                    : <Button
                        title={`incluir ∙ R$ ${editNumber(dynamicPrice())}`}
                        onClick={handleShopItem}
                      />
                  }
                </div>
              }
            </div>
          </div>
        </main>
      }

      <Footer />
    </Container>
  );
};
