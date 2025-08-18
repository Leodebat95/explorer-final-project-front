import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { PiCaretLeft, PiCaretDown, PiUploadSimple } from "react-icons/pi";

import { Container, Form } from "./styles";

import { Header } from "../../components/Headyr";
// import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";



export function CreateMovie() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();


  function handleAddTag() {

    setTags( prevState => [...prevState, newTag]);

    setNewTag("");
  };


  function handleRemoveTag(deleted) {

    setTags( prevState => prevState.filter( singleTag => singleTag !== deleted));
  };


  async function handleNewNote() {

    if(!title) {

      return alert("Digite o título da nota.");
    };


    if(!rating) {

      return alert("Preencha a avaliação do filme.");
    };

    if(rating < 1 || rating > 5) {
      
      return alert("A nota da avaliação deve estar entre 1 e 5.");
    };

    if(Number(rating) % 1 !== 0) {

      return alert("A nota da avaliação deve ser um número inteiro.");
    };
    

    if(newTag) {

      return alert("Você deixou uma tag no campo para adicionar,\nmas não clicou em adicionar.\n\nClique para adicionar ou deixe o campo vazio.");
    };
    
    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    });
    
    alert('Nota criada com sucesso!'),

    navigate(-1);
  };


  function handleBack() {

    navigate(-1);
  };



  return(
    <Container>
      <Header />

      <main>
        <ButtonText title="voltar" icon={PiCaretLeft} onClick={handleBack} />

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
            onChange={ e => setTitle(e.target.value)}
          />

          <label htmlFor="create-options">Categoria</label>

          <div id="select-container">
            <PiCaretDown id="caret-down" />

            <select id="create-options" defaultValue="lanche">
              <option value="refeição">Refeição</option>
              <option value="lanche">Lanche</option>
              <option value="sobremesa">Sobremesa</option>
              <option value="bebida">Bebida</option>
            </select>
          </div>

          {/* <Section id="section" title="Marcadores">
            <div id="external-bkg">
              {
                tags.map( (tag, index) => (
                  <MovieItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <MovieItem
                isNew
                placeholder="Novo marcador"
                value={newTag}
                onChange={ e => setNewTag(e.target.value)}
                onClick={handleAddTag} 
              />
            </div>
          </Section> */}

          <label htmlFor="create-ingredients-two">2º Ingredientes</label>
          <Input 
            id="create-ingredients-two"
            placeholder="Tags"
          />

          <label htmlFor="create-price">Preço</label>
          <Input 
            type="number"
            min="0"
            max="999"
            id="create-price"
            placeholder="R$ 00,00"
            onChange={ e => setRating(e.target.value)}
          />

          <label htmlFor="create-textarea">Descrição</label>
          <Textarea
            id="create-textarea"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e sua composição"
            onChange={ e => setDescription(e.target.value)}
          />

          <Button
            title="Salvar alterações"
            onClick={handleNewNote}
          />
        </Form>
      </main>

      <Footer />
    </Container>
  );
};
