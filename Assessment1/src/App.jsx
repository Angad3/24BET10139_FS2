import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./context/UserContext";

function App() {
  const user = {
    name: "Karan Mehta",
    email: "karan@gmail.com",
    program: "Web Development",
  };

  const [enrolledCount, setEnrolledCount] = useState(0);

  return (
    <UserContext.Provider value={user}>
      <h1>SKILLNEST - ONLINE LEARNING PLATFORM</h1>

      <Navbar user={user} enrolledCount={enrolledCount} />

      <Dashboard
        user={user}
        enrolledCount={enrolledCount}
        setEnrolledCount={setEnrolledCount}
      />
    </UserContext.Provider>
  );
}

export default App;