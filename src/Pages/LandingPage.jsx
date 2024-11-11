import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <Row className="m-5   align-items-center justify-content-between w-100">
        {/* <Col></Col> */}
        <Col lg={5}>
          <h1 style={{ color: "blueviolet", fontSize: "40px" }}>
            Welcome to <span className="text-warning">Media-Player</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            libero eligendi harum beatae dolorum eius, impedit molestias
            suscipit animi earum natus, sed laudantium neque commodi, doloremque
            tempore quisquam esse sint!
          </p>
          <Link className="btn btn-info" to={'/home'} style={{textDecoration:"none"}}>Get Started</Link>
        </Col>
        <Col lg={5}>
          <video
          width="450px"
            // src="https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-musical-note-illustration-png-image_6694645.png"
            src="./public/v1.mp4"
            alt=""
          />
        </Col>
        <col></col>
      </Row>
      <div className="container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100" style={{border:"none"}}>
        <h2 className="text-warning text-center">Features</h2>
        <div className=" mb-5 mt-5 d-flex flex-row align-items-center justify-content-between w-100">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"300px"}
              width={"300px"}
              // src="./public/vite.svg"
              src="https://img.freepik.com/free-vector/video-design-abstract-concept-illustration_335657-3820.jpg?t=st=1730790542~exp=1730794142~hmac=fa20ff0f6a3afe8582beeb1c969cda09548c04ac83c27820789d968e6e094817&w=740"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"300px"}
              width={"300px"}
              src="https://img.freepik.com/free-vector/docking-station-abstract-concept-illustration_335657-2278.jpg?t=st=1730790446~exp=1730794046~hmac=c36576206e78f4baff17fb1a37c82bee6e533ca51c5db39dc4f82b037aa407e0&w=740"
            />
            <Card.Body>
              <Card.Title>Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"300px"}
              width={"300px"}
              src="https://img.freepik.com/free-vector/music-player-app-interface-collection_23-2148537148.jpg?t=st=1730790684~exp=1730794284~hmac=eb48409b5cf18ee4b360341fb91d33d07cf18546f46cf1576a6ab1d81f283fd8&w=740"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* Details Section */}
      <div className="container border border-2 d-flex gap-5 align-items-center justify-content-center m-5 p-3">
        <div className="col-lg-5">
          <h4 className="text-warning fw-bolder">Simple,Powerful & Fast</h4>
          <h6 className="mt-3">
            <span className="text-warning fw-bolder">Play Everything</span>
            :Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            ipsa assumenda non quos nemo incidunt saepe, nisi labore natus quasi
            minima molestias unde voluptas culpa temporibus tempora ab nihil
            repellendus!
          </h6>
          <h6 className="mt-3">
            <span className="text-warning fw-bolder">Categorized Videos</span>
            :Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            ipsa assumenda non quos nemo incidunt saepe, nisi labore natus quasi
            minima molestias unde voluptas culpa temporibus tempora ab nihil
            repellendus!
          </h6>
          <h6 className="mt-3">
            <span className="text-warning fw-bolder">Managing Videos</span>
            :Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            ipsa assumenda non quos nemo incidunt saepe, nisi labore natus quasi
            minima molestias unde voluptas culpa temporibus tempora ab nihil
            repellendus!
          </h6>
        </div>
        <div className="col-lg-5 d-flex align-items-center justify-content-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qN3wfuPYTI4?si=53K0tGBj4fbBTf84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default LandingPage;
