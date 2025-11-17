const Sidebar = ({ selectedTab ,setSelectedTab}) => {

    const handleOnClick = (tabName) =>{
        setSelectedTab(tabName);
    }

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "260px", minHeight: "100vh" }}
    >
      {/* Logo */}
      <a
        href="/"
        className="d-flex align-items-center mb-4 text-white text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="40"
          aria-hidden="true"
        >
          <use xlinkHref="#people-circle"></use>
        </svg>
        <span className="fs-3 fw-bold">Kshtriya</span>
      </a>

      <ul className="nav nav-pills flex-column mb-auto">

        {/* Home */}
        <li className="nav-item" onClick={()=>{handleOnClick("Home")}}>
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "Home" ? "active" : ""}`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>

        {/* Create Post */}
        <li onClick={()=>{handleOnClick("Create Post")}}>
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "Create Post" ? "active" : ""}`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people"></use>
            </svg>
            Create Post
          </a>
        </li>

        {/* Messages */}
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#chat"></use>
            </svg>
            Messages
          </a>
        </li>

        {/* Notifications */}
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#bell"></use>
            </svg>
            Notifications
          </a>
        </li>

        {/* Photos */}
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#image"></use>
            </svg>
            Photos
          </a>
        </li>

        {/* Explore */}
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#gear"></use>
            </svg>
            Explore
          </a>
        </li>
      </ul>

      <hr />

      {/* User Profile Dropdown */}
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Vedant</strong>
        </a>

        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Saved Posts</a></li>
          <li><a className="dropdown-item" href="#">Create Post</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
