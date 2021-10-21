import Portabellos from "./Portabellos.js";
import BeerdedBean from "./BeerdedBean.js";
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from "./App.js";

function NavBar() {
    return (
<Router>
<NavBarBody>
{/* <Link to="/">Home</Link> */}
<Link to="/portabellos">Portabellos</Link>
<Link to="/beerdedbean"> 
BeerdedBean
</Link>

<Switch>
          <Route path="/beerdedbean">
          <BeerdedBean/>
          </Route>
          <Route path="/portabellos">
          <Portabellos/>
          </Route>
          {/* <Route path="/">
          <App.js/>
          </Route> */}
        </Switch>
</NavBarBody>
</Router>
    );
}

export default NavBar;

const NavBarBody = styled.div`

background-color: black; 
color: white;
height: 60px;
padding-bottom: 70px;
display: flex;
align-items: center;
`;

