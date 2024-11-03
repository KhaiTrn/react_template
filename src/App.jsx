import { useRoutes } from "react-router-dom";

import { pathDefault } from "./common/path";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
function App() {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <HomeTemplate />,
    },
  ]);

  return routes;
}

export default App;
