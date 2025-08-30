import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { PiCaretLeft, PiCaretDown, PiUploadSimple } from "react-icons/pi";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { IngredientItem } from "../../components/IngredientItem";



export function CreateDish() {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('prato-principal');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();


  function handleAddTag() {

		const trimTag = newTag.trim();

		if(trimTag === "") {
				
			return alert("Preencha a tag antes de adicioná-la.");
		};

    setTags( prevState => [...prevState, newTag]);

    setNewTag('');
  };


  function handleRemoveTag(deleted) {

    setTags( prevState => prevState.filter( singleTag => singleTag !== deleted));
  };


  async function handleNewDish() {

    if(!title) {
      return alert("Digite o nome do item.");
    };

    if(category == "") {
      return alert("Escolha uma categoria.");
    };

    if(newTag) {
      return alert(
        `Você deixou uma tag no campo para adicionar,\nmas não clicou em adicionar.
        \nClique para adicionar ou deixe o campo vazio.`
      );
    };

    if(!price) {
      return alert("Digite algum valor para o preço.");
    };

    if(!description) {
      return alert("Descreva o prato brevemente.");
    };
    
    await api.post("/dishes", {
      title,
      category,
      description,
      price,
      tags
    });
    
    alert('Item criado com sucesso!'),

    navigate('/');
  };


  function handleToMenu() {

    navigate("/");
  };



  return(
    <Container>
      <Header />

      <main>
        <ButtonText title="voltar" icon={PiCaretLeft} onClick={handleToMenu} />

        <h1>Novo prato</h1>

        <Form>
          <p id="create-img-fake-label">Imagem do prato</p>

          <label id="create-img-label" htmlFor="create-img-inp">
            <PiUploadSimple />
            Selecione a imagem
          </label>
          <Input
            type="file"
            id="create-img-inp"
          />

          <label htmlFor="create-name">Nome</label>
          <Input
            id="create-name"
            placeholder="Ex: Salada"
            value={title}
            onChange={ e => setTitle(e.target.value)}
          />

          <label htmlFor="create-options">Categoria</label>
          <div id="select-container">
            <PiCaretDown id="caret-down" />

            <select
              id="create-options"
              value={category}
              onChange={ e => setCategory(e.target.value)}
            >
              <option value="prato-principal">Prato Principal</option>
              <option value="sobremesa">Sobremesa</option>
              <option value="bebida">Bebida</option>
            </select>
          </div>

          <div id="tags-title">Ingredientes</div>
          <div id="tags-container">
            {
              tags.map( (tag, index) => (
                <IngredientItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <IngredientItem
              isNew
              value={newTag}
              onChange={ e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

          <label htmlFor="create-price">Preço</label>
          <Input 
            type="number"
            min="0"
            max="999"
            id="create-price"
            placeholder="R$ 00,00"
            value={price}
            onChange={ e => {
              const valueComma = String(e.target.value).replace(',', '.');
              const valueFloat = parseFloat(valueComma);
              setPrice(valueFloat)
            }}
          />

          <label htmlFor="create-textarea">Descrição</label>
          <Textarea
            id="create-textarea"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e sua composição"
            value={description}
            onChange={ e => setDescription(e.target.value)}
          />

          <Button
            title="Salvar prato"
            onClick={handleNewDish}
          />
        </Form>
      </main>

      <Footer />
    </Container>
  );
};
