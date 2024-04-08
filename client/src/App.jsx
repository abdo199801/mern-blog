import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage'; // Import the actual component

// Rename other imports to avoid conflicts
import AboutPage from './pages/Aboutpage';
import SigninPage from './pages/Signinpage.jsx';
import SignUpPage from './pages/SinUppage.jsx';
import DashboardPage from './pages/Dashboardpage';
import ProjectsPage from './pages/projectspage';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Use the renamed component */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
