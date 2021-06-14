import "./App.css";
import Register from "./Forms/Register";
import Login from "./Forms/Login";
import Navbar from "./Components/Navbar";
import Weather from "./Components/Weather";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import WeatherHistory from "./Components/WeatherHistory";
import Home from "./Components/Home";
import { AuthProvider } from "./Components/Auth";

function App() {
  return (
    <Provider store={store}>
      {/* <AuthProvider> */}
      <Navbar />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/history" component={WeatherHistory} />
        <Route path="/weather" component={Weather} />
        <Route path="/" component={Home} />
      </Switch>
      {/* </AuthProvider> */}
    </Provider>
  );
}

export default App;
