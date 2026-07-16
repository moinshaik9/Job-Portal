import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Jobs from "./pages/Jobs/Jobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import CandidateDashboard from "./pages/CandidateDashboard/CandidateDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard/RecruiterDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
      <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
