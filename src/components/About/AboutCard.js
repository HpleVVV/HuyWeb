import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Chào bạn, Mình là <span className="purple">Tiến Huy </span>
            đến từ <span className="purple"> Đà Nẵng, Việt Nam.</span>
            <br />Mình tốt nghiệp trường Đại học Kinh tế Đà Nẵng và hiện tại mình đang theo đuổi công việc Phân tích dữ liệu
            <br />
            <br />
            Bên cạnh việc nghiên cứu và phân tích các số liệu, mình rất muốn tham gia các hoạt động giải trí
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Chơi Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Bóng đá
            </li>
            <li className="about-activity">
              <ImPointRight /> Du lịch
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
