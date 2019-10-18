import React, {useEffect, useState, useRef} from "react";
import MyCarousel from "./MyCarousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MyCards from "./MyCards";
import building from "./content/building.jpg";
import {LinkContainer} from "react-router-bootstrap";
import Graph from './Graph';
import MyOverlay from './MyOverlay';
import MyModal from './MyModal';
import mailImg from "./content/email3.png";

const ageOfArticle = 12;

const newArticle = "Jiří Štěpán z Etnetera Activate poodhlalí zákulisí vykutálené náborové kampaně.";


const Landing = () => {
    const target = useRef(null);
    const [formComponent, setFormComponent] = useState(true)
    useEffect(() => {
        window.addEventListener("resize", returnFormComponent);
    }, [])
    const returnFormComponent = function () {
        if (window.innerWidth <= 500) {
            setFormComponent(false);
        }

        if (window.innerWidth > 500) {
            setFormComponent(true);
        }

    }
    const [show, setShow] = useState(false);

    return (
        <div>
            <MyCarousel></MyCarousel>
            <Row className="justify-content-center newsBar">
                <Col xs="12" md="3"
                    style={
                        {textTransform: "uppercase"}
                }>před {ageOfArticle}
                    dny</Col>
                <Col md="4" xs="12">
                    {newArticle} </Col>
                <Col id="linkTo" md="3" xs="12">
                    <LinkContainer exact to="/11">
                        <div>Přečíst</div>
                    </LinkContainer>
                </Col>
            </Row>
            <Container>
                <h2 style={
                    {marginTop: "30px"}
                }>
                    Co jsme zač
                </h2>
                <img src={building}
                    width="400px"
                    height="auto"
                    id="image-building"
                    alt="Obrázok budovy"/>
                <span style={
                    {
                        display: "block",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em"
                    }
                }>
                    V roce 1997 si Martin a Vašek chtěli přivydělat při studiu ČVUT. Založili firmu a brzy s překvapením zjistili, že mohou zaměstnat i své přátele, kteří sdílí jejich znalosti a smysl pro humor. o 20+ letech úspěšného fungování je
                    <section className="orange">Etnetera</section>
                    <b>přední společností v oblasti vývoje webových portálů a aplikací</b>.                                                                                                                                                                                         Orientujeme se na
                    <b>dlouhodobá partnerství a hledání jedinečných řešení s přidanou hodnotou, která vás posunou vpřed</b>.                                                                                                                                                                        Držíme slovo i termíny, dokážeme přiznat a napravit chybu. Věříme sobě i vám.
                </span>
                <p>
                    Pracujeme v liberálním a otevřeném prostředí bez kravat a procesních příruček.                                                                                                                                                               Rádi společně sportujeme a podporujeme se. Kopeme za jeden tým.
                </p>
                <span>
                    Není proto náhoda, že jsme se
                    <div className="tooltipMy">4 roky po sobě<span className="tooltiptext">
                            <b>hustý, co?</b>
                        </span>
                    </div>
                    umístili na třech nejvyšších příčkách v soutěži Best Employers ČR.
                </span>
                <Graph/>
                <Row style={
                    {marginTop: "100px"}
                }>
                    <Col xs={12}
                        sm={6}>
                        <h3>Chceš být naším parťákem?</h3>
                        <p>Měl(a) bys:</p>
                        <ul>
                            <li>Žít HTML5, CSS3. Doslova.Tento jazyk Ti občas připadá přirozenější než čeština.</li>
                            <li>Znát Javascript.</li>
                            <li>Nad pojmy ES6/7, React a Redux bys neměl bezradně krčit rameny, ale bezpečně je znát.</li>
                            <li>Node.js je Tvůj dobrý kamarád, který používáš při buildování</li>
                            <li>Velkou výhodu představují dobré vztahy s dalšími JS frameworky. Tzn. pokud si tykáš třeba s Angular, Vue.js či Vanilla JS.</li>
                            <li>Uvedené technologie Tě zajímají, ale nemáš s nimi moc zkušeností? Nevadí, stav se k nám na kafe, probereme, co se s tím dá dělat.</li>
                        </ul>
                    </Col>

                    <Col xs={12}
                        sm={6}>
                        <h3>Co za to dostaneš?</h3>
                        <p>Budeme si Tě hýčkat např.:</p>
                        <ol type="1">
                            <li>Komfortním pracovním prostředím, které je unikátní kombinací kanceláří, tělocvičny, odpočinkových prostor a kavárny.                                                                                                                                                                                                                                                                                                                                      U nás se strohé prostředí a nažehlené límečky fakt nenosí.</li>
                            <li>Svobodu. Budeme rádi, pokud s námi budeš v kanceláři, ale rozumíme tomu, že někdy budeš chtít pracovat i odjinud.                                                                                                                                                                                       Zároveň chápeme, že každému z nás vyhovuje jiná pracovní doba a zařízení, na kterém pracuje.                                                                                                                                                                                                                                                                                                                                                 Pojďme se pobavit o tvých preferencích, určitě se domluvíme.</li>
                            <li>Pestrým koktejlem takových těch typických benefitů jako jsou třeba stravenková platební karta, Multisport karta,
                                                                                                                                                                                                                                                                                                                                                                                                                  příspěvky na vzdělání, dopravu a penzijní pojištění.</li>
                            <li>Možností pořádně si oddychnout. Nejen v našich relaxačních prostorech, ale třeba na pláži v exotice.                                                                                                                                                                                                                                                                                                                     Díky 5 týdnům placené dovolené.</li>
                            <li>Inspirativním prostředím plným zajímavých lidí, které stojí za to poznat.                                                                                                                                                                                                                                                                                                                      Organizujeme pravidelné TechLunche, kdy nad lahodnou pizzou sdílíme naše nové poznatky a vědomosti.</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
            <Row className="justify-content-center"
                style={
                    {
                        backgroundColor: "white",
                        marginRight: "0px",
                        paddingBottom: "50px"
                    }
            }>
                <MyCards/>
            </Row>
            <div style={
                {
                    backgroundColor: "white",
                    textAlign: "center",
                    fontWeight: "bold"
                }
            }>
                <p className="copyright">Copyright</p>
                <span style={
                    {display: "block"}
                }>&copy; 2019 ETNETERA</span>
                <div style={
                    {width: "90%"}
                }>
                    <img src={mailImg}
                        ref={target}
                        alt="mail"
                        width="70"
                        id="imgMail"
                        onClick={
                            () => setShow(!show)
                        }/> {
                    formComponent ? <MyOverlay target={
                            target.current
                        }
                        show={show}
                        setShow={setShow}/> : <MyModal show={show}
                        setShow={setShow}/>
                } </div>
                <p>
                    Jsme hrdým členem
                    <span className="orange">Etnetera Group</span>
                </p>
            </div>
        </div>
    );
}

export default Landing;
