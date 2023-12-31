import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Blog } from "./pages";
import { Navbar } from "./components";
import ThemProvider from "./providers/ThemProvider";

function App() {
  return (
    <ThemProvider>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemProvider>
  );
}

export default App;
