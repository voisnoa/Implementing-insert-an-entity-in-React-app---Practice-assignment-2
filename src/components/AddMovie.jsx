import "./AddMovie.css";

const AddMovie = () => { 

  return (
    <div className="add-movie">
      <h2 className="Title">Add a New Book</h2>
      <form>
        <label>Title:</label>
        <input type="text" name="title" required />

        <label>Director:</label>
        <input type="text" name="Director" required />

        <label>Genre:</label>
        <select name="genre" required>
        <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>


        <label>Release Year:</label>
        <input type="number" name="releaseyear" required />

        <label>Synopsis:</label>
        <textarea type="url" name="cover" required></textarea>

        <label>Poster Image URL:</label>
        <input type="url" name="Poster Image URL" required />

        <button type="submit">Submit</button>
        <button type="Cancel">Cancel</button>

      </form>

    </div>
  );
};

export default AddMovie;