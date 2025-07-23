
import { Link, NavLink } from 'react-router';


export function Navbar() {


  return (





    <nav className="back-nav navbar navbar-expand-lg ">
  <div className="container w-100 ">
<div className="d-flex justify-content-between w-100">

<div className=" py-3">
    <Link className="navbar-brand text-white fs-2 fw-bolder " to="/">START FRAMEWORK</Link>
</div>
    

    <div className=" py-3">
        <button className="navbar-toggler text-bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNav">
      <ul className="navbar-nav  gap-lg-3">
        <li className="nav-item">
          <NavLink
          to="/about"
          className={({isActive}) => isActive ? "nav-link active text-white fw-bold bg-success rounded-2" : "nav-link text-white fw-bold rounded-2"}
          >ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          to="/portofolio"
          className={({isActive}) => isActive ? "nav-link active text-white fw-bold bg-success rounded-2" : "nav-link text-white fw-bold rounded-2"}
          >PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          to="/contact"
          className={({isActive}) => isActive ? "nav-link active text-white fw-bold bg-success rounded-2" : "nav-link text-white fw-bold rounded-2"}
          >CONTACT</NavLink>
        </li>
        
      </ul>
    </div>
    </div>

</div>
  </div>
</nav>
  
  );
}

