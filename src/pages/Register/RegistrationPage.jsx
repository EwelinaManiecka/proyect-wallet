import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.scss';

export default function Register() {
  return (
    <div className={css.container}>
      <RegistrationForm />
    </div>
  );
}
