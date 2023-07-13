import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreateTask from "./pages/CreateTask";
import Navigation from "./components/Navigation";
import UpdatePage from "./pages/UpdatePage";
import { AppWrapper } from "./styles/styled";
import FinishedTasks from "./pages/FinishedTasks";

function App() {
  return (
    <AppWrapper>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/post" element={<CreateTask />} />
        <Route path="/finished" element={<FinishedTasks />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
