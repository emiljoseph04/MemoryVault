import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCapsule() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [unlockDate, setUnlockDate] = useState("");
  const [mediaLink, setMediaLink] = useState("");
  const [capsules, setCapsules] = useState([]);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedCapsules = JSON.parse(localStorage.getItem("capsules")) || [];
    setCapsules(storedCapsules);

    const editingCapsule = JSON.parse(localStorage.getItem("editingCapsule"));
    if (editingCapsule) {
      setEditId(editingCapsule.id);
      setTitle(editingCapsule.title);
      setDescription(editingCapsule.description);
      setUnlockDate(editingCapsule.unlockDate);
      setMediaLink(editingCapsule.mediaLink || "");
    }
  }, []);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setUnlockDate("");
    setMediaLink("");
    setEditId(null);
    localStorage.removeItem("editingCapsule");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCapsule = {
      id: editId || Date.now(),
      title,
      description,
      unlockDate,
      mediaLink,
    };

    let updatedCapsules;
    if (editId) {
      updatedCapsules = capsules.map((c) => (c.id === editId ? newCapsule : c));
      setMessage("Capsule updated successfully!");
    } else {
      updatedCapsules = [...capsules, newCapsule];
      setMessage("Capsule created successfully!");
    }

    localStorage.setItem("capsules", JSON.stringify(updatedCapsules));
    setCapsules(updatedCapsules);
    resetForm();
  };

  return (
    <div className="container my-5 p-4 rounded-4 shadow" style={{ backgroundColor: "#f9f5ff" }}>
      <h2 className="text-center mb-4" style={{ color: "#6f42c1", fontWeight: "bold" }}>
        {editId ? "Edit Capsule" : "Create Your Digital Time Capsule"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#6f42c1" }}>Title</label>
          <input
            type="text"
            className="form-control border-2"
            style={{ borderColor: "#6f42c1" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#6f42c1" }}>Description / Message</label>
          <textarea
            className="form-control border-2"
            rows="4"
            style={{ borderColor: "#6f42c1" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#6f42c1" }}>Add Photo / Video Link</label>
          <input
            type="url"
            className="form-control border-2"
            style={{ borderColor: "#6f42c1" }}
            value={mediaLink}
            onChange={(e) => setMediaLink(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#6f42c1" }}>Unlock Date</label>
          <input
            type="date"
            className="form-control border-2"
            style={{ borderColor: "#6f42c1" }}
            value={unlockDate}
            onChange={(e) => setUnlockDate(e.target.value)}
            required
          />
        </div>

        <div className="text-center d-flex flex-column flex-sm-row justify-content-center gap-2">
          <button
            type="submit"
            className="btn px-4 py-2 fw-semibold"
            style={{
              backgroundColor: "#6f42c1",
              color: "white",
              borderRadius: "25px",
              border: "none",
            }}
          >
            {editId ? "Update Capsule" : "Save Capsule"}
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="btn px-4 py-2 fw-semibold"
            style={{
              backgroundColor: "#d8c3ff",
              color: "#4b0082",
              borderRadius: "25px",
              border: "none",
            }}
          >
            Clear
          </button>
        </div>
      </form>

      {message && (
        <p className="text-center mt-3 fw-semibold" style={{ color: "#6f42c1" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default CreateCapsule;
