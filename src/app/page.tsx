import Topbar from "./components/Topbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between 2xl:h-screen">
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
}
