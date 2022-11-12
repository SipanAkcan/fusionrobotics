import React from "react"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "../../style.css"


const b_belediyesi = require("../../assets/sponsors/bahcelievler_logo.jpg");
const knowledge_club = require("../../assets/sponsors/knowledge_club.jpg");
const rustu_akin = require("../../assets/sponsors/rüstü_akin_vakfi.png");
const unity = require("../../assets/sponsors/unity.png");
const r_kadak = require("../../assets/sponsors/r_kadak.png");
const altay_civata = require("../../assets/sponsors/altay_civata.png");
const eskipolat = require("../../assets/sponsors/eskipolat.png");
const demiriz = require("../../assets/sponsors/demiriz.png");
const asya_bayrak = require("../../assets/sponsors/asya_bayrak.png");
const konzek = require("../../assets/sponsors/konzek.png");
const micron_tekstil = require("../../assets/sponsors/micron_tekstil.png");
const star_alüminyum = require("../../assets/sponsors/star_alüminyum.png");
const verar_kargo = require("../../assets/sponsors/verar_kargo.jpeg");
const özsoy_metal = require("../../assets/sponsors/özsoy_metal.png");
const saykom = require("../../assets/sponsors/saykom.png");
const ozbekcpa = require("../../assets/sponsors/özbekcpa.png");
const özdisan = require("../../assets/sponsors/özdisan.png");
const sbk_krom = require("../../assets/sponsors/sbk_krom.png");
const dogus_kalip = require("../../assets/sponsors/dogus_kalip.png");
const veronelli = require("../../assets/sponsors/veronelli.jpeg");
const burger_yiyelim = require("../../assets/sponsors/burger_yiyelim.png");

function sponsors(){
    return(

        <Container>
        <Row>
        <Col md={12}>
        <br></br>
        <h2 className="text-center" style={{color:"#10375c"}}>Sponsors</h2>
        </Col>
        
        <Col md={12}>
        <Carousel
        centered
        infinite
        dots
        arrows
        slidesPerPage={3}
        className="sponsorCarousel"
        >
        <img src={b_belediyesi} alt="Slide 1"/>
        <img src={knowledge_club} alt="Slide 2"/>
        <img src={unity} alt="Slide 3"/>
        <img src={altay_civata} alt="Slide 4"/>
        <img src={eskipolat} alt="Slide 4"/>
        <img src={demiriz} alt="Slide 4"/>
        <img src={asya_bayrak} alt="Slide 4"/>
        <img src={konzek} alt="Slide 4"/>
        <img src={micron_tekstil} alt="Slide 4"/>
        <img src={star_alüminyum} alt="Slide 4"/>
        <img src={verar_kargo} alt="Slide 4"/>
        <img src={özsoy_metal} alt="Slide 4"/>
        <img src={saykom} alt="Slide 4"/>
        <img src={özdisan} alt="Slide 4"/>
        <img src={ozbekcpa} alt="Slide 4"/>
        <img src={sbk_krom} alt="Slide 4"/>
        <img src={dogus_kalip} alt="Slide 4"/>
        <img src={veronelli} alt="Slide 4"/>
        <img src={burger_yiyelim} alt="Slide 4"/>
        <img src={rustu_akin} alt="Slide 4"/>
        </Carousel>
  <br></br>
 
        </Col>
        </Row>
        </Container>

    )
}

export default sponsors;