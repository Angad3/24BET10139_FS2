import { useUser } from "../hooks/useUser";

function ProfilePanel() {
  const student = useUser();

  return (
    <section>
      <h2>Student Details</h2>

      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Year: {student.year}</p>
    </section>
  );
}

export default ProfilePanel;