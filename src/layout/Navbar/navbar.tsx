import { Link } from 'react-router-dom';
import './navbar.scss';
import { CircularProgress } from 'mui';
import { LogoUrl } from 'constants/index';

import { useFetchUsers } from 'hooks/useFetchUsers';

const Navbar = () => {
  const user = useFetchUsers();

  const FirstName = user?.firstName;
  const LastName = user?.lastName;

  return (
    <header className="container-fluid d-flex align-items-center justify-content-center">
      <div className="col-6">
        <Link to={process.env.REACT_APP_BASE_URL!}>
          <img src={LogoUrl} alt="logo" />
        </Link>
      </div>

      <div className="user col-6 justify-content-end">
        {!user.firstName ? <CircularProgress size='1rem' /> :
          <>
            <span className="user-icon">
              {FirstName?.slice(0, 1)}{LastName?.slice(0, 1)}
            </span>
            <span className="user-name">
              {user?.firstName} {LastName}
            </span>
          </>
        }
      </div>
    </header>
  );
}

export default Navbar;