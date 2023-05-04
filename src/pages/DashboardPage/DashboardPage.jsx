import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectName } from '../../redux/auth/selectors';
import { ModalAddTransaction } from './../../components/ModalAddTransaction/ModalAddTransaction'

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectName);

  return (
    <>
      <p> Tutaj ładujemy cały wygląd dashboard </p>
      <ModalAddTransaction></ModalAddTransaction>
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
