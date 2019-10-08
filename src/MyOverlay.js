import React, { useState, useRef }  from "react";
import mailImg from "./content/email3.png";
import Popover from 'react-bootstrap/Popover';
import Overlay from "react-bootstrap/Overlay";
import Button from "react-bootstrap/Button";
import Close from "./content/k_ek.png";

function MyOverlay() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
      <div style={{width: "90%"}}>
        <img src={ mailImg } alt="mail" width="70" id="imgMail" ref={target} onClick={() => setShow(!show)} />
  
        <Overlay target={target.current} show={show} placement="top" >
          {({
            
            scheduleUpdate,
            outOfBoundaries,
            show: _show,
            ...props
          }) => (
            <Popover
              {...props}
              style={{
                ...props.style,
              }}
              id='popover-positioned-top-end'
              >
              <Popover.Content>
                <img src={Close} alt="close-button" onClick={() => setShow(!show)} width="20"/>
                <h3 className="mb"><strong>Dostávejte články přímo do vaší e-mailové schránky!</strong></h3>
                <span>
                  <span className="smallText"></span>
                  <form action="" method="get">
                    <div>
                      <label for="email">VAŠE E-MAILOVÁ ADRESA </label>
                      <input size="20" style={{fontSize: "2rem"}} type="email" name="email" id="email" required />
                    </div>
                    <div>
                      <Button type="submit" variant="warning" onClick="Submit">Odeslat</Button>
                    </div>
                  </form>                 
                  Podmínky zpracování osobních údajů ("Podmínky") poskytují informace o shromažďování, zaznamenání,
                  používání a jiného zpracování osobních údajů společností Etnetera a.s. se sídlem Jankovcova 1037/49,
                  170 00 Praha 7, IČO: 25103814, zapasaná u MS Praha, sp. zn B 11168, jakožto správcem osobních údajů.
                </span>
              </Popover.Content>
            </Popover>
          )}
        </Overlay>
      </ div>
    );
  }

  export default MyOverlay;