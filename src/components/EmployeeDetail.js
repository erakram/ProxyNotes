import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class EmployeeDetail extends Component {
    state = {
        user: []
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

    handleDelete = (e) => {
        console.log("Delete User");
        let id = this.props.match.params.id;
        var url = 'http://dummy.restapiexample.com/api/v1/delete/' +id;
        console.log(url);
        e.preventDefault();
            fetch(url, {      
                method: 'DELETE',
                Origin: 'http://dummy.restapiexample.com/',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              }).then(res => res.json())
              .then((data)=> {
              alert("User Deleted");
              this.props.history.push('/');
              console.log("Deleted")
              console.log(data);
              })
              .catch ((error) => {
                           this.setState({ error: error });
                           console.log('Error')
                       })
          
      }

      handleDetail = (e) => {
        e.preventDefault();
        console.log(e.target.getAttribute('id'));
    }
    render () {
        const user = this.state.user ? (
            <div className="card z-depth-0 project-summery">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title red-text text-darken-5">Employee Name: {this.state.user.employee_name}</span>
                    <hr/>
                    <p>Employee Salary: {this.state.user.id}</p>
                    <p>Employee Salary: {this.state.user.employee_salary}</p>
                    <p>Employee Age: {this.state.user.employee_age}</p><br/>

                    <div align="center">
                        <Button className="" variant="contained" color="secondary" onClick={this.handleDelete}>Delete</Button>
                        <Link to={'/update/' + this.state.user.id}>Edit</Link>
                    </div>
                </div>
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

export default EmployeeDetail