import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProspeLoan from "../../Assets/Projects/Exploratory-Data-Analysis-Prosper-Loan-Data.png";
import emotion from "../../Assets/Projects/emotion.png";
import KMeans from "../../Assets/Projects/KMeans_Clustering.png";
import SuperCon from "../../Assets/Projects/Prediction-of-Superconductor-critical-temperature-using-Machine-learning-techniques.jpg";
import TMDB from "../../Assets/Projects/Investigation-of-TMDB-Data-Set.jpeg";
import StockMarket from "../../Assets/Projects/Stock Market Prediction using Numerical and Textual Analysis.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SuperCon}
              isBlog={false}
              title="Prediction of Superconductor critical temperature using Machine learning techniques"
              description="As part of a project, I developed a machine learning model using Pandas, NumPy, and Scikit-learn to
                            predict the critical temperature (Tc) of superconductors. The model was trained on a dataset of
                            Supercon that included their chemical composition and Tc values. I used feature selection, supervised
                            and unsupervised learning, and model evaluation techniques to identify the factors that influence Tc.
                            The project aimed to contribute to the development of new superconducting materials with higher Tc
                            values, which have important applications in fields such as energy generation, transportation, and
                            medicine."
              ghLink="https://github.com/Mohamed-Ahmed-Ali/Prediction-of-Superconductor-critical-temperature-using-Machine-learning-techniques/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StockMarket}
              isBlog={false}
              title="Stock Market Prediction using Numerical and Textual Analysis"
              description="I utilized Python, Pandas, Scikit-learn, NLTK, and Vader Sentiment Analysis for data preprocessing,
                            feature engineering. The project involved training nine machine learning models, including Linear
                            Regression, Random Forest, and BayesianRidge, on both numerical and textual data. I evaluated and
                            compared the performance of the models using metrics such as MAE, MSE, RMSE, and R2. The project
                            resulted in a RMSE of 92.99 and R2 of 0.99, highlighting the potential of using natural language
                            processing techniques to analyze textual data and improve stock market prediction accuracy."
              ghLink="https://github.com/Mohamed-Ahmed-Ali/GRIP-Projects/blob/main/Stock%20Market%20Prediction%20using%20Numerical%20and%20Textual%20Analysis.ipynb"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProspeLoan}
              isBlog={false}
              title="Prosper Loan Exploratory Data Analysis"
              description="The Project involved analyzing loan data provided by Prosper, a peer-to-peer lending marketplace. I utilized
                            Python, Pandas, Matplotlib, Seaborn, and NumPy for data cleaning, feature engineering, and data
                            visualization. The project aimed to gain insights into loan characteristics. I analyzed variables such as loan
                            amounts, borrower rates, credit scores, employment status and loan statuses. I created visualizations such
                            as histograms, bar charts, and heatmaps to identify patterns and trends in the data. The project provided
                            valuable insights into the factors that affect loan performance and borrower behavior, such as loan size,
                            borrower credit score, and employment status."
              ghLink="https://github.com/Mohamed-Ahmed-Ali/Exploratory-Data-Analysis-Prosper-Loan-Data/blob/main/exploration_template.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TMDB}
              isBlog={false}
              title="Investigation of TMDB Data Set"
              description="The project uses Python programming language and various data analysis and visualization libraries such as Pandas, NumPy, Matplotlib, and Seaborn.
                            The project starts by performing data cleaning and wrangling to prepare it. Then, the project explores the data by examining various features,
                            The project concludes with some insights and findings drawn from the analysis, such as the most popular genres, the most profitable movies and TV shows, and the correlation between budget and revenue."
              ghLink="https://github.com/Mohamed-Ahmed-Ali/Investigation-of-TMDB-Data-Set-/blob/main/Project%20Tmdb%20Data%20Set.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                          ghLink="https://github.com/Mohamed-Ahmed-Ali/Face-And-Emotion-Detection"

            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KMeans}
              isBlog={false}
              title="KMeans Clustring"
                          description="Prediction using Unsupervised Machine Learning, predict the optimum number of clusters and represent it visually.The project is implemented in a Jupyter Notebook using Python programming language and various data analysis and visualization libraries such as Pandas, NumPy, Matplotlib, and Scikit-learn.
                                        The project implements the KMeans clustering algorithm to group the data points into clusters based on their similarity. The project uses the Elbow method to determine the optimal number of clusters and evaluates the performance of the algorithm using the Silhouette score."
              ghLink="https://github.com/Mohamed-Ahmed-Ali/GRIP-Projects/blob/main/KMeans_Clustering.ipynb"           
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
