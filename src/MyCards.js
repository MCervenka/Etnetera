import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from 'react-bootstrap/Carousel';

const CardTemplate = props => {
  return (
    <Card className={props.myStyle}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text> {props.text} </Card.Text>
        <span className="card-date">{props.date}</span>
        <Card.Link href="#">#etnplesk</Card.Link>
      </Card.Body>
    </Card>
  );
};

const Card1 = () => {
  return (
    <CardTemplate
      date="11.ledna"
      myStyle="cardWhite"
      text="Inspirativní prostředí plné zajímavých lidí, které stojí za to poznat. Organizujem pravidelné TechLunche, kdy nad lahodnou pizzou sdílíme naše nové poznatky a vědomosti."
      title="Sdílení vedomostí"
    />
  );
};

const Card2 = () => {
  return (
    <CardTemplate
      date="12.ledna"
      myStyle="cardBlack"
      text="Komfortní pracovní prostředí, které je unikátní kombinací kanceláří, tělocvičny, odpočinkových prostor a kavárny. U nás se strohé prostředí a nažehlené límečky fakt nenosí."
      title="O lidi se staráme někdy víc než o klienty"
    />
  );
};

const Card3 = () => {
  return (
    <CardTemplate
      date="12.ledna"
      myStyle="cardWhite"
      text="Pestrým koktejlem takových těch typických benefitů jako jsou třeba stravenková platební karta, Multisport karta, příspěvky na vzdělání, dopravu a penzijní pojištění."
      title="Jaké u nás dostaneš benefity?"
    />
  );
};

const CardView = (function() {
  return (
    <CardDeck>
      <Card1 />
      <Card2 />
      <Card3 />
    </CardDeck>
  );
})();

const CarouselView = (function() {
  return (
    <Carousel className="justify-content-center card-carousel" fade={true}>
      <Carousel.Item>
        <Card1 />
      </Carousel.Item>
      <Carousel.Item>
        <Card2 />
      </Carousel.Item>
      <Carousel.Item>
        <Card3 />
      </Carousel.Item>
    </Carousel>
  );
})();

class MyCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichComponent: false
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.returnComponent.bind(this));
    this.returnComponent();
  }

  returnComponent() {
    if (window.innerWidth <= 800) {
      this.setState({ newComponent: false });
    }

    if (window.innerWidth > 800) {
      this.setState({ newComponent: true });
    }
  }
  render() {
    return <div> {this.state.newComponent ? CardView : CarouselView} </div>;
  }
}
export default MyCards;
