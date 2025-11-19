import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccessPage from "../pages/AccessPage";
import AboutMe from "../pages/AboutMe";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AccessPage />} />
                <Route path="/HomePage" element={<AboutMe />} />
            </Routes>
        </BrowserRouter>
    );
}