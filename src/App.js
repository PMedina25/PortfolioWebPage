import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import bootstrap components
import { Container } from 'react-bootstrap';

// Import pages
import NavBar from './components/common/Navbar';
import Home from './components/Home';
import AboutMe from './components/about-me/AboutMe';
import Skills from './pages/Skills';
import Organizations from './pages/Organizations';
import Projects from './components/projects/Projects';
import AllProjects from './pages/AllProjects';
import Footer from './pages/Footer';


function App() {
  return (
    <>
      <Router>
        <Route path="/" exact>
          <NavBar />
          <Container>
            <Home />
            <AboutMe />
            <Organizations />
            <Projects />
          </Container>
        </Route>
        <Route path="/projects" component={AllProjects} exact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
