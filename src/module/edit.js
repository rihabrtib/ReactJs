import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
const baseUrl = "http://localhost:3000"

class EditComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataUser: {},
      campName: "",
      campFamilyName: "",
      campLastLoginDate: "",
      campCreatedAt: "",
      campUpdatedAt: "",
    }
  }

  componentDidMount() {

    let userId = this.props.match.params.id;

    const url = baseUrl + "/api/user/find/" + userId
    axios.get(url)
      .then(res => {
        if (res.data.success) {
          const data = res.data.data[0]
          this.setState({
            dataUser: data,
            campName: data.name,
            campFamilyName: data.family_name,
            campLastLoginDate: data.last_login_date,
            campCreatedAt: data.createdAt,
            campUpdatedAt: data.updatedAt,
          })
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
      <div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-6">
            <label for="inputPassword4">Name</label>
            <input type="text" class="form-control" placeholder="Name"
              value={this.state.campName} onChange={(value) => this.setState({ campName: value.target.value })} />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">FamilyName</label>
            <input type="text" class="form-control" placeholder="FamilyName"
              value={this.state.campFamilyName} onChange={(value) => this.setState({ campFamilyName: value.target.value })} />
          </div>
        </div>
        <div class="form-row">

          <div class="form-group col-md-6">
            <label for="inputEmail4">last_login_date</label>
            <input type="date" class="form-control" placeholder="last_login_date"
              value={this.state.campLastLoginDate} onChange={(value) => this.setState({ campLastLoginDate: value.target.value })} />
          </div>

          <div class="form-group col-md-6">
            <label for="inputEmail4">Created</label>
            <input type="date" class="form-control" placeholder="CreatedAt" value={this.state.campCreatedAt} onChange={(value) => this.setState({ campCreatedAt: value.target.value })} />
          </div>
        </div>
        <div class="form-row">

          <div class="form-group col-md-6">
            <label for="inputEmail4">Updated</label>
            <input type="date" class="form-control" placeholder="UpdatedAt" value={this.state.campUpdatedAt} onChange={(value) => this.setState({ campUpdatedAt: value.target.value })} />
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={() => this.sendUpdate()}>Update</button>
      </div>
    );
  }

  sendUpdate() {

    // get parameter id
    let userId = this.props.match.params.id;
    // url de backend
    const baseUrl = "http://localhost:3000/api/user/edit/" + userId

    const datapost = {
      name: this.state.campName,
      family_name: this.state.campFamilyName,
      last_login_date: this.state.campLastLoginDate,
      createdAt: this.state.campCreatedAt,
      updatedAt: this.state.campUpdatedAt,
    }

    axios.post(baseUrl, datapost)
      .then(response => {
        if (response.data.success) {
          alert(response.data.message)
        }
        else {
          alert("Error")
        }
      })
      .catch(error => {
        alert("Error 325 ")
      })

  }


}


export default EditComponent;
