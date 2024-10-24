import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./NavBar.css";
import { Link, useNavigate } from 'react-router-dom';

function NavBar({ user, logoutHandler }) {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>Brand</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Каталог
                </Link>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item text-white" to="/catalog">Весь каталог</Link></li>
                  <li><Link className="dropdown-item text-white" to="#">Кофе для эспрессо</Link></li>
                  <li><Link className="dropdown-item text-white" to="#">Кофе для фильтра</Link></li>
                  <li><Link className="dropdown-item text-white" to="#">Аксессуары</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Как выбрать кофе?</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Как приготовить?</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
            {user ? (
              <>
              <li className="nav-item">
                    <span className="nav-link" >
                      Привет, {user.name}
                    </span>
                  </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ paddingRight: '5px' }}
                >
                  Мой Профиль
                </Link>
                
                <ul className="dropdown-menu" aria-labelledby="userDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Профиль
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Настройки аккаунта
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/logout"
                    onClick={() => logoutHandler().then(() => navigate('/login'))}>
                      Выйти
                    </Link>
                    
                  </li>
                  
                </ul>
                
              </li>
              <Link to="/profile">
              <img 
                    src={'profile.png'}
                    alt="Аватар"
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px' }}
                  />
                  </Link>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/login">Вход</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/signup">Регистрация</Link>
                </li>
              </>
            )}
          </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

