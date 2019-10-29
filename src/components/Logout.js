import React from 'react';
// import { Button } from 'rebass';
import Button from '@material-ui/core/Button';

// import firebase from './config/fbConfig';
import firebase from '../config/fbConfig';
const logOutUser = () => {
 firebase.auth().signOut();
 console.log('Logout Success')
};
const Logout = () => {
 return <Button className="btn btn-warning" onClick={logOutUser} children="LogOut" />;
};
export default Logout;
