import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { api } from "../../services/api";

import { ContainerHome, Container, Title, Content } from "./styles";

import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";

import fruitsPictureMob from "../../assets/food-home-mob.png";
import fruitsPictureDsk from "../../assets/food-home-desktop.png";
import dishParma from "../../assets/food-1-parma.png";
import dishRavanello from "../../assets/food-2-ravanello.png";
import dishGambe from "../../assets/food-3-gambe.png";
import dishMolla from "../../assets/food-4-molla.png";
import dishPrune from "../../assets/food-5-prune.png";
import dishPastry from "../../assets/food-6-pastry.png";
import dishMacaron from "../../assets/food-7-macaron.png";
import dishApricotCake from "../../assets/food-8-apricot-cake.png";
import bevJuice from "../../assets/beverage-1-passionfruit.png";
import bevAutunno from "../../assets/beverage-2-tè-d'autunno.png";
import bevEspresso from "../../assets/beverage-3-espresso.png";

// import { Header } from "../../components/Header";
import { Header } from "../../components/Headyr";
import { Footer } from "../../components/Footer";

import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";
import { Card } from "../../components/Card";



export function Home() {
 
  const [notes, setNotes] = useState([]);

  const [search, setSearch] = useState("");


  useEffect(() => {

    async function fetchNotes() {

      const response = await api.get(`/notes?title=${search}`);

      setNotes(response.data);
    };

    fetchNotes();

  }, [search]);


  function useViewport() {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

      const handleResize = () => setWidth(window.innerWidth);

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
  };

  const viewportWidth = useViewport();

  function dynamicSlides() {
  
    if(viewportWidth >= 720) {
      return "3";

    } else if(viewportWidth >= 670) {
      return "2.8";

    } else if(viewportWidth >= 630) {
      return "2.6";

    } else if(viewportWidth >= 585) {
      return "2.4";

    } else if(viewportWidth >= 535) {
      return "2.2";

    } else if(viewportWidth >= 495) {
      return "2";

    } else if(viewportWidth >= 445) {
      return "1.8";

    } else if(viewportWidth >= 428) {
      return "1.7";

    } else if(viewportWidth >= 415) {
      return "1.6";

    } else if(viewportWidth >= 390) {
      return "1.5";

    } else if(viewportWidth >= 365) {
      return "1.4";

    } else if(viewportWidth >= 345) {
      return "1.3";

    } else {
      return "1.2";
    };
  };



  return(
    <ContainerHome>
      <Header />

      <main>
        <article>
          <img src={fruitsPictureMob} alt="Foto de macarons e frutas flutuando" />

          <div className="text-container">
            <h2>Sabores inigualáveis</h2>

            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </article>

        <section>
          <h1 className="section-title">Refeições</h1>

          <div className="cards-container">
            <PiCaretLeft className="section-arrow-left" />

            <Swiper
              modules={[Navigation]}
              navigation={(viewportWidth >= 769) ? true : false}
              loop={true}
              slidesPerView={dynamicSlides()}
              centeredSlides={(viewportWidth >= 428) ? true : false}
              className="mySwiper"
              /* slidesPerView={'auto'} spaceBetween={30}
                 grabCursor={true} keyboard={true} */
            >
              <SwiperSlide>
                <Card dishPicture={dishGambe} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={dishParma} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={dishPastry} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={dishRavanello} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={dishMolla} />
              </SwiperSlide>
            </Swiper>

            <PiCaretRight className="section-arrow-right" />
          </div>
        </section>

        <section>
          <h1 className="section-title">Sobremesas</h1>

          <div className="cards-container">
            <PiCaretLeft className="section-arrow-left" />

            <Swiper
              modules={[Navigation]}
              navigation={true}
              loop={true}
              slidesPerView={dynamicSlides()}
              centeredSlides={(viewportWidth >= 428) ? true : false}
            >
              <SwiperSlide>
                <Card dishPicture={dishMacaron} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={dishApricotCake} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={dishRavanello} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={dishMacaron} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={dishPrune} />
              </SwiperSlide>
            </Swiper>

            <PiCaretRight className="section-arrow-right" />
          </div>
        </section>

        <section>
          <h1 className="section-title">Bebidas</h1>

          <div className="cards-container">
            <PiCaretLeft className="section-arrow-left" />

            <Swiper
              modules={[Navigation]}
              navigation={true}
              loop={true}
              slidesPerView={dynamicSlides()}
              centeredSlides={(viewportWidth >= 428) ? true : false}
            >
              <SwiperSlide>
                <Card dishPicture={bevJuice} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={bevEspresso} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={bevAutunno} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={bevJuice} />
              </SwiperSlide>

              <SwiperSlide>
                <Card dishPicture={bevAutunno} />
              </SwiperSlide>
            </Swiper>

            <PiCaretRight className="section-arrow-right" />
          </div>
        </section>
      </main>

      <Footer />

      {/* <Header onChange={ e => setSearch(e.target.value)}/>

      <Title>
        <h1>Meus filmes</h1>

        <Button title="Adicionar filme" icon={FiPlus} to="/new_movie" />
      </Title>
      
      <Content>
        {
          notes &&
          notes.map( note => (
            <Movie
              key={String(note.id)}  
              data={note}
              to={`details/${String(note.id)}`}
            />
          ))
        }
      </Content> */}
    </ContainerHome>
  );
};
