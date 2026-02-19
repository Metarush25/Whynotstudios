import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

import Corporate from "@/pages/portfolio/Corporate";
import LiveEvents from "@/pages/portfolio/LiveEvents";
import Weddings from "@/pages/portfolio/Weddings";
import AdventureTravel from "@/pages/portfolio/AdventureTravel";
import CSR from "@/pages/portfolio/CSR";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/portfolio/corporate" element={<Corporate />} />
        <Route path="/portfolio/live-events" element={<LiveEvents />} />
        <Route path="/portfolio/weddings" element={<Weddings />} />
        <Route path="/portfolio/adventure-travel" element={<AdventureTravel />} />
        <Route path="/portfolio/csr" element={<CSR />} />
      </Routes>
    </BrowserRouter>
  );
}
