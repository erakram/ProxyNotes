import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Allemployee from './Allemployee'
import {Link } from 'react-router-dom';


class Home extends Component {
    render () {
        return (
            <div><br/>
                <Grid justify="space-between" container spacing={24}>
                    <Grid item xs={10} />
                    <Grid item xs={2}>
                        <Link to="/add" type="submit" aligh="right" variant="contained" color="secondary" className="">Create New Employee</Link>
                    </Grid>
                </Grid>
                <Grid container>
                    <Allemployee />
                </Grid>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;