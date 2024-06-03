import React from "react"
// import IMG from '../assets/';


export default function Home() {
  return (
    <main className="home">
      <section id="home">
        <h1>Hey there, my name is Riley</h1>
        <img className="photo" src="http://localhost:3000/src/assets/IMG_2897.JPG" alt="My high school senior picture" />
      </section>
      <section className="aboutMe">
        <p>I'm a Full Stack Flex Developer who graduated the University of Minnesota's online bootcamp.</p>
        <p>You can usually find me on my computer learning more about the languages and skills needed to be a full stack flex web developer.</p>
        <p>Outside of programming, I enjoy activities such as gaming, which has allowed me to develop skills such as strategic thinking, problem solving and teamwork.</p>
      </section>
      <section className="skills">
        <h2> Skills</h2>
        <p>Experienced web developer creating websites and software. Certified in Full Stack Web Development from the University of Minnesota Coding Boot Camp. </p>
        <p>Skilled in developing server-side logic to ensure high performance and reliability. Known for hard working, collaboration, and consistency.</p>
      </section>
      <section className="experience">
          <h2>Experience</h2>
             <p>Junior Web Developer 2023-Present</p>
          </section>
            <section className="education">
               <h3>EDUCATION</h3>
                      <p> Certificate, Full Stack Web Development – University of Minnesota, MN</p>
            </section>
      </main>
                      
    

  );


}
