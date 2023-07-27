import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import { About, Skills, Projects, Contact } from '../TabContent';

const MenuTabs = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="about">
      <Nav variant="pills" className="flex-row mb-5">
        <Nav.Item>
          <Nav.Link eventKey="about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="about">
          <About />
        </Tab.Pane>
        <Tab.Pane eventKey="projects">
          <Projects />
        </Tab.Pane>
        <Tab.Pane eventKey="skills">
          <Skills />
        </Tab.Pane>
        <Tab.Pane eventKey="contact">
          <Contact />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  )
}

export default MenuTabs