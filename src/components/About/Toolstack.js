import React from "react";
import { Col, Row } from "react-bootstrap";
import {

    SiLinux,
    SiVisualstudio,
    SiMicrosoftexcel,
    SiVmware,
    SiJira,
    SiAnaconda,
    SiGooglecolab,
    SiMicrosoftazure,
    SiAmazonaws,
    SiOracle,
} from "react-icons/si";
import {
    DiGit,
} from "react-icons/di";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux size={90} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudio size={90} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMicrosoftexcel size={90} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVmware size={90} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJira size={90} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAnaconda size={90} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGooglecolab size={90} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMicrosoftazure size={90} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAmazonaws size={90} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiOracle size={90} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit size={90} />
            </Col>

        </Row>
    );
}

export default Toolstack;
