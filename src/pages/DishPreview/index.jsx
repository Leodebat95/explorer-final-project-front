import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { api } from '../../services/api';

import { PiCaretLeft, PiMinus, PiPlus, PiReceipt } from "react-icons/pi";

import { Container } from './styles';

import dishPhoto from "../../assets/food-3-gambe.png";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';



export function DishPreview() {
 
  const [data, setData] = useState(null);

  const [itemCounter, setItemCounter] = useState(0);

  const params = useParams();
  
  const navigate = useNavigate();


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



  return(
    <Container>
      <Header />

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
                {String(itemCounter).padStart(2, '0')}
              </p>

              <ButtonText icon={PiPlus} id="btn-plus" onClick={handleAddItem} />
            </div>

            <Button
              icon={PiReceipt}
              title={`pedir ∙ R$ ${editNumber(data.price)}`}
            />
          </div>
        </main>
      }

      <Footer />
    </Container>
  );
};
