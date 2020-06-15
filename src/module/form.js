import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from 'axios';

class EditComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      campName: "",
      campFamilyName: "",
      campLastLoginDate: "",
      campCreatedAt: "",
      campUpdatedAt: "",

    }
  }

  render() {
    return (
      <div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-6">
            <label for="inputPassword4">Name </label>
            <input type="text" class="form-control" placeholder="Name" value={this.state.campName} onChange={(value) => this.setState({ campName: value.target.value })} />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Family_Name</label>
            <input type="text" class="form-control" placeholder="Family_Name" value={this.state.campFamilyName} onChange={(value) => this.setState({ campFamilyName: value.target.value })} />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">LastLoginDate</label>
            <input type="date" class="form-control" placeholder="LastLoginDate" value={this.state.campLastLoginDate} onChange={(value) => this.setState({ campLastLoginDate: value.target.value })} />
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

        <button type="submit" class="btn btn-primary" onClick={() => this.sendSave()}>Save</button>
      </div>
    );
  }

  sendSave() {


    if (this.state.campName == "") {
      alert("xxxxxx")
    }
    else if (this.state.campFamilyName == "") {
      alert("xxxxxx")
    }
    else if (this.state.campLastLoginDate == "") {
      alert("xxxxxx")
    }
    else if (this.state.campCreatedAt == "") {
      alert("xxxxxx")
    }
    else if (this.state.campUpdatedAt == "") {
      alert("xxxxxx")
    }
    else {

      // url de backend
      const baseUrl = "http://localhost:3000/api/user/create"


      const datapost = {
        name: this.state.campName,
        family_name: this.state.campFamilyName,
        last_login_date: this.state.campLastLoginDate,
        createdAt: this.state.campCreatedAt,
        updatedAt: this.state.campUpdatedAt,
      }








      axios.post(baseUrl, datapost)
        .then(response => {
          if (response.data.success === true) {
            alert(response.data.message)
          }
          else {
            alert(response.data.message)
          }
        }).catch(error => {
          alert("Error 34 " + error)
        })

    }

  }

}


export default EditComponent;
