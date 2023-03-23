import logo from "./logo.svg";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import NavBar from "./components/NavBar";


function App() {
  const routes = [
    { path: "/", component: ()=><h1>Home</h1> },
  ];

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="position-relative">
          <Routes>
            {routes.map((route, i) => {
              const Component = route.component;
              return (
                <Route key={i} path={route.path} element={<Component />} />
                // <Route key={i} path={route.path} element={<Login />} />
              );
            })}
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
