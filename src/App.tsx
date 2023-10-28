import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SongsPage from "./pages/SongsPage";

function App() {
    //color: #552583
    return (
        <Router>
            <div className="flex items-center justify-center h-screen w-full bg-white">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/songs" element={<SongsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
