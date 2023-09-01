import AppRoutes from "./routes/routes";
import "./styles/app.scss";
import { UserContext } from "./providers/UserContext";
import { useContext } from "react";

const App = () => {
  const { redirectLoading } = useContext(UserContext);

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
