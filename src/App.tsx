import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="h-full flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex h-full overflow-clip overflow-y-hidden">
        <Sidebar open={openSidebar} />
        <Body />
      </div>
    </div>
  );
}

export default App;
