import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import madystore from "../../Assets/Projects/madystore.png";
import tickety from "../../Assets/Projects/tickety.png"
import taskportal from "../../Assets/Projects/taskportal.png"
import tipcalc from "../../Assets/Projects/tipcalc.png"
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
              imgPath={taskportal}
              isBlog={false}
              title="SEOSpaceTrax - Task Portal"
              description="Welcome to SEOSpaceTrax! This project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). SEOSpaceTrax is a task portal with Google authentication, Stripe payment integration, and AWS S3 bucket integration. The application offers functionalities like searching, sorting, and uploading pictures."
              ghLink="https://github.com/ashug09/frontend-task_portal/"
              demoLink="https://task-portal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={madystore}
              isBlog={false}
              title="Mady Store"
              description="Mady Store is a fully functional e-commerce platform built using Next.js, designed to provide a seamless and secure online shopping experience. The application leverages Firebase for user authentication and Stripe for payment processing, ensuring that users can safely and easily purchase a variety of products. The integration of a store API allows for dynamic and up-to-date product listings, enhancing the user experience."
              ghLink="https://github.com/ashug09/ecommerce_website"
              demoLink="https://ecommerce-seven-murex.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tickety}
              isBlog={false}
              title="Tickety - Ticket Generating Web App"
              description="Welcome to Tickety! This project is a full-stack CRUD application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Next.js for server-side rendering and serverless APIs. With Tickety, users can generate, view, modify, and delete tickets for various listed issues."
              ghLink="https://github.com/ashug09/Tickety"
              demoLink="https://tickety-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipcalc}
              isBlog={false}
              title="Tip Calculator"
              description="Welcome to the Tip Calculator! This is a simple web application that calculates the tip based on the bill amount and splits it among the number of people. Built using HTML, CSS, and JavaScript, this project helps you quickly determine how much each person should contribute to the tip."
              ghLink="https://github.com/ashug09/Tip-Calculator"
              demoLink="https://tipcalculator-eight.vercel.app/"
            />
          </Col>

{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
