import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./NavBar.css";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Brand</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Каталог
                </Link>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item text-white" href="#">Категория 1</Link></li>
                  <li><Link className="dropdown-item text-white" href="#">Категория 2</Link></li>
                  <li><Link className="dropdown-item text-white" href="#">Категория 3</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Как выбрать кофе?</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Как приготовить?</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link mx-2" href="/login">Вход</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" href="/signup">Регистрация</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
