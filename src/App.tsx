import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { FerryPage } from "./pages/FerryPage";
import { RequireAuth } from "./components/auth/RequireAuth";
import { LoginPage } from "./pages/LoginPage";
import { RootLayout } from "./pages/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index path="/login" element={<LoginPage />} />

          {/* <Route element={<RequireAuth />}>
            <Route path="/ferry" element={<FerryPage />} />
          </Route> */}
        </Route>
      </Routes>

      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
