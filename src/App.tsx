import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { RequireAuth } from "./components/auth/RequireAuth";
import { LoginPage } from "./pages/LoginPage";
import { RootLayout } from "./pages/RootLayout";
import { AuthProvider } from "./contexts/AuthContext";
import { FerryPage } from "./pages/FerryPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<RequireAuth />}>
              <Route path="/dashboard" element={<div>Dashboard page</div>} />
              <Route path="/ferry" element={<FerryPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>

      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
