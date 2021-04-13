import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="border border-color-white p-5" style={{ width: "45%" }}>
        <h2>Registration Form</h2>

        <form className="w-75">
          <div class="form-group mt-5">
            <label for="college_name_id" class="control-label">
              Name of your Institute
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="college_name_id"
              name="full_name"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="full_name_id" class="control-label">
              Full Name
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="full_name_id"
              name="full_name"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="contact_number_id" class="control-label">
              Contact Number
            </label>
            <input
              required
              type="Number"
              class="form-control"
              id="contact_number_id"
              name="contact_number"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="department_id" class="control-label">
              Department
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="department_id"
              name="department"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="date_id" class="control-label">
              Delighted date of Seminar/Workshop
            </label>
            <input
              required
              type="date"
              class="form-control"
              id="date_id"
              name="date"
              placeholder=""
            />
          </div>

          <div class="form-group">
            <label for="state_id" class="control-label">
              State
            </label>
            <select class="form-control" id="state_id">
              <option value="AL">Andhra Pradesh</option>
              <option value="AK">Arunachal Pradesh</option>
              <option value="AZ">Assam</option>
              <option value="AR">Bihar</option>
              <option value="CA">Chhattisgarh</option>
              <option value="CO">Goa</option>
              <option value="CT">Gujarat</option>
              <option value="DE">Haryana</option>
              <option value="DC">Himachal Pradesh</option>
              <option value="FL">Jammu and Kashmir</option>
              <option value="GA">Jharkhand</option>
              <option value="HI">Karnataka</option>
              <option value="ID"> Kerala</option>
              <option value="IL">Madhya Pradesh</option>
              <option value="IN">Maharashtra</option>
              <option value="IA"> Manipur</option>
              <option value="KS">Meghalaya </option>
              <option value="KY">Mizoram</option>
              <option value="LA">Nagaland</option>
              <option value="ME">Odisha</option>
              <option value="MD">Punjab</option>
              <option value="MA">Rajasthan</option>
              <option value="MI">Sikkim</option>
              <option value="MN">Tamil Nadu</option>
              <option value="MS">Telangana</option>
              <option value="MO">Tripura</option>
              <option value="MT">Uttar Pradesh</option>
              <option value="NE">Uttarakhand</option>
              <option value="NV"> West Bengal</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
