import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project3.png";
import project3 from "../../assets/images/project2.png";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are some projects that I have learned and done
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={project3} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">My Portfolio</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Next App</span>
                  <img src={project1} alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">NEXT-JS 13</span>

                  <span className="card-detail-badge">TAILWIND CSS</span>
                  {/* <span className="card-detail-badge">ANTD</span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Movie Database Page</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/TrannThang/movie-nextjs13"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img src={project2} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Nextjs13</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ecommerce admin page</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/TrannThang/nextjs13_action"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
