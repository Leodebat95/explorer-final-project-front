import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { api } from "../../services/api";
import { useCustom } from "../../contexts/CustomPropsContext";

import { Container } from "./styles";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

import fruitsPictureMob from "../../assets/food-home-mob.png";
import fruitsPictureTab from "../../assets/food-home-tablet.png";
import fruitsPictureDsk from "../../assets/food-home-desktop.png";

import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";



export function Home() {
 
  const { menuOpen, setMenuOpen } = useCustom();
  
  const [dishes, setDishes] = useState([]);
  
  const [search, setSearch] = useState('');


  useEffect(() => {

    async function fetchDishes() {

      const response = await api.get(`/dishes?title=${search}`);

      setDishes(response.data);
    };
    fetchDishes();

  }, [search]);


  useEffect(() => {

    setMenuOpen(false);
  }, []);


  useEffect(() => {

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10)
    
  }, []);


  function handleFruitsPicture() {

    if (window.innerWidth <= 767) {
      return fruitsPictureMob;
    };

    if ((window.innerWidth > 767) && (window.innerWidth <= 1122)) {
      return fruitsPictureTab;
    };

    if (window.innerWidth > 1122) {
      return fruitsPictureDsk;
    };
  };


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
  
    if(viewportWidth >= 1110) {
      return "2.7";

    } else if(viewportWidth >= 1024) {
      return "2.5";

    } else if(viewportWidth >= 970) {
      return "2.3";

    } else if(viewportWidth >= 880) {
      return "2.1";

    } else if(viewportWidth >= 820) {
      return "1.9";

    } else if(viewportWidth >= 768) {
      return "1.7";

    } else if(viewportWidth >= 720) {
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
    <Container menuOpen={menuOpen}>

      <Header onChange={ e => setSearch(e.target.value)} />
      <MenuMobile onChange={ e => setSearch(e.target.value)} />

      <main>
        <article>
          <img
            alt="Foto de macarons e frutas flutuando"
            src={handleFruitsPicture()}
          />

          <div className="text-container">
            <h2>Sabores inigualáveis</h2>

            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </article>

        <section>
          <h1 className="section-title">Pratos Principais</h1>

          <div className="cards-container">
            {dishes.length >= 6 && <PiCaretLeft className="section-arrow-left" />}

            {dishes.length >= 6 &&
              <Swiper
                modules={[Navigation]}
                navigation={(viewportWidth >= 768) ? true : false}
                loop={true}
                slidesPerView={dynamicSlides()}
                centeredSlides={(viewportWidth >= 428) ? true : false}
                className="mySwiper"
                /* slidesPerView={'auto'} spaceBetween={30}
                  grabCursor={true} keyboard={true} */
              >
                {
                  dishes
                    .filter( mainDish => mainDish.category === "prato-principal")
                    .map( mainDish => (
                      <SwiperSlide>
                        <Card
                          key={String(mainDish.id)}
                          data={mainDish}
                        />
                      </SwiperSlide>
                    ))
                }
              </Swiper>
            }

            {
              dishes.length <= 5 &&
              <p className="waiting-items">
                O slider só funcionará corretamente se ao menos 6 itens estiverem disponíveis . . .
              </p>
            }

            {dishes.length >= 6 && <PiCaretRight className="section-arrow-right" />}
          </div>
        </section>

        <section>
          <h1 className="section-title">Sobremesas</h1>

          <div className="cards-container">
            {dishes.length >= 6 && <PiCaretLeft className="section-arrow-left" />}

            {dishes.length >= 6 &&
              <Swiper
                modules={[Navigation]}
                navigation={(viewportWidth >= 768) ? true : false}
                loop={true}
                slidesPerView={dynamicSlides()}
                centeredSlides={(viewportWidth >= 428) ? true : false}
              >
                {
                  dishes
                    .filter( dessert => dessert.category === "sobremesa")
                    .map( dessert => (
                      <SwiperSlide>
                        <Card
                          key={String(dessert.id)}
                          data={dessert}
                        />
                      </SwiperSlide>
                    ))
                }
              </Swiper>
            }

            {
              dishes.length <= 5 &&
              <p className="waiting-items">
                O slider só funcionará corretamente se ao menos 6 itens estiverem disponíveis . . .
              </p>
            }

            {dishes.length >= 6 && <PiCaretRight className="section-arrow-right" />}
          </div>
        </section>

        <section>
          <h1 className="section-title">Bebidas</h1>

          <div className="cards-container">
            {dishes.length >= 6 && <PiCaretLeft className="section-arrow-left" />}

            {dishes.length >= 6 &&
              <Swiper
                modules={[Navigation]}
                navigation={(viewportWidth >= 768) ? true : false}
                loop={true}
                slidesPerView={dynamicSlides()}
                centeredSlides={(viewportWidth >= 428) ? true : false}
              >
                {
                  dishes
                    .filter( beverage => beverage.category === "bebida")
                    .map( beverage => (
                      <SwiperSlide>
                        <Card
                          key={String(beverage.id)}
                          data={beverage}
                        />
                      </SwiperSlide>
                    ))
                }
              </Swiper>
            }

            {
              dishes.length <= 5 &&
              <p className="waiting-items">
                O slider só funcionará corretamente se ao menos 6 itens estiverem disponíveis . . .
              </p>
            }

            {dishes.length >= 6 && <PiCaretRight className="section-arrow-right" />}
          </div>
        </section>
      </main>

      <Footer />
    </Container>
  );
};
