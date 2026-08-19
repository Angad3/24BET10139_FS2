import { StudentProvider } from "./StudentContext";

import Header from "./components/Header";
import ProfilePanel from "./components/ProfilePanel";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <StudentProvider>

      <Header />

      <ProfilePanel />

      <TaskManager />

    </StudentProvider>
  );
}

export default App;