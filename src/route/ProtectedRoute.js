import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
 return <Route render={(props) => (authenticated ? <Component {...props} /> : 
 <Redirect to="/login" />)} {...rest} />;
};
// const ProtectedRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//        fakeAuthCentralState.isAuthenticated === true ? 
//           <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />   
//     )} />
//  );
export default ProtectedRoute;
