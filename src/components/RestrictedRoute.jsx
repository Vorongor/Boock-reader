import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogined = useSelector(state => state.auth.isLoggedIn);

  return isLogined ? <Navigate to={redirectTo} /> : Component;
};
