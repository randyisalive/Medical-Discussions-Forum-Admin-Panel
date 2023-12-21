function Navbar() {
  return (
    <>
      <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
        <div className="d-flex">
          <h3>Admin Panel</h3>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-danger">Logout</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
