import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
          <Container>
              <Row>
                  <Col md={8} className="home-about-description">
                      <h1 style={{ fontSize: "2.6em" }}>
                          LET ME <span className="purple"> INTRODUCE </span> MYSELF
                      </h1>
                      <p className="home-about-body">
                          I fell in love with programming and I have at least learnt
                          something, I think… 🤷‍♂️
                          <br />
                          <br />I am fluent in classics like
                          <i>
                              <b className="purple"> C, C++, SQL and Python. </b>
                          </i>
                          <br />
                          <br />
                          My field of Interest's are Exporting data to analyze and solve problems.  &nbsp;
                          <i>
                              <b className="purple">Web Technologies and Products </b> and
                              also in areas related to{" "}
                              <b className="purple">
                                  Artificial Intelligence and Machine Learning.
                              </b>
                          </i>
                          <br />
                          <br />
                          Whenever possible, I also apply my passion for developing products
                          with <b className="purple">Cross Platform Apps</b>

                      </p>
                  </Col>
                  <Col md={4} className="myAvtar">
                      <Tilt>
                          <img src={myImg} className="img-fluid" alt="avatar" />
                      </Tilt>
                  </Col>
              </Row>
              <Row>
                  <Col md={12} className="home-about-social">
                      <h1>FIND ME ON</h1>
                      <p>
                          Feel free to <span className="purple">connect </span>with me
                      </p>
                      <ul className="home-about-social-links">


                          <li className="social-icons">
                              <a
                                  href="https://linkedin.com/in/mohamed-ali-46320b216"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour  home-social-icons"
                              >
                                  <FaLinkedinIn />
                              </a>
                          </li>
                          <li className="social-icons">
                              <a
                                  href="https://github.com/Mohamed-Ahmed-Ali"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour  home-social-icons"
                              >
                                  <AiFillGithub />
                              </a>
                          </li>
                          <li className="social-icons">
                              <a
                                  href="https://www.facebook.com/Mohamed.MNMO/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour home-social-icons"
                              >
                                  <AiFillFacebook />
                              </a>
                          </li>
                          <li className="social-icons">
                              <a
                                  href="https://www.instagram.com/mohamed.__ahmed/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour home-social-icons"
                              >
                                  <AiFillInstagram />
                              </a>
                          </li>
                          <li className="social-icons">
                              <a
                                  href="https://twitter.com/Mohamed_MNMO/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour  home-social-icons"
                              >
                                  <AiOutlineTwitter />
                              </a>
                          </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
