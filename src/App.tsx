import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      {/* 👇 PUT IT HERE (UNDER BrowserRouter) */}
      <ScrollToTop />

      <AppRoutes />

    </BrowserRouter>
  );
}

export default App;