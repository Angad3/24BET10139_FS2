function StudentProfileProps({ user }) {
  return (
    <>
      <h3>Student Details</h3>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Program: {user.program}</p>
    </>
  );
}

export default StudentProfileProps;