import React from "react"
// import IMG from '../assets/';


export default function Home() {
  return (
    <div className="home">
      <h1>Hey there, my name is Riley</h1>
      <img className="photo" src="http://localhost:3000/src/assets/IMG_2897.JPG" alt="My high school senior picture" />

      <div className="aboutMe">
        <p>I'm a Full Stack Flex Developer who graduated the University of Minnesota's online bootcamp.</p>
        <p>You can usually find me on my computer learning more about the languages and skills needed to be a full stack flex web developer.</p>
        <p>Outside of programming, I enjoy activities such as gaming, which has allowed me to develop skills such as strategic thinking, problem solving and teamwork.</p>

        <div className="skills">
            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <i className="bi-terminal m-auto text-primary" />
                <h2> Skills</h2>
                <p>Experienced web developer creating websites and software. Certified in Full Stack Web Development from the University of Minnesota Coding Boot Camp. </p>
                <p>Skilled in developing server-side logic to ensure high performance and reliability. Known for hard working, collaboration, and consistency.</p>
              </div>
              </div>
                
                <div className="experience">

                <h2>Experience</h2>
                  <p>
                    Junior Web Developer 2023-Present
                  </p>
                    </div>
                  
                  <div className="education">

                    <h3>EDUCATION</h3>
                      <p>
                         Certificate, Full Stack Web Development – University of Minnesota, MN
                      </p>
                      </div>
                      <div class="container">
                      <div class="full-width-border">

                      <footer className="footer">
                      <div className="contact">
                      <h3>Contact</h3>

                          <p>Phone: (612) - 295 - 9829 | Email: rileyglander@email.com | Hopkins, MN, 55343
                          LinkedIn: /RileyGlander | Portfolio: RileyGlander.github.com | GitHub: /RileyGlander</p>
                      </div>
                      </footer>
                      </div>
                      </div>
                  
                
            
          </div>
        </div>
    

  );


}
