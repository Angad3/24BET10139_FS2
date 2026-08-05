function Navbar({ user, enrolledCount }) {
  return (
    <>
      <h2>Welcome, {user.name}</h2>
      <p>Program: {user.program}</p>
      <h3>Enrolled: {enrolledCount} courses</h3>
      <hr />
    </>
  );
}

export default Navbar;