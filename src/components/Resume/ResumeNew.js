import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Mohamed Ali Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
    "https://raw.githubusercontent.com/Mohamed-Ahmed-Ali/Data-Science-Resume/7876e362280681657a95cdfaf4452360f117f726/Mohamed%20Ali%20Resume.pdf";

function ResumeNew() {
    const [width, setWidth] = useState(1200);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    function handlePrevPage() {
        setPageNumber(pageNumber - 1);
    }

    function handleNextPage() {
        setPageNumber(pageNumber + 1);
    }

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />

                <Row className="resume">
                    <Document file={resumeLink} className="d-flex justify-content-center">
                        <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>
                <Row style={{ justifyContent: "center", marginTop: "20px" }}>
                    <Button
                        variant="secondary"
                        disabled={pageNumber <= 1}
                        onClick={handlePrevPage}
                        style={{ marginRight: "10px" }}
                    >
                        Prev Page
                    </Button>
                    <Button
                        variant="secondary"
                        disabled={pageNumber >= 2}
                        onClick={handleNextPage}
                    >
                        Next Page
                    </Button>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>


            </Container>
        </div>
    );
}


export default ResumeNew;
