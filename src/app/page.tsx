import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen bg-charcoal text-pearl transition">
      <Articles />
      <Footer />
    </div>
  );
}
