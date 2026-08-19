import { useUser } from "../hooks/useUser";

function Header() {
  const student = useUser();

  return (
    <header>
      <h1>STUDYHUB</h1>

      <p>
        Welcome, {student.name} ({student.year})
      </p>
    </header>
  );
}

export default Header;