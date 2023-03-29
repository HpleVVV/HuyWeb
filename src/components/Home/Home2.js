import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              VỀ <span className="purple"> BẢN THÂN </span> MÌNH
            </h1>
            <p className="home-about-body">
              Mình tốt nghiệp trường Đại học Kinh tế Đà Nẵng, khoa Quản trị Kinh doanh. Bên cạnh đó, mình rất đam mê công nghệ thông tin và đã
              học thêm về công việc Phân tích nghiệp vụ 🤷‍♂️
              <br />
              <br />Mình có thể sử dụng tốt
              <i>
                <b className="purple"> Flutter, Power BI và Python. </b>
              </i>
              <br />
              <br />
              Trong suốt quá trình học và làm việc, mình nhận ra bản thân có năng lực liên quan đến &nbsp;
              <i>
                <b className="purple">Phân tích dữ liệu </b> để từ đó có thể{" "}
                <b className="purple">
                  Giúp doanh nghiệp có thể nâng cấp, cải thiện quy trình kinh doanh bằng cách tận dụng dữ liệu
                </b>
              </i>
              <br />
              <br />
              Ngoài ra mình đã học tập và có kinh nghiệm làm việc với các Stakeholders để lấy yêu cầu xây dựng ứng dụng ở vị trí
              <b className="purple">Chuyên viên Phân tích nghiệp vụ</b> và
              <i>
                <b className="purple">
                  {" "}
                  Hỗ trợ phát triển dự án
                </b>
              </i>
              &nbsp; với
              <i>
                <b className="purple"> 1 năm kinh nghiệm</b>
              </i>
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
            <h1>Mạng xã hội của mình</h1>
            <p>
              Đừng ngần ngại <span className="purple">liên lạc </span> với mình
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
