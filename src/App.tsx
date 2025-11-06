import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { AuthProvider } from "./contexts/AuthContext";
import { RequireAuth } from "./components/auth/RequireAuth";
import { LoginPage } from "./pages/LoginPage";
import { PanelLayout } from "./pages/PanelLayout";
import { ViagensPage } from "./pages/ViagensPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route element={<PanelLayout />}>
              <Route path="/" element={<h1>Painel</h1>} />
              <Route path="/viagens" element={<ViagensPage />} />
            </Route>
          </Route>

          <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>

      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
