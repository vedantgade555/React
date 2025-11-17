const CreatePost = () => {
  return (
    <div className="card p-3 shadow-sm mb-4">
      <h5 className="mb-3">Create Post</h5>

      <form>
        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">
            What's on your mind?
          </label>
          <textarea
            className="form-control"
            id="postContent"
            rows="3"
            placeholder="Share your thoughts..."
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="postImage" className="form-label">Add Image</label>
          <input
            type="file"
            className="form-control"
            id="postImage"
            accept="image/*"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
