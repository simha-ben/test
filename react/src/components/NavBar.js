import{NavLink} from 'react-router-dom'
function NavBar() {
    return (
        <div className="App">
          <NavLink to="./regisret">regisret</NavLink>
          <br></br> 
          <NavLink to="/userDetailes">user detailes</NavLink>  
          <br></br> 
          <NavLink to="/showAll">show all</NavLink>  
        </div>
    );
}

export default NavBar;
