import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbMathIntegralX } from "react-icons/tb";
import { GiChart } from "react-icons/gi";
import { RiFunctions } from "react-icons/ri";
import { Icon } from '@iconify/react';


import {
    CgCPlusPlus,
    CgDatabase,
} from "react-icons/cg";
import {
    DiPython,
} from "react-icons/di";
import {
    SiPytorch,
    SiTensorflow,
    SiScipy,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
} from "react-icons/si"
function Techstack() {
  return (
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <DiPython size={70} />
                  <p>Python</p>
              </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <div>
                  <Icon icon="devicon-plain:c" width="135" height="135" />
              </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
                 <CgCPlusPlus size={135} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <CgDatabase size={70} />
                  <p>SQL</p>
              </div>
          </Col>



          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <SiNumpy size={70} />
                  <p>NumPy</p>
              </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <SiPandas size={70} />
                  <p>Pandas</p>
              </div>
          </Col>



          <Col xs={4} md={2} className="tech-icons-original">
              <div className="icon-container-original" >
                  <Icon icon="devicon:matplotlib" />
                  <p>Matplotlib</p>
              </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons-original">
              <div className="icon-container-original" >
                  <Icon icon="logos:seaborn-icon" />
                  <p>Seaborn</p>
              </div>
          </Col>

          <Col xs={4} md={2} className="tech-icons-original">
              <div className="icon-container-original" >
                  <Icon icon="logos:microsoft-power-bi" />
                  <p>Power BI</p>
              </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons-original">
              <div className="icon-container-original" >
                  <Icon icon="logos:tableau-icon" />
                  <p>Tableau</p>
              </div>
          </Col>

          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <SiScikitlearn size={70} />
                  <p>Scikit-Learn</p>
              </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <SiTensorflow size={70} />
                  <p>TensorFlow</p>
              </div>
          </Col>


          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <SiScipy size={70} />
                  <p>SciPy</p>
              </div>
          </Col>

          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <SiPytorch size={70} />
                  <p>PyTorch</p>
              </div>
          </Col>





          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <RiFunctions size={70} />
                  <p>Linear Algebra</p>
              </div>
          </Col>

          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <TbMathIntegralX size={70} />
                  <p>Calculus </p>
              </div>
          </Col>

          <Col xs={4} md={2} className="tech-icons">
              <div className="icon-container">
                  <GiChart size={70} />
                  <p>Statistics</p>
              </div>
          </Col>

    </Row>
  );
}


export default Techstack;



