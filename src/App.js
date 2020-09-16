import React from 'react';
import { useForm } from "react-hook-form";
import firebase from './firebase.js'
import './App.css';


function App() {

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    const itemsRef = firebase.database().ref('users');
    itemsRef.push(values);
  };
  return (
    <div className="container App">
     <h3>Create a Profile</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group row">
    <label class="col-sm-2 col-form-label">FirstName</label>
    <div class="col-sm-10">
      <input name="firstname"
       ref={register({ required: "Required"})}
       type="text" class="form-control"  placeholder="firstname" />
    </div>
    {errors.firstname && errors.firstname.message}
  </div>
      <div class="form-group row">
    <label  class="col-sm-2 col-form-label">LastName</label>
    <div class="col-sm-10">
      <input name ="lastname" ref={register({ required: "Required"})} type="text" class="form-control"  placeholder="lastname" />
    </div>
  </div>
  {errors.lastname && errors.lastname.message}
  <div class="form-group row">
    <label  class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input name ="email"
      ref={register({
        required: "Required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address"
        }
      })} type="email" class="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  {errors.email && errors.email.message}
  <div class="form-group row">
    <label  class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
      <input type="number" ref={register({ required: "Required"})} class="form-control" name="phoneNumber" placeholder="phonenumber" />
    </div>
  </div>
  {errors.phoneNumber && errors.phoneNumber.message}

    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">SEX</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input ref={register({ required: "Required"})} class="form-check-input" value="Female"type="radio" name="Sex"/>
          <label class="form-check-label" for="Sex">
            Female
          </label>
        </div>
        <div class="form-check">
          <input ref={register({ required: "Pick a Sex"})} class="form-check-input" type="radio" name="Sex" id="gridRadios2" value="Male"/>
          <label class="form-check-label" for="gridRadios2">
            Male
          </label>
        </div>
      </div>
    </div>
    {errors.Sex && errors.Sex.message}

  <div class="form-group row">
    <label class="col-sm-2 col-form-label"> SKILLS</label>
    <div class="col-sm-10">
    <select ref={register({ required: "Required"})} class="custom-select" name="skill">
    <option>Select a skill</option>
    <option value="UI">UI</option>
    <option value="UX">UX</option>
    <option value="Backend">Backend</option>
    <option value="CSS">CSS</option>
</select>
    </div>
  </div>
  {errors.skill && errors.skill.message}
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea ref={register({ required: "Required"})} class="form-control" name="desciption" rows="3"></textarea>
  </div>
  {errors.description && errors.description.message}
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" onClick= {handleSubmit(onSubmit)}class="btn btn-primary">Register</button>
    </div>
  </div>
</form>
    </div>
  );
}

export default App;
