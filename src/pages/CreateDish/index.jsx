import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useCustom } from "../../contexts/CustomPropsContext";

import { PiCaretLeft, PiCaretDown, PiUploadSimple } from "react-icons/pi";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { Footer } from "../../components/Footer";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { IngredientItem } from "../../components/IngredientItem";



export function CreateDish() {

  const { menuOpen, setMenuOpen } = useCustom();

  const [pictureFile, setPictureFile] = useState(null);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('prato-principal');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();


  useEffect(() => {

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10)
    
  }, []);


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


  function handleNewImage(event) {

    setPictureFile(event.target.files[0]);

    alert("A imagem do item foi adicionada.");
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
    
    const response = await api.post("/dishes", {
      title,
      category,
      description,
      price,
      tags
    });

		if(pictureFile) {

			const fileUploadForm = new FormData();
			
			fileUploadForm.append('picture', pictureFile);

			await api.patch(`/dishes/${response.data.id}/picture`, fileUploadForm, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});
		};
    
    alert('Item criado com sucesso!'),

    navigate('/');
  };


  function handleToMenu() {

    navigate("/");
  };



  return(
    <Container menuOpen={menuOpen}>

      <Header />
      <MenuMobile />

      <main>
        <ButtonText title="voltar" icon={PiCaretLeft} onClick={handleToMenu} />

        <h1>Novo prato</h1>

        <Form>
					<div className="row-one">
						<div className="desktop-container-inp-img">
              <p id="create-img-fake-label">Imagem do prato</p>

              <label id="create-img-label" htmlFor="create-img-inp">
                <PiUploadSimple />
                Selecione a imagem
              </label>
              <Input
                type="file"
                id="create-img-inp"
                onChange={ e => handleNewImage(e)}
              />
            </div>

						<div className="desktop-container-inp-name">
              <label htmlFor="create-name">Nome</label>
              <Input
                id="create-name"
                placeholder="Ex: Salada"
                value={title}
                onChange={ e => setTitle(e.target.value)}
              />
            </div>

						<div className="desktop-container-select">
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
            </div>
          </div>

					<div className="row-two">
						<div className="desktop-container-ingredients">
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
            </div>

						<div className="desktop-container-inp-price">
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
            </div>
          </div>

          <label htmlFor="create-textarea">Descrição</label>
          <Textarea
            id="create-textarea"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e sua composição"
            value={description}
            onChange={ e => setDescription(e.target.value)}
          />

          <Button
            title="Salvar item"
            onClick={handleNewDish}
          />
        </Form>
      </main>

      <Footer />
    </Container>
  );
};
