import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck';
//import Carousel from "react-bootstrap/Carousel";

const MyCards = () => {
  return (
    <CardDeck>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Sdílení vedomostí</Card.Title>
          <Card.Text>
            Inspirativní prostředí plné zajímavých lidí, které stojí za to poznat.
            Organizujem pravidelné TechLunche, kdy nad lahodnou pizzou sdílíme naše nové poznatky a vědomosti.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">#etnplesk</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>O lidi se staráme někdy víc než o klienty</Card.Title>
          <Card.Text>
            Komfortní pracovní prostředí, které je unikátní kombinací kanceláří, tělocvičny, odpočinkových prostor a kavárny.
            U nás se strohé prostředí a nažehlené límečky fakt nenosí.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">#etnplesk</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Jaké u nás dostaneš benefity?</Card.Title>
          <Card.Text>
            Pestrým koktejlem takových těch typických benefitů jako jsou třeba stravenková platební karta, Multisport karta, příspěvky na vzdělání, dopravu a penzijní pojištění.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">#etnplesk</Card.Link>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}
export default MyCards;