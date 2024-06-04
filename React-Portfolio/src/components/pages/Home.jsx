import React from "react"
// import IMG from '../assets/';


export default function Home() {
  return (
    <main className="home">
      <section id="home">
          <h1 className="intro">
            {/* Hey there, my name is Riley */}
          </h1>
          <img className="photo" src="http://localhost:3000/src/assets/IMG_2897.png" alt="My high school senior picture" />
        </section>
        <section className="aboutMe-container">
        <div class="aboutMe">

          <p>I'm a Full Stack Flex Developer who graduated the University of Minnesota's online bootcamp.</p>
          <p>You can usually find me on my computer learning more about the languages and skills needed to be a full stack flex web developer.</p>
          <p>Outside of programming, I enjoy activities such as gaming, which has allowed me to develop skills such as strategic thinking, problem solving and teamwork.</p>
          </div>
        </section>
        
        <section className="skills-container">
          <div class="skills">
            <h2> Skills</h2>
            <p>Experienced web developer creating websites and software. Certified in Full Stack Web Development from the University of Minnesota Coding Boot Camp. </p>
            <p>Skilled in developing server-side logic to ensure high performance and reliability. Known for hard working, collaboration, and consistency.</p>
        </div>
        </section>
        <section className="experience-container">
          <div class="experience">
            <h2>Experience</h2>
               <p>Junior Web Developer 2023-Present</p>
          </div>
        </section>
            <section className="education-container">
            <div class="education">
               <h3>EDUCATION</h3>
                  <p> Certificate, Full Stack Web Development – University of Minnesota, MN</p>
            </div>
        </section>
      </main>
                      
    

  );


}
