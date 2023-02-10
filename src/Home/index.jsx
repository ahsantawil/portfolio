import React from 'react';
import IconsHome from '../images/atomic.png';
import CV from '../other/CV Ahsan Ta’wil.pdf';

export const Home = () => {
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <img src={IconsHome} width={50} height={50} alt="images" />
            <span className="fs-4">Ahsan Tawil</span>
            </a>
        </header>

        <main>
            <h1>Who is Ahsan Tawil?</h1>
            <p className="fs-5 col-md-12">
                Ahsan is a man who likes the world of technology and programming.
                I've been through a lot of things that make it a valuable experience.<br></br>
                I work for a PMA company (Foreign Capital Company) engaged in electricity with kWh meter and AMR modem products that we supply to PLN (State Electricity Company). <br></br>
                Now, apart from working in this company. I also work on several projects as a freelancer to build WebApps, Web Development, and support applications. <br></br>
                With concentration as frontend and backend in web development. And also, I am very interested in Mobile programming, Iot technology and Telecommunication
            </p>

            <div className="mb-5">
                <a href={CV} className="btn btn-primary btn-lg px-4">Get CV</a>
            </div>

            <hr className="col-3 col-md-2 mb-5" />

            <div className="row g-5">
            <div className="col-md-6">
                <h2>Starter projects</h2>
                <p>Ready and available to run projects and build the apps of your dreams?</p>
                <ul className="icon-list ps-0">
                    <li className="d-flex align-items-start mb-1">
                        <button className='btn btn-primary'> Contact Me</button>
                    </li>
                </ul>
            </div>

            <div className="col-md-6">
                <h2>Guides</h2>
                <p>You can search for some of the articles you need related to technology and other articles....</p>
                <ul className="icon-list ps-0">
                <li className="d-flex align-items-start mb-1"><a href="../getting-started/introduction/">how to using npm guide</a></li>
                <li className="d-flex align-items-start mb-1"><a href="../getting-started/webpack/">GIT and GITHUB guide</a></li>
                <li className="d-flex align-items-start mb-1"><a href="../getting-started/parcel/">ReactJs and Nodejs guide</a></li>
                <li className="d-flex align-items-start mb-1"><a href="../getting-started/vite/">How to build farm guide</a></li>
                <li className="d-flex align-items-start mb-1"><a href="../getting-started/contribute/">Contributing to my blog</a></li>
                </ul>
            </div>
            </div>
        </main>
        <footer className="pt-5 my-5 text-muted border-top">
            By ahsantawil &middot; &copy; 2023
        </footer>
    </div>
  )
}
