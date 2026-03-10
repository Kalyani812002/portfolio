import React from "react";
import "./App.css";

function App() {

  const projects = [
    {
      name: "React Typing App",
      description: "Typing speed test application built using React.",
      github: "https://github.com/yourusername/react-typing-app",
      live: "https://typing-app.vercel.app"
    },
    {
      name: "React Master Quiz App",
      description: "Interactive quiz application with score tracking.",
      github: "https://github.com/Kalyani812002/quiz-master-react.git",
      live: "https://tubular-travesseiro-7d01e6.netlify.app/"
    },
    {
      name: "Fitness Tracker App",
      description: "Track daily workouts and activities using React.",
      github: "https://github.com/Kalyani812002/fitness-tracker",
      live: "https://fitness-tracker-eta-one.vercel.app/"
    },
    {
      name: "Admin Dashboard",
      description: "Admin dashboard UI with charts and analytics.",
      github: "https://github.com/Kalyani812002/dashboard",
      live: " https://dashboard-lac-ten-84.vercel.app"
    },
    {
      name: "Health Checker App",
      description: "Health monitoring application to check BMI and health status.",
      github: "https://github.com/Kalyani812002/frontend-HealthCheckerWebsite",
      live: "https://health-checker-website.vercel.app/"
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio website built with React.",
      github: "https://github.com/yourusername/portfolio",
      live: "https://portfolio.vercel.app"
    },

    {
      name: "React Team Chat App",
      description: "Team chat application interface built with React.",
      github: "https://github.com/Kalyani812002/team-chat-apps.git",
      live: "https://team-chat-apps.vercel.app/"
    }
  ];

  return (
    <div className="container">

      <header>
        <h1>Kalyani Nandlal Kadam</h1>
        <p>Frontend / React Developer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am a Frontend Developer skilled in HTML, CSS, JavaScript and React.
          I completed my M.Sc Computer Science from SNDT Women's University.
          I enjoy building modern web applications and responsive UI.
        </p>
      </section>

      <section>
        <h2>Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Angular</span>
          <span>Java</span>
          <span>SQL</span>
          <span>MongoDB</span>
        </div>

      </section>

      <section>
        <h2>Projects</h2>

        <div className="project-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="buttons">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>

            </div>
          ))}

        </div>

      </section>

      <section>
        <h2>Contact</h2>

        <p>Email: kadamkalyani84@gmail.com</p>
        <p>Phone: 9021063577</p>
        <p>LinkedIn: https://www.linkedin.com/in/kalyani-kadam52187026b </p>

      </section>

      <footer>
        <p>© 2026 Kalyani Kadam</p>
      </footer>

    </div>
  );
}

export default App;