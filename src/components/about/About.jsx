import React from 'react';
import '../about/about.css';
import Webdev from '../../assets/webdev.jpg'

const About = () => {
  return (
  
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Webdev} alt="Web Development" className="a-img" />
            </div>
        </div>

        <div className="a-right">
            <h1>About Me</h1>
            <p className="a-sub">
                Learning never stops.
            </p>
            <p className="a-desc">
                I'm a Computer Science student at CUNY - College of Staten Island, a graduate of NYC Tech Talent Pipeline's Fullstack Web Development Bootcamp, and an Android Development Student with CodePath.
                <br/><br/>
                I've built out projects solo with clients, but I'm no stranger to working with a team as well, be it through capstone group projects or internship experience.
            </p>

            <div className="exp">
                <div className="exp-texts">
                    <h4 className="exp-title">Experience:</h4>
                    <p className="exp-desc">
                    - MNDZ: Art Portfolio (Client: Kevin Mendez) <br/>
                    - Peloton Interactive: Digital Quality Assurance Automation Internship <br/>
                    - Retensa: Software Management Information Systems Associate
                    </p>
                </div>
            </div>

        </div>
    </div>

    );
};

export default About;
