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
    
    componentDidMount () {
        console.log(this.props)
        let id = this.props.match.params.id;
        var url = 'http://dummy.restapiexample.com/api/v1/employee/' +id;
        console.log(url);
        fetch(url, {
          method: 'GET',
            Origin: 'http://dummy.restapiexample.com/',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                throw Error('Network request failed.')
            }
            return response;
            
        })
        .then(data => data.json())
        .then(data => {
                this.setState({user: data})
                console.log(data)

        }, (ex) => {
            console.log('parsing failed', ex)
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
   handleUpdate = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    console.log(id);
    console.log(e.target.getAttribute('id'));
    var url = 'http://dummy.restapiexample.com/api/v1/update/' +id;
    console.log(url);
    fetch(url, {
            method: 'PUT',
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
        this.props.history.push('/');
        
       })
       .catch ((error) => {
                    this.setState({ error: error });
                    console.log('Error')
                })
  }
    render() {
        
        const user = this.state.user ? (
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
                     <button className="btn pink lighten-1 z-depth-0" onClick={this.handleUpdate}>Update Employee</button>
                 </div>
             </form>
         </div>
        ) : (
            <div className="center">Loading user...</div>
        )
        return (
            <div className="container">
                <br/>
                <h1>EmployeeDetail</h1><br/>
                {user}
            </div>
        )
    }
        
    }


export default AddEmployee;