import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

import { Link } from "react-router-dom";

//library sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const baseUrl = "http://localhost:3000"

class listComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listUser: []
    }
  }

  componentDidMount() {
    this.loadUser()
  }

  loadUser() {
    const url = baseUrl + "/api/user/all"
    axios.get(url)
      .then(res => {
        if (res.data.success) {
          const data = res.data.data
          this.setState({ listUser: data })
        }
        else {
          alert("Error web service")
        }
      })
      .catch(error => {
        alert("Error server " + error)
      })
  }


  render() {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>

            <th scope="col">Name</th>
            <th scope="col">Family_Name</th>
            <th scope="col">Last_Date_Login</th>
            <th scope="col">createdAt</th>
            <th scope="col">updatedAt</th>
          </tr>
        </thead>
        <tbody>



          {this.loadFillData()}
        </tbody>
      </table>
    );
  }

  loadFillData() {

    return this.state.listUser.map((data) => {
      return (
        <tr>


          <td>{data.name}</td>
          <td>{data.family_name}</td>
          <td>{data.last_login_date}</td>
          <td>{data.createdAt}</td>
          <td>{data.updatedAt}</td>
          <td>
            <Link class="btn btn-outline-info" to={"/edit/" + data.id}>Edit</Link>
          </td>
          <td>
            <button class="btn btn-outline-danger" onClick={() => this.onDelete(data.id)}> Delete </button>
          </td>
        </tr>
      )
    })
  }

  onDelete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  sendDelete(userId) {
    // url de backend

    const baseUrl = "http://localhost:3000/api/user/delete/" + userId
    // network
    axios.post(baseUrl, {
      id: userId
    })
      .then(response => {
        if (response.data.success) {
          Swal.fire(
            'Deleted!',
            'the user has been deleted.',
            'success'
          )
          this.loadUser()
        }
      })
      .catch(error => {
        alert("Error  ")
      })
  }

}

export default listComponent;
