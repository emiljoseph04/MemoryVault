import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CapsuleDetail() {
  const { id } = useParams();
  const [capsule, setCapsule] = useState(null);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const storedCapsules = JSON.parse(localStorage.getItem("capsules")) || [];
    const foundCapsule = storedCapsules.find((c) => c.id === Number(id));
    setCapsule(foundCapsule);

    if (foundCapsule) {
      const unlock = new Date(foundCapsule.unlockDate);
      const now = new Date();
      setIsLocked(unlock > now);
    }
  }, [id]);

  if (!capsule) {
    return (
      <div className="container mt-4 text-center">
        <h2 style={{ color: "#6f42c1", fontWeight: "bold" }}>Capsule not found!</h2>
        <Link
          to="/dashboard"
          className="btn mt-3"
          style={{ backgroundColor: "#6f42c1", color: "white", borderRadius: "20px" }}
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 style={{ color: "#6f42c1", fontWeight: "bold" }}>{capsule.title}</h2>
      <p style={{ color: "#4b0082", fontWeight: "500" }}>
        <strong>Unlock Date:</strong> {capsule.unlockDate} <br />
        <strong>Status:</strong> {isLocked ? "🔒 Locked" : "✅ Unlocked"}
      </p>

      {isLocked ? (
        <div
          className="p-3 rounded-4"
          style={{ backgroundColor: "#f9f5ff", border: "2px solid #6f42c1" }}
        >
          This capsule is still locked. You can open it on {capsule.unlockDate}.
        </div>
      ) : (
        <div
          className="card mt-3 shadow-sm rounded-4"
          style={{ backgroundColor: "#f9f5ff", border: "2px solid #6f42c1" }}
        >
          <div className="card-body text-center">
            <p style={{ color: "#4b0082" }}>{capsule.description}</p>

            {capsule.mediaLink && (
              <div className="mt-3">
                {capsule.mediaLink.match(/\.(jpeg|jpg|gif|png)$/i) ? (
                  <img
                    src={capsule.mediaLink}
                    alt="Capsule Media"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{ maxHeight: "300px" }}
                  />
                ) : (
                  <iframe
                    src={capsule.mediaLink}
                    title="Capsule Video"
                    width="100%"
                    height="300"
                    className="rounded-3 shadow-sm"
                    style={{ border: "none" }}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <Link
        to="/dashboard"
        className="btn mt-3"
        style={{ backgroundColor: "#6f42c1", color: "white", borderRadius: "20px" }}
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default CapsuleDetail;
