import React from 'react';
import './App.css';
import profilePicture from './assets/images/profile-picture.jpg';

function App() {
  return (
    <div className="app">
      <header>
        <nav className="navbar">
          <div className="logo">Your Logo</div>
          <ul className="nav-links">
            <li><a href="#landing">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="landing" className="screen">
          <div className="landing-content">
            <img src={profilePicture} alt="Profile" className="profile-picture" />
            <h1>Hello, My Name is Michael Constantino</h1>
            <div className="button-group">
              <button className="btn">Download CV</button>
              <button className="btn">My Works</button>
            </div>
          </div>
        </section>

        <section id="skills" className="screen">
          <h2>My Skills</h2>
          <div className="skill-container">
            <div className="skill-box">
              <h3>Full-Stack Developer</h3>
              {/* Add your skill description here */}
            </div>
            <div className="skill-box">
              <h3>Mobile App Development</h3>
              {/* Add your skill description here */}
            </div>
            <div className="skill-box">
              <h3>Web Developement</h3>
              {/* Add your skill description here */}
            </div>
            {/* Add more skill boxes as needed */}
          </div>
        </section>

        <section id="education" className="screen">
          <h2>Educational Journey</h2>
          {/* Add your education content here */}
        </section>

        <section id="projects" className="screen">
          <h2>Projects</h2>
          {/* Display your projects here, with descriptions, images, and links */}
        </section>
      </main>

      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}

export default App;