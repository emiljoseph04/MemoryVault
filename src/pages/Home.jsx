import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero d-flex align-items-center justify-content-center text-center text-light">
        <div className="hero-content">
          <h1 className="display-3 fw-bold mb-3">Welcome to MemoryVault</h1>
          <p className="mb-4 text-dark">
            Capture your today, treasure it for tomorrow.  
            Create digital time capsules and relive your favorite memories in the future.
          </p>
          <div>
            <Link to="/createcapsule" className="btn btn-light btn-lg mx-2 px-4">
              Create Capsule
            </Link>
            <Link to="/dashboard" className="btn btn-outline-light btn-lg mx-2 px-4">
              View Capsules
            </Link>
          </div>
        </div>
      </section>

      <section className="info-section container my-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold text-primary">Digital Time Capsule</h2>
            <p className="lead mt-3">
              A digital time capsule is your personal space to preserve the
              special memories, thoughts, and emotions of today — to be opened
              in the future. With MemoryVault, you can safely store digital
              messages, images, and reflections that remind you of your journey
              through life. It’s like writing a letter to your future self.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2906/2906898.png"
              alt="Digital Capsule"
              className="img-fluid capsule-img"
            />
          </div>
        </div>

        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h2 className="fw-bold text-primary">Capture the Moment</h2>
            <p className="lead mt-3">
              Every memory is precious — a piece of who we are. By capturing
              moments in your time capsule, you preserve emotions, lessons, and
              milestones that define you. MemoryVault lets you pause in time,
              reflect on your story, and relive the feelings that made life
              meaningful. Because memories are timeless treasures.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
              alt="Capture Memories"
              className="img-fluid capsule-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
