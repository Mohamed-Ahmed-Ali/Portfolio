import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import certificationImg from "../../Assets/Advanced-Data-Analysis-Certification.png";

function Github() {
  return (
      <div>
         <Row style={{ justifyContent: "center" , paddingBottom: "10px" }}>
              <h1 className="project-heading">
                    <strong className="purple">Certifications</strong>
              </h1>
         </Row>
      <Row style={{ justifyContent: "center" , paddingBottom: "50px" }}>
        <div style={{ maxWidth: "1000px" }}>
          <img src={certificationImg} alt="Certification" style={{ width: "100%" }} />
        </div>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <h1 className="project-heading">
          Days I <strong className="purple">Code</strong>
        </h1>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <GitHubCalendar
          username="Mohamed-Ahmed-Ali"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>

    </div>
  );
}
export default Github;
