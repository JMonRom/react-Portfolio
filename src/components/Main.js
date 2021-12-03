import React from 'react';


const MainPage = () => {
  return (
    <>
    <div className="container bootstrap snippets bootdey" style={{marginBottom: "14rem;"}} id="aboutMe">
  <div className="profile card" >
      <div className="profile-body">
          <div className="profile-bio">
              <div className="row">
                  <div className="col-md-5 text-center" >
                      <img className="img-thumbnail md-margin-bottom-10 " src="./assets/images/Selfie.png" alt="Picture of myself" style={{width:"25rem", height:"29rem"}}/>
                  </div>
                  <div className="col-md-7" >
                      <h2>Jonathan Montes Romero</h2>
                      <span><strong>Job:</strong> Web Developer</span>
                      <span><strong>Position:</strong> </span>
                      <hr/>
                      <p>Welcome to my page, my name is <strong>Jonathan Montes Romero</strong> and I am excited for you to join my coding journey. I was born in Mexico, but have lived in Orange County, CA for about 21 years. I went to University of California, Santa Barbara for my Bachelors in Sociology and minor in Education. I decided to expand my skill sets by chalenging myself to learn about web development through the UCI coding bootcamp. .</p>
                      <p>The purpose of this site is to display my knowledge, experience and progress as I continue to learn how to program. I have deployed a few projects to help me gain an understanding of coding which you can browse on this page. I will continue to update the page as more projects are completed.</p>
                  </div>
              </div>    
          </div>
    </div>
  </div>
</div>                                                      
<hr className="mt-5"/>

<section id="myProjects" className="text-center my-5">


  <h2 className="h1-responsive font-weight-bold text-center my-5">A COLLECTION OF MY PROJECTS</h2>
 
  <p className="black-text text-center w-responsive mx-auto mb-5">This section displays a variety of projects I have worked on using JavaScript, ReactJS, SQL, Python and many other technologies !</p>

  <div className="container container-fluid">

  <div className="row">


    <div className="col-md-12 mb-4">
      <div className="card card-image" style={{backgroundColor: "var(--colorFour)"}} >
        <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
          <div>
            <h3 className="purple-text">
              <i className="fas fa-plane"></i>
              <strong> First Group Project</strong>
            </h3>
            <h3 className="py-3 font-weight-bold">
              <strong>Animal Adoption</strong>
            </h3>
            <p className="pb-3">My first group project consisted of four people colloborating on providing a user with a site that will allow them to browse through a selection of animals sent back using an API and be able to fill out an adoption form.
            </p>
            <a className="btn btn-success btn-rounded btn-md" href="file:///Users/john/Desktop/BC/Playground%20UCI/AnimalAdoptions/index.html" style={{backgroundColor: "var(--colorFive);"}}><i className="fas fa-clone left"></i> VIEW PROJECT</a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-6 mb-md-0 mb-4 ">
      <div className="card card-image" style={{backgroundColor: "var(--colorFour);"}}>
        <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
          <div>
            <h3 className="pink-text" >
              <i className="fas fa-chart-pie"></i>
              <strong> Express.js and Node.js Note Taker</strong>
            </h3>
            <h3 className="py-3 font-weight-bold">
              <strong>Note Taker</strong>
            </h3>
            <p className="pb-3">This site allows user to use a save note feature that will take in a string of notes and properly save them to refer back to at a later point.
            </p>
            <a className="btn btn-success btn-rounded btn-md" style={{backgroundColor: "var(--colorFive);"}}href="https://mighty-beyond-43329.herokuapp.com/"><i className="fas fa-clone left"></i> VIEW PROJECT</a>
          </div>
        </div>
      </div>
    </div>
 
    <div className="col-md-6">
      <div className="card card-image" style={{backgroundColor: "var(--colorFive);"}}>
        <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
          <div>
            <h3 className="green-text">
              <i className="fas fa-eye"></i>
              <strong> JavaScript, HTML, and CSS Quiz</strong>
            </h3>
            <h3 className="py-3 font-weight-bold">
              <strong>Take a Quiz</strong>
            </h3>
            <p className="pb-3">This is a short quiz that uses JS to move through questions and allow for user input of score. 
            </p>
            <a className="btn btn-success btn-rounded btn-md" style={{backgroundColor: "var(--colorFive);"}}href="https://jmonrom.github.io/Quiz-Time/"><i className="fas fa-clone left"></i> VIEW PROJECT</a>
          </div>
        </div>
      </div>
    </div>
 
    <div className="col-md-6 mb-md-0 mb-4 mt-4">
      <div className="card card-image" style={{backgroundColor: "var(--colorFive);"}}>
        <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
          <div>
            <h3 className="pink-text">
              <i className="fas fa-chart-pie"></i>
              <strong> JavaScript, HTML, and CSS</strong>
            </h3>
            <h3 className="py-3 font-weight-bold">
              <strong>Random Password Generator</strong>
            </h3>
            <p className="pb-3">This site allows a user to put in some info from prompted questions to generate a secure and random password.
            </p>
            <a className="btn btn-success btn-rounded btn-md" style={{backgroundColor: "var(--colorFive);"}}href="https://jmonrom.github.io/Security-Password-Generator/"><i className="fas fa-clone left"></i> VIEW PROJECT</a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-6 mt-4">
      <div className="card card-image" style={{backgroundColor: "var(--colorFive);"}}>
        <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
          <div>
            <h3 className="green-text">
              <i className="fas fa-eye"></i>
              <strong> JS, JQuery HTML, and CSS</strong>
            </h3>
            <h3 className="py-3 font-weight-bold">
              <strong>Daily Planner</strong>
            </h3>
            <p className="pb-3">On this site the user is able to use an efficient daily planner to plan out their days and be provided with color coded past, present, future time slots. 
            </p>
            <a className="btn btn-success btn-rounded btn-md" style={{backgroundColor: "var(--colorFive);"}}href="https://jmonrom.github.io/daily-planner/"><i className="fas fa-clone left"></i> VIEW PROJECT</a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-12 mb-4 mt-4">
      <div className="card card-image" style={{backgroundColor: "var(--colorFive);"}}>
        <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
          <div>
            <h3 className="purple-text">
              <i className="fas fa-plane"></i>
              <strong> Second Group Project</strong>
            </h3>
            <h3 className="py-3 font-weight-bold">
              <strong>Waste No More</strong>
            </h3>
            <p className="pb-3">My second group project was aimed at creating a site that would allow a user to sign up for an account and be able to view many gardens within the area so that they can recieve information about a chosen garden.
            </p>
            <a className="btn btn-success btn-rounded btn-md" style={{backgroundColor: "var(--colorFive);"}}href="https://wastenomore.herokuapp.com/"><i className="fas fa-clone left"></i> VIEW PROJECT</a>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
</section>

<section>
<div className="container" >
  <div className="row display my-4">
  <div id="resume" >
    <h3>RESUME: </h3>
  <iframe className="socials" src="https://docs.google.com/gview?url=https://github.com/JMonRom/resume/raw/main/Resume_2021.pdf&embedded=true" width="500" height="600" ></iframe>
  </div>
</div>
</div>

<div className="container" id="contactMe">
<div className="row display my-4">
  <div className="col">
    <h3 className="project-headers" id="contact-me">Contact Me: </h3>

    <a href="mailto:jmontes8686@gmail.com" className="socials mx-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="var(--colorFour)" width="50" height="50" viewBox="0 0 24 24"><path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"/></svg>
    </a>

    <a href="https://www.linkedin.com/in/jonathan-montes-romero-07b1b6214/" className="socials mx-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="var(--colorFour)" width="50" height="50" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    </a>

    <a href="https://github.com/JMonRom" className="socials mx-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="var(--colorFour)" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    </a>

  </div>
</div>
</div>

  <hr className="mt-5"/>

  <div className="container">
  <footer>
    <h3>Made by Jonathan</h3>
    <p>
      &copy; 2021 Jonathan's Website, Inc.
    </p>
  </footer>
  </div>

  <button
        type="button"
        className="btn btn-light btn-floating btn-lg"
        id="btn-back-to-top"
  >
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--colorThree)" className="bi bi-arrow-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
  </svg>
</button>
</section> 
    </>
  )
}

export default MainPage;