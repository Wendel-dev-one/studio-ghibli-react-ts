import { Header } from "./components/Header";
import { ListMoviesCards } from "./components/ListMoviesCards";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { About } from "./pages/About";

function App() {
  return (
    <div className="bg-[url('/images/background.jpg')] min-h-screen bg-no-repeat bg-cover flex flex-col">

        <Header></Header>

        <Routes>
          <Route path="/" element={<ListMoviesCards />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer></Footer>

    </div>
  );
}

export default App;
