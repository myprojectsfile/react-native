import Home from "./app/views/Home";
import Contact from "./app/sections/Contact";
import { createStackNavigator, createAppContainer } from "react-navigation";

const MyRoutes = createStackNavigator(
  {
    HomeRT: {
      screen: Home
    },
    ContactRT: {
      screen: Contact
    }
  },
  {
    initialRouteName: "HomeRT"
  }
);

const App = createAppContainer(MyRoutes);
export default App;
