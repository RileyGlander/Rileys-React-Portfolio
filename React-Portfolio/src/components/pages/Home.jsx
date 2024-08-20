import React from 'react';
import IMG from '../../assets/IMG_2897.png' 
import IMG1 from '../../assets/pexels-pixabay-209831.jpg' 
import IMG2 from '../../assets/pexels-fauxels-3184360.jpg' 
import IMG3 from '../../assets/pexels-nitin-arya-386173-1029141.jpg' 
import IMG4 from '../../assets/pexels-pixabay-531844.jpg'

export default function Home() {
  return (
    
    <div className="home">
      <section id="home" className="intro-section">
        <div className="intro-content">
          <div className="text-content">
            <h1 className="intro">Hey there, my name is Riley</h1>
            <p className="subintro">Full Stack Web Developer and Designer</p>
          </div>
          <img className="photo" src={IMG} alt="My high school senior picture" />
        </div>
      </section>
    
    <main className="page-wrapper">  
    <div className="container pt-4">
  <section className="technicalSkills" id="projects">
    <div className="content">
      <h2>Technical Skills</h2>
      <div className="skillsGrid">
        <p>
          Front End: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML5" title="HTML5"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS3" title="CSS3"/><br/>
          Back End: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" title="Express" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" title="React"/> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJS" title="NodeJS"/>
          Web APIs, Third Party APIs, Server Side API, OOP, ORM, MVC, Computer Science, NoSQL, PWA, MERN, State<br/>
          Applications: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" title="GitHub"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" title="NPM"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" title="VSCode"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg" alt="Insomnia" title="Insomnia"/> 
        </p>
      </div>  
    </div>
  </section>


      <section className="projects" id="projects">
        <h2>Portfolio</h2>
        
        <div className="project">
          <div className="project-text">
            <h3>Local Park Weather App |<a href="https://github.com/RileyGlander/local-park-weather-app"> LP Weather GitHub </a>| <a href="https://local-park-weather-app.netlify.app/">LP Weather Deployed</a></h3>
            <p>
              Summary: App that provides current weather forecast for dog parks nearby.<br/>
              Role: Front end<br/>
              Tools: HTML, CSS, JavaScript, API's, and CSS Framework
            </p>
          </div>
          <img className="projectImage" src={IMG1} alt="Local Park Weather App" />
        </div>

        <div className="project">
          <div className="project-text">
            <h3>Employee Tracker |<a href="https://github.com/RileyGlander/GroupProject2"> ET GitHub </a>| </h3>
            <p>
              Summary: App that allows employers to add and edit employee personal information.<br/>
              Role: Back end<br/>
              Tools: HTML, CSS, JavaScript, MySQL, Node, Insomnia
            </p>
          </div>
          <img className="projectImage" src={IMG2} alt="Employee Tracker" />
        </div>

        <div className="project">
          <div className="project-text">
            <h3>BookDoor | <a href="https://github.com/RileyGlander/BookDoor">BD GitHub </a>| <a href="https://bookdoor-g56t.onrender.com/">BD Deployed</a></h3>
            <p>
              Summary: App that allows users to trade books with other book lovers.<br/>
              Role: Back end<br/>
              Tools: HTML, CSS, JavaScript, React, GraphQL, Apollo Client/Server
            </p>
          </div>
          <img className="projectImage" src={IMG3} alt="BookDoor App" />
        </div>

        <div className="project">
          <div className="project-text">
            <h3>Express Note Taker |<a href="https://github.com/RileyGlander/Rileys-Express-Note-Taker"> ENT GitHub </a>| <a href="https://rileys-express-note-taker.onrender.com">ENT Deployed</a> </h3>
            <p>
                Summary: App that allows users to create, edit and delete notes.<br/>
                Role: Back end<br/>
                Tools: HTML, CSS, JavaScript, Express
            </p>
          </div>
          <img className="projectImage" src={IMG4} alt="" />
        </div>
      </section>
    </div>



    <section className="experience-container">
  <div className="experience">
    <h2 class="section-title">Experience</h2>
    <div className="experience-content">
      <div className="experience-item">
        <p>Freelance Web Developer 2023-Present</p>
        <ul>
          <li>Worked with clients to make impactful websites</li>
        </ul>
      </div>
      <div className="experience-item">
        <p>Handyman 2021-Present</p>
        <ul>
          <li>Work with freelance clients in outside work, personal assisting and home maintenance</li>
        </ul>
      </div>
    </div>
  </div>
</section>
      <section className="aboutMe-container">
         <div className="aboutMe">
         <h2 class="section-title"> About Me</h2>
          <p>I'm a Full Stack Flex Developer who graduated the University of Minnesota's online bootcamp.</p>
          <p>You can usually find me on my computer learning more about the languages and skills needed to be a full stack flex web developer.</p>
          <p>Outside of programming, I enjoy activities such as gaming, which has allowed me to develop skills such as strategic thinking, problem solving and teamwork.</p>
          </div>
        </section>
        
            <section className="education-container">
            <div className="education">
               <h2>EDUCATION</h2>
                  <p> Certificate, Full Stack Web Development - University of Minnesota, MN</p>
            </div>
        </section>
        
      </main>
      </div>              
    

  );


}
