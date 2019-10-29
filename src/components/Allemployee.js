import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Allemployee extends Component {
  constructor() {
    super();
    this.state = {
    users : [],
    userLength : null,
    name: '',
    age: '',
    gender: '',
    email: '',
    mobile: '',
    designation: ''
    
  };
}


  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  componentDidMount() {
    var url = 'http://dummy.restapiexample.com/api/v1/employees';
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
                this.setState({users: data})
                this.setState({userLength: data.length})

        }, (ex) => {
            console.log('parsing failed', ex)
        })
}


  render() {
    let table_row;
  
    if(this.state.users.length>0){
        let tr;
        table_row = this.state.users.map((user, index)=>{

            return <tr key={index}>
                <td><Link to={'/employee/' + user.id} id={user.id}>{user.id}</Link></td>
                
                <td><Link to={'/employee/' + user.id}>{user.employee_name}</Link></td>
                <td><Link to={'/employee/' + user.id}>{user.employee_salary}</Link></td>
                <td><Link to={'/employee/' + user.id}>{user.employee_age}</Link></td>
            </tr>;
            

        });
    }else{
        table_row = null
    }

    let rows = [];
    for (let i = 1; i <= this.state.last_page; i++) {

        rows.push(<li className="page-item" key={i}><a className="page-link" href="#" onClick={(e)=>this.pagination('btn-click',e,i)}>{i}</a></li>);
    }
    return (
      
      <div className="page-wrapper">
 

      <div className="container">
          <div className="row">
              <div className="col-lg-12 col-md-12">
                  <div className="card card-default">
                      <div className="card-header">
                          <div className="card-actions">
                              <a className="" data-action="collapse"><i className="ti-minus"></i></a>

                          </div>
                          <h4 className="card-title m-b-0">Employee List</h4>
                      </div>
                      <div className="card-body collapse show">
                          <div className="d-flex no-block">
                             
                          </div>

                          <div className="table-responsive">

                              {!this.state.loading ?
                                  <div>
                                      <table className="table product-overview">
                                          <thead>
                                          <tr>
                                              <th>Emp ID</th>
                                              <th onClick={(e)=>{this.sortTable('score',e)}}>Emp Name</th>
                                              <th>Emp Salary</th>
                                              <th>Emp Age</th>
                                          </tr>
                                          </thead>

                                          <tbody>
                                          {table_row}
                                         
                                          </tbody>
                                      </table>
                                       
                                  </div>
                                  :
                                  <div className='sweet-loading' style={{'textAlign':'center'}}>
                                  </div>
                              }
                          </div>
                      </div>
                  </div>
              </div>
          </div>  
      </div>
  </div>
    )
  }
}
export default Allemployee;
