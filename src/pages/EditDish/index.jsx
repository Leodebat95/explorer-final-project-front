import { PiCaretLeft, PiCaretDown, PiUploadSimple } from "react-icons/pi";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import dishPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";
import { useCustom } from "../../contexts/CustomPropsContext";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { Footer } from "../../components/Footer";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { IngredientItem } from "../../components/IngredientItem";



export function EditDish() {

  const { menuOpen, setMenuOpen } = useCustom();

  const [oldData, setOldData] = useState(null);
	
  const [title, setTitle] = useState(oldData?.title);
  const [category, setCategory] = useState(oldData?.category);
  const [price, setPrice] = useState(oldData?.price);
  const [description, setDescription] = useState(oldData?.description);

	const [tags, setTags] = useState([]);
	const [newTag, setNewTag] = useState('');


	const [pictureFile, setPictureFile] = useState(null);

	let dish_picture;
	// **TROCAR ISSO
	const pictureUrl = dish_picture ? `${api.defaults.baseURL}/files/${dish_picture}` : dishPlaceholder;

	const [picture, setPicture] = useState(pictureUrl);


	const navigate = useNavigate();

	const params = useParams();

	
  useEffect(() => {

    async function fetchOldDishes() {

      const response = await api.get(`/dishes/${params.id}`);
      
      setOldData(response.data);
    };

    fetchOldDishes();
  }, []);

	useEffect(() => {

		if(oldData) {

			setTitle(oldData.title);
			setCategory(oldData.category);
			setPrice(oldData.price.toFixed(2));
			setDescription(oldData.description);

			const stringTags = oldData.tags?.map(tag => tag.name);
			setTags(stringTags);
		};
	}, [oldData]);

  useEffect(() => {

    window.scrollTo(0, 0);
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


	async function handleRemoveDish() {

		const confirm = window.confirm("Deseja realmente remover o item?");
		
		if(confirm) {

			await api.delete(`/dishes/${params.id}`);

			setTimeout(() => {
				alert(`O item "${oldData.title}" foi excluído.`);

				navigate(-1);
			}, 400);
		};
	};


	async function handleUpdateDish() {

		if(newTag) {
      return alert(
				`Você deixou uma tag no campo para adicionar,\nmas não clicou em adicionar.
        \nClique para adicionar ou deixe o campo vazio.`
			);
    };

		const updatedData = {
			title,
			category,
			price,
			description,
			tags
		};

		await api.put(`/dishes/${params.id}`, updatedData);
		
    alert('Item alterado com sucesso!');

    navigate('/');
	};


	function handleChangePicture(event) {

		const file = event.target.files[0];
		setPictureFile(file);

		const imagePreview = URL.createObjectURL(file);
		setPicture(imagePreview);
	};


	function handleBack() {

		navigate(-1);
	};



	return(
		<Container menuOpen={menuOpen}>

			<Header />
			<MenuMobile />

			<main>
				<ButtonText title="voltar" icon={PiCaretLeft} onClick={handleBack} />

				<h1>Editar prato</h1>

				<Form>
					<p id="edit-img-fake-label">Imagem do prato</p>

					<label id="edit-img-label" htmlFor="edit-img-inp">
						<PiUploadSimple />
						Selecione a imagem para alterá-la
					</label>
					<Input
						type="file"
						id="edit-img-inp"
						onChange={handleChangePicture}
					/>

					<label htmlFor="edit-name">Nome</label>
					<Input
						id="edit-name"
						placeholder="Salada"
						value={title}
						onChange={ e => setTitle(e.target.value)}
					/>

					<label htmlFor="edit-options">Categoria</label>
					<div id="select-container">
						<PiCaretDown id="caret-down" />

						<select
							id="edit-options"
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

					<label htmlFor="edit-price">Preço</label>
					<Input 
						type="number"
						min="0"
						max="999"
						id="edit-price"
						placeholder="R$ 40,00"
						value={price}
						onChange={ e => {
							const valueComma = String(e.target.value).replace(',', '.');
							const valueFloat = parseFloat(valueComma);
							setPrice(valueFloat)
						}}
					/>

					<label htmlFor="edit-textarea">Descrição</label>
					<Textarea
						id="edit-textarea"
						placeholder="A Salada César é uma opção refrescante para o verão"
						value={description}
						onChange={ e => setDescription(e.target.value)}
					/>

					<aside>
						<Button
							id="btn-delete"
							title="Excluir prato"
							onClick={handleRemoveDish}
						/>

						<Button
							title="Salvar alterações"
							onClick={handleUpdateDish}
						/>
					</aside>
				</Form>
			</main>

			<Footer />
		</Container>
	);
};
