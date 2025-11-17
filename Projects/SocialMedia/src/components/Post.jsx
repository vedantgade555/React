const Post = () => {
  return (
    <div className="card mb-4 shadow-sm" style={{ width: "100%" }}>
      {/* Post Header */}
      <div className="card-header d-flex align-items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="rounded-circle me-2"
          width="40"
          height="40"
        />
        <strong>Vedant Gade</strong>
      </div>

      {/* Post Image */}
      <img
        src="https://via.placeholder.com/600x300"
        className="card-img-top"
        alt="post"
      />

      {/* Post Body */}
      <div className="card-body">
        <h5 className="card-title">Awesome Day!</h5>
        <p className="card-text">
          Enjoying coding and building my Kshtriya social media app 😎🔥
        </p>

        <button className="btn btn-outline-primary me-2">Like</button>
        <button className="btn btn-outline-secondary me-2">Comment</button>
        <button className="btn btn-outline-success">Share</button>
      </div>
    </div>
  );
};

export default Post;
