import Loader from 'react-loader-spinner';
import './Spinner.module.scss';


const Spinner = () => (
  <Loader
    type="BallTriangle"
    color="#24CCA7"
    className="Loader"
    height={100}
    width={100}
    visible={true}
  />
);

export default Spinner;