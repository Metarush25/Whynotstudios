import { Link } from "react-router-dom";

export default function Corporate() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-4xl font-bold">
      <h1>Corporate Portfolio</h1>

      <div className="text-base font-normal flex gap-4">
        <Link to="/portfolio/live-events">Live Events</Link>
        <Link to="/portfolio/weddings">Weddings</Link>
        <Link to="/portfolio/adventure-travel">Adventure & Travel</Link>
        <Link to="/portfolio/csr">CSR</Link>
      </div>
    </div>
  );
}
