import React from "react";
import RouterPage from "./pages/RouterPage";
import { UIProvider } from "./context/UIContext";
const TicketApp = () => {
  return (
    <UIProvider>
      <RouterPage />
    </UIProvider>
  );
};

export default TicketApp;
