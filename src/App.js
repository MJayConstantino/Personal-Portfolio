import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <div className="logo">Your Logo</div>
          <ul className="nav-links">
            <li><a href="#landing">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#screen1">Screen 1</a></li>
            <li><a href="#screen2">Screen 2</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="landing" className="screen">
          <h1>Welcome to My Portfolio</h1>
          <p>This is a landing screen for your personal portfolio.</p>
        </section>

        <section id="about" className="screen">
          <h2>About Me</h2>
          <p>Here you can provide information about yourself, your background, and your interests.</p>
        </section>

        <section id="projects" className="screen">
          <h2>Projects</h2>
          <p>Display your projects here, with descriptions, images, and links.</p>
        </section>

        <section id="screen1" className="screen">
          <h2>Screen 1</h2>
          <p>This is an additional screen that you can use for any other content you want to showcase.</p>
        </section>

        <section id="screen2" className="screen">
          <h2>Screen 2</h2>
          <p>This is another additional screen for your portfolio.</p>
        </section>
      </main>

      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}

export default App;