import "./App.css";
import { Footer, List, MainBanner, Metrics, VideoSection } from "./components";
import { Faq } from "./components/faq";
import { FeedbackSection } from "./components/feedback";

function App() {
  return (
    <>
      <MainBanner />
      <List />
      <Metrics />
      <Faq />
      <VideoSection />
      <FeedbackSection />
      <Footer />
    </>
  );
}

export default App;
