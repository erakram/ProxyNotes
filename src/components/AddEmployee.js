import React, { Component } from 'react'
// import firebase from './config/fbConfig';
// import { withRouter } from 'react-router-dom';


class AddEmployee extends Component {
    state = {
        name: '',
        salary: '',
        age: '',
        profile_image: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        //alert('A list was submitted: ' + this.state.formvalue);
        e.preventDefault();
        fetch('http://dummy.restapiexample.com/api/v1/create', {
            method: 'POST',
            Origin: 'http://dummy.restapiexample.com/',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
           body: JSON.stringify( {
    name: this.state.name,    
    salary: this.state.salary,
    age: this.state.age
   })
       }).then(res => res.json())
       .then((data)=> {
        alert("User Added");
        this.props.history.push('/admin');
        console.log("User Added")
       })
       .catch ((error) => {
                    this.setState({ error: error });
                    console.log('Error')
                })
   }
    render() {
        return (
            <div className="container">
                <form className="white addForm">
                    <h5 className="grey-text text-darken-3">Add Employee</h5>
                    <div className="input-field">
                        <label htmlFor="name">Employee Name</label>
                        <input type="text" id="name" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="salary">Employee Salary</label>
                        <input type="number" id="salary" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="age">Employee Age</label>
                        <input type="text" id="age" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Add Employee</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddEmployee;