const CreatePost = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleinputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleinputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleinputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleinputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
