import "tailwindcss/tailwind.css";
import "../css/font.css";
import "../css/global.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Navbar />
      <main className="relative flex-grow overflow-hidden">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
