import React, { useState } from "react";

const MovieCRUD = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(), // Menggunakan timestamp sebagai ID unik
      title,
      overview,
      poster_path: posterPath,
    };
    addMovie(newMovie);
    // Reset form setelah menambah film
    setTitle("");
    setOverview("");
    setPosterPath("");
  };

  return (
    <div className="container mt-5">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Image (TMDB URL)</label>
          <input
            type="text"
            className="form-control"
            value={posterPath}
            onChange={(e) => setPosterPath(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Overview</label>
          <textarea
            className="form-control"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default MovieCRUD;
