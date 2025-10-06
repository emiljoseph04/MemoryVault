import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    const storedCapsules = JSON.parse(localStorage.getItem("capsules")) || [];
    setCapsules(storedCapsules);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this capsule?")) {
      const updatedCapsules = capsules.filter((c) => Number(c.id) !== Number(id));
      localStorage.setItem("capsules", JSON.stringify(updatedCapsules));
      setCapsules(updatedCapsules);
    }
  };

  const handleEdit = (capsule) => {
    localStorage.setItem("editingCapsule", JSON.stringify(capsule));

    window.location.href = "/createcapsule";
  };

  return (
    <div className="container my-5">
      <h2
        className="text-center mb-4"
        style={{ color: "#6f42c1", fontWeight: "bold" }}
      >
        My Time Capsules
      </h2>

      {capsules.length === 0 ? (
        <p className="text-center">
          No capsules found.{" "}
          <Link
            to="/createcapsule"
            style={{ color: "#6f42c1", textDecoration: "none" }}
          >
            Create one now!
          </Link>
        </p>
      ) : (
        <div className="row">
          {capsules.map((capsule) => {
            const isLocked = new Date(capsule.unlockDate) > new Date();

            return (
              <div className="col-md-4 mb-4" key={capsule.id}>
                <div
                  className="card h-100 shadow-sm border-0 rounded-4"
                  style={{
                    backgroundColor: "#f9f5ff"
                   
                  }}
                  
                >
                  <div className="card-body d-flex flex-column text-center">
                    <h5
                      className="card-title"
                      style={{ color: "#6f42c1", fontWeight: "bold" }}
                    >
                      {capsule.title}
                    </h5>
                    <p className="card-text">
                      <strong>Unlock Date:</strong> {capsule.unlockDate}
                      <br />
                      <span className="fw-semibold" style={{ color: "black" }}>
                        Status: {isLocked ? "Locked" : "Unlocked"}
                      </span>
                    </p>

                    <div className="mt-auto">
                      <Link
                        to={`/capsule/${capsule.id}`}
                        className="btn btn-sm me-2"
                        style={{
                          backgroundColor: "#6f42c1",
                          color: "white",
                          borderRadius: "20px",
                        }}
                      >
                        View
                      </Link>

                      <button
                        className="btn btn-sm me-2"
                        style={{
                          backgroundColor: "#d8c3ff",
                          color: "#4b0082",
                          borderRadius: "20px",
                        }}
                        onClick={() => handleEdit(capsule)}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(capsule.id)}
                        className="btn btn-sm btn-danger"
                        style={{ borderRadius: "20px" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
