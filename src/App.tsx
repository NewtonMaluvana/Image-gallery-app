import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <div className="h-full">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
