import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Test} from '../../n2-features/f0-test/Test';
import {Registration} from './components/Register/Registration';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../m2-bll/store';
import {LoginPage} from './components/Login/LoginPage';
import {Preloader} from './common/c4-Preloader/Preloader';
import {Profile} from './components/Profile/Profile'
import {ForgotPage} from './components/Forgot/ForgotPage';
import {NewPasswordPage} from './components/NewPassword/NewPasswordPage';
import {AppStateType} from '../m2-bll/r1-app/appInitState';
import {AuthStateType} from '../m2-bll/r2-auth/authInitState';
import {initializingTC} from '../m2-bll/r1-app/appThunk';
import {CardsTable} from './components/Cards/CardsTable';
import {PacksPage} from './components/Packs/PacksPage';
import {SnackBarContainer} from './common/SnackBar/SnackBarContainer';
import Learn from './components/LearnPage/Learn';
import {HeaderMain} from './components/HeaderMain/HeaderMain';
import {PersonalInformationPage} from './components/PersonalInformation/PersonalInformationPage';


const App = () => {
    const {loading} = useSelector<AppRootStateType, AppStateType>(state => state.app)
    const {isLogin, error} = useSelector<AppRootStateType, AuthStateType>(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLogin) {
            dispatch(initializingTC())
        }
    }, [dispatch])
    if (loading) {
        return <div className={'container'} style={{height: '100vh'}}><Preloader/></div>
    }
    return (
        <div className="App">
            {isLogin && <HeaderMain/>}
            <Switch>
                <Route path={'/learn/:id?'} render={()=> <Learn/>}/>
                <Route path={'/login'} render={() => <LoginPage/>}/>
                <Route path={'/registration'} render={() => <Registration/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/forgot'} render={() => <ForgotPage/>}/>
                <Route path={'/new-password/:token?'} exact render={() => <NewPasswordPage/>}/>
                <Route path={'/test'} render={() => <Test/>}/>
                <Route path={'/packs'} render={() => <PacksPage/>}/>
                <Route path={'/cards/:id?'} render={() => <CardsTable/>}/>
                <Route path={'/personal-information'} render={()=> <PersonalInformationPage/>}/>
                <Route path={'/404'} render={() => <div style={{'fontSize': '60px'}}>404: PAGE NOT FOUND</div>}/>
                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>

            {error && <SnackBarContainer/>}

        </div>
    );
}

export default App;
