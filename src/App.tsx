import { useState } from "react"
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Responsabilities } from "./components/Responsabilities/Responsabilities";
import { Targets } from "./components/Targets/Targets";
import { Footer } from "./components/Footer/Footer";
import { Projects } from "./components/Projects/Projects";
import { PrinciplesAndValues } from "./components/PrinciplesAndValues/PrinciplesAndValues";

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Main />
      <Responsabilities />
      <PrinciplesAndValues />
      <Projects />
      <Targets />
      <Footer />
    </>
  )
}

export default App
