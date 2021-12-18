import React from "react";
import { Navbar, Container, Nav } from "bootstrap";
import HalamanUtama from "../PaggesUtama/HalamanUtama";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HalamanHome from "../PaggesHome/HalamanHome";
import HalamanFitur from "../PaggesFitur/HalamanFitur";
import Percobaan from "../Halaman Percobaan/Percobaan";

//Sekedar Informasi Routes Itu Swicth Karna Ini menggunakan React Router dom V6 syantaxnya begitu...

//////////////////////////////////////////////////////////////
//Ini Navbar Sekaligus sebagi Tempat Routing nya ya....!!! ///
//////////////////////////////////////////////////////////////
export default function MainNavbar() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Rajendra</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to="/"></Nav.Link> ini adalah Halaman Utamannya
              <Nav.Link as={Link} to="/ayamgeprek"></Nav.Link>
              <Nav.Link as={Link} to="/"></Nav.Link>
              <Nav.Link as={Link} to="/"></Nav.Link>
              <Nav.Link as={Link} to="/"></Nav.Link>
              <Nav.Link as={Link} to="/Home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Fitur">
                Fitur
              </Nav.Link>
              <Nav.Link as={Link} to="/Ongoing">
                Ongoing
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<HalamanUtama />} />
          <Route path="/" element={<Percobaan />} />
          <Route path="/ayamgeprek" element={<HalamanUtama />} />
          <Route path="/Home" element={<HalamanHome />} />
          <Route path="/Fitur" element={<HalamanFitur />} />
          <Route path="/Ongoing" element={<Percobaan />} />
        </Routes>
      </div>
    </Router>
  );
}
