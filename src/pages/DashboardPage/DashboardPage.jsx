import Balance from '../../components/Balance/Balance';
// import HomeTab from '../../components/HomeTab/HomeTab';
import style from './DashboardPage.module.scss';
import Navigation from 'components/Navigation/Navigation';

export default function DashboardPage() {
    

    return (
        <>
            <div className={style.dashboard}>
                <Navigation />
                <Balance />
                {/* <HomeTab /> */}
        </div>
        </>
    )
}
