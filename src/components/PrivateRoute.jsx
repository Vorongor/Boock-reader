import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogined = useSelector(state => state.auth.isLogined);
  const shouldRedirect = !isLogined;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
