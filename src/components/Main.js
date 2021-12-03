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
                      <img className="img-thumbnail md-margin-bottom-10 " src="../images/Selfie.png" alt="Picture of myself" style={{width:"25rem", height:"29rem"}}/>
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
 
  <p className="black-text text-center w-responsive mx-auto mb-5 info">This section displays a variety of projects I have worked on using JavaScript, ReactJS, SQL, Python and many other technologies !</p>

  <div className="container container-fluid">

  <div className="row">


    <div className="col-md-12 mb-4">
      <div className="card card-image" style={{backgroundColor: "var(--thirdColor)"}} >
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
      <div className="card card-image" style={{backgroundColor: "var(--thirdColor)"}}>
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
      <div className="card card-image" style={{backgroundColor: "var(--thirdColor)"}}>
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
      <div className="card card-image" style={{backgroundColor: "var(--thirdColor)"}}>
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
      <div className="card card-image" style={{backgroundColor: "var(--thirdColor)"}}>
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
      <div className="card card-image" style={{backgroundColor: "var(--thirdColor)"}}>
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
    </>
  )
}

export default MainPage;