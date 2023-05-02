import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectName } from '../../redux/auth/selectors';

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectName);

  return (
    <>
      <p> Tutaj ładujemy cały wygląd dashboard </p>
      <p>{userName}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </button>
    </>
  );
};
