import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashutosh Gautam</span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science.
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dream big, work hard, stay focused, and surround yourself with good people. The sky is not the limit—it's just the beginning! Let's make magic happen!"{" "}
          </p>
          <footer className="blockquote-footer">Ashutosh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
