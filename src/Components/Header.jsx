import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary fw-bold">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5sq1PILOaWKA7GpYhHiIplOl62KxpPONrg&s"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Media Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
