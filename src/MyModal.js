import React from "react";
import Button from "react-bootstrap/Button";
import Close from "./content/k_ek.png";
import Modal from 'react-bootstrap/Modal';

function MyModal(props) {
    const {show, setShow } = props;

    return (
            <Modal aria-labelledby="contained-modal-title-vcenter" centered size="lg"
                show={show} onHide={() => setShow(false)}>
                <img src={Close}
                    alt="close-button"
                    onClick={
                        () => setShow(!show)
                    }
                    width="20"/>
                    <br /><br />
                <h3 className="mb">
                    <strong>Dostávejte články přímo do vaší e-mailové schránky!</strong>
                </h3>
                <span>
                    <span className="smallText"></span>
                    <form action="" method="get">
                        <div>
                            <label for="email">VAŠE E-MAILOVÁ ADRESA
                            </label><br />
                            <input size="20"
                                style={
                                    {fontSize: "1.5rem"}
                                }
                                type="email"
                                name="email"
                                id="email"
                                required/>
                        </div>
                        <div>
                            <Button onClick="Submit" type="submit" variant="warning">Odeslat</Button>
                        </div>
                    </form>
                    Podmínky zpracování osobních údajů ("Podmínky") poskytují informace o shromažďování, zaznamenání, používání a jiného zpracování osobních údajů společností Etnetera a.s. se sídlem Jankovcova 1037/49, 170 00 Praha 7, IČO: 25103814, zapasaná u MS Praha, sp. zn B 11168, jakožto správcem osobních údajů.
                </span>
            </Modal>
    );
}

export default MyModal;
