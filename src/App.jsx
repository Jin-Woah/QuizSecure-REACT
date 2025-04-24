// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/student/StudentDashboard";
import DisclaimerPage from "./pages/student/DisclaimerPage";
import FaceScanPage from "./pages/student/FaceScanPage";
import QuizPage from "./pages/student/QuizPage";
import ScoreSummaryPage from "./pages/student/ScoreSummaryPage";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import CreateQuizPage from "./pages/teacher/CreateQuizPage";
import QuestionManagementPage from "./pages/teacher/QuestionManagementPage";
import StudentLogsPage from './pages/teacher/StudentLogsPage';
import QuestionManagementLandingPage from './pages/teacher/QuestionManagementLandingPage';
import StudentLogTimeLinePage from './pages/teacher/StudentLogTimeLinePage';
import ViolationSummaryPage from './pages/teacher/ViolationSummaryPage';
import LoginPage from './pages/login/LoginPage';




import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/face-scan" element={<FaceScanPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz-summary" element={<ScoreSummaryPage />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/create-quiz" element={<CreateQuizPage />} />
        <Route path="/teacher/questions/:paperCode" element={<QuestionManagementPage />} />
        <Route path="/teacher/questions" element={<QuestionManagementLandingPage />} />
        <Route path="/teacher/student-logs" element={<StudentLogsPage />} />
        <Route path="/teacher/student-logs/view/:paperCode/:studentName" element={<StudentLogTimeLinePage />} />
        <Route path="/teacher/violation-summary" element={<ViolationSummaryPage />} />
        <Route path="/login" element={<LoginPage />} />


      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
