import { useSelector } from 'react-redux';
import {
  selectName,
  selectIsLoggedIn,
  selectIsFetchingCurrentUser,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);
  const user = useSelector(selectName);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
