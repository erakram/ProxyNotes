import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink  } from 'react-router-dom';
import ProtectedRoute from '../route/ProtectedRoute'
import Login from './Login'
import Home from './Home'
import Logout from './Logout'
import EmployeeDetail from  './EmployeeDetail'
import AddEmployee from './AddEmployee'
import UpdateEmp from './UpdateEmp'

class Navigation extends Component {
    render () {
        return (
            <Router>
                <nav className="nav-wrapper grey darken-3">
                    <div className="container">
                        <Link to="/" className="brand-logo">Aladdin</Link>
                        <ul className="right">
                         {this.props.authenticated ? (
                                <span>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/add">New User</NavLink></li>
                                <Logout />
                                </span>
                            ) : (
                                <span>
                                <li><NavLink to="/signup">Signup</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                                </span>
                            )}
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route authenticated={this.props.authenticated} path="/login" component={Login} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/employee/:id" component= {EmployeeDetail} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/add" component ={AddEmployee} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/update/:id" component ={UpdateEmp} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/" component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default Navigation;