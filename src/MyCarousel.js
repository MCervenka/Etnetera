import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImg from "./content/vrstva_1.png";
import Button from "react-bootstrap/Button";

const MyCarousel = () => {
  return (
    <Carousel indicators="false">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Přidej se v Etneteře mezi kódery</h3>
          <p>Čeká ťe tým mladých lidí zapálených do kódování. Nejsme žádný tiše pracující tým. Rádi si s tebou i během práce pokecáme, zajdeme na oběd nebo poradíme s problémem.</p>
          <Button variant="outline-warning">Více o nás</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="outline-warning">Více o nás</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;