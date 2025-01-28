import Features from "./components/Features";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import LawFirmList from "./components/LawFirmList";
import LegalServiceTypes from "./components/LegalServiceTypes";

export default function App() {
  return (
    <main className="main">
      <Header />
      <Introduction />
      <Features />
      <LegalServiceTypes />
      <LawFirmList />
    </main>
  );
}
