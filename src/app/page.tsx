import Footer from "./components/Footer";
import Vehicles from "./components/Vehicles";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-600 h-screen">
      <Vehicles />
      <Footer />
    </div>
  );
}
