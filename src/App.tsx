import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';

const Login = React.lazy(() => import('./Pages/User/LoginPage'))
const Signup = React.lazy(() => import('./Pages/User/SignupPage'))
import ErrorBoundaryHandle from './Pages/ErrorBoundaryHandle';
import PageNotFound from './Pages/User/PageNotFound';
import LoadingPage from './Pages/LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
const UserLayout = React.lazy(() => import('./Components/User/Layout/Layout'))
const UserHomePage = React.lazy(() => import('./Pages/User/HomePage'))
const OnMyWish = React.lazy(() => import('./Pages/User/OnMyWish'))
const LandingPage = React.lazy(() => import('./Pages/User/LandingPage'))
const CanteenLayout = React.lazy(() => import('./Components/Canteen/Layout/Layout'))
const AddPackages = React.lazy(() => import('./Pages/Canteen/AddPackages'))
const CanteenLogin = React.lazy(() => import('./Pages/Canteen/CanteenLoginPage'))
const CanteenSignUp = React.lazy(() => import('./Pages/Canteen/CanteenSignupPage'))
import { isUser } from './redux/user/userdataReducer'


function App() {

  // const userIs =localStorage.getItem('userAccessToken')
  const user = useSelector((state: any) => state.userdata)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isUser(user));
  }, [dispatch]);


  return (



    <>

      <Router>
        <ErrorBoundaryHandle>


          <Routes>

            <Route path='/user/login' element={user ? (<Navigate to='/' replace={true} />) : (<React.Suspense fallback={<LoadingPage />}> <Login /></React.Suspense>)} />
            <Route path='/user/signup' element={user ? (<Navigate to='/' replace={true} />) : (<React.Suspense fallback={<LoadingPage />}><Signup /></React.Suspense>)} />
            <Route path='/user/landingpage' element={user ? (<Navigate to='/' replace={true} />) : (<React.Suspense fallback={<LoadingPage />}><LandingPage /></React.Suspense>)} />

            {/*------------------------userlayout------------------------------------------------*/}
            <Route path='/' element={user ? (<React.Suspense fallback={<LoadingPage />} ><UserLayout /></React.Suspense>) : (<Navigate to='/user/landingpage' replace={true} />)}>
              <Route index element={<React.Suspense fallback={<LoadingPage />}><UserHomePage /></React.Suspense>} />
              <Route path="user/onwish" element={<React.Suspense fallback={<LoadingPage />}><OnMyWish /></React.Suspense>} />


            </Route>
            {/*-----------------------------------//userlayout-end----------------------------*/}



            <Route path='/canteen/login' element={<React.Suspense fallback={<LoadingPage />}><CanteenLogin/></React.Suspense>}/>
            <Route path='/canteen/signup' element={<React.Suspense fallback={<LoadingPage />}><CanteenSignUp/></React.Suspense>}/>
           
            {/* ----------------------------------Canteen_Layout_Starts----------------------------- */}

            <Route path='/canteen' element={<React.Suspense fallback={<LoadingPage />}><CanteenLayout /></React.Suspense>}>
              <Route path='addpackages' element={<React.Suspense fallback={<LoadingPage />}><AddPackages /></React.Suspense>} />
            </Route>
            {/* ----------------------------//canteen_layout_ends---------------------------------------- */}


            <Route path='*' element={<PageNotFound />} />

          </Routes>

        </ErrorBoundaryHandle>
      </Router>

    </>

  )
}

export default App
