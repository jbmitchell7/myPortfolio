import React from 'react';
import './CaseStudy.scss';
import { Container, Row, Col } from 'react-bootstrap';

const CaseStudy = () => (
  <div id="caseStudy" className='section'>
    <h1 className='section-header'>Case Study</h1>
    <Container className='case-study-container'>
      <Row>
        <Col xxl={4}>
          <h4>Project Overview</h4>
          <p>
            myFlix is a web app developed on the MERN
            Stack that shows data about movies. It allows
            users to register for an account and search
            through the list of movies for info on the
            director and genre, as well as add and
            remove movies from their list of favorites.
          </p>
          <h4>Tools, Skills, and Methodologies</h4>
          <p>
            myFlix was developed as part of my Full Stack
            course with CareerFoundry . The goal of this
            project was to build how a full front end and
            back end of a project completely from scratch.
          </p>
          <ul>
            <li>
              Custom-built REST API hosted on Mongo Atlas
            </li>
            <li>
              Express and Node
            </li>
            <li>
              React and Redux
            </li>
          </ul>
          <h4>Process</h4>
          <ul>
            <li>
              The first step was building the back end of the application by creating the API with Node and Express
            </li>
            <li>
              Movie data was then uploaded to Mongo and connected to the application to give the API calls data to
              access
            </li>
            <li>
              Once the back end was done, the client side was created on React to allow users to view and interact
              with the movie data
            </li>
          </ul>
        </Col>
        <Col xxl={4}>
          <img src="img/projects/myflix.png" alt="project screenshot" className='case-study-img' />
          <h4>Challenges and Goals</h4>
          <ul>
            <h5>What Went Well</h5>
            <li>
              I think the front end visuals worked well. I was able to
              reproduced exactly what I envisioned.
            </li>
            <li>
              I was able to reuse components that for the movie
              cards and greatly reduced the amount of code I
              needed to write.
            </li>
            <li>
              I think that navigation turned out very well, and it is
              incredibly difficult for a user to make a mistake with it,
              especially in login and registration
            </li>
          </ul>
          <ul>
            <h5>What Didn't</h5>
            <li>
              I think that my setup of how a specific user's data was
              accessed could've gone better
            </li>
            <li>
              The API was setup to take a username when a user ID
              would've worked much better
            </li>
            <li>
              I would've like to add more movies to the database, but
              the process was slow and ultimately unnecessary for what
              the project required.
            </li>
            <li>
              Adding and removing favorites had many issues which
              were partially tied to the API setup mentioned above
            </li>
          </ul>
          <h4>Conclusions</h4>
          <ul>
            <li>
              Overall, I think that this project went really well considering both
              front and back end are built completely from scratch.
            </li>
            <li>
              Future additions that could be included are more movie data as
              well as the ability to search by more than just the movie title.
            </li>
            <li>
              Another potential change could be moving from my own API to the
              TMDB API where I would immediately have access to much more
              movie information.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>

  </div>
);

export default CaseStudy;
