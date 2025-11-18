import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
