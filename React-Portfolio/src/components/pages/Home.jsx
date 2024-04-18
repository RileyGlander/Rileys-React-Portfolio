import React from "react" 
// import IMG from '../assets/';


export default function Home() {
    return (
      <div className="home">
          <h1>Hey there, my name is Riley</h1>
            {/* <img src="../assets/IMG_2897.JPG" alt="My high school senior picture" /> */}
            <img className="photo" src="http://localhost:3000/src/assets/IMG_2897.JPG" alt="My high school senior picture"/>
            
              <div className="aboutMe">
                    <p>I'm a Full Stack Flex Developer who graduated the University of Minnesota's online bootcamp.</p> 
                      <p>You can usually find me on my computer learning more about the languages and skills needed to be a full stack flex web developer.</p>
                        <p>Outside of programming, I enjoy activities such as gaming, which has allowed me to develop skills such as strategic thinking, problem solving and teamwork.</p>              
               </div>
               
      </div>    
        );

        
  }
  