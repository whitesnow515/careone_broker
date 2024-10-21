import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import { API_ENDPOINTS } from "../config/env";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialState = {
  broker_first_name: "",
  broker_last_name: "",
  broker_email: "",
  broker_phone_number: "",
  agent_number: "",
  first_name: "",
  last_name: "",
  email_address: "",
  phone_number: "",
  medicare_number: "",
  dob: ""
};
export const Contact = (props) => {
  const [{ broker_first_name, broker_last_name, broker_email, agent_number, 
    broker_phone_number, first_name, last_name, email_address, 
    phone_number, medicare_number, dob }, setState] = useState(initialState);
  const [open, setOpen] = React.useState(false);


  const handleDisagree = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    sendEmail();
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };  

  const sendEmail = async () => {
    try {
      const response = await axios.post(`${API_ENDPOINTS.pro}/api/send-email`,
        {
          email: broker_email
        }
      );
      if (response.status === 200 || response.status === 204) {
        alert("Sent successfully !");
      }else{
        alert("Failed !");
      }
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const requestData = async () => {
    try {
      const response = await axios.post(`${API_ENDPOINTS.pro}/api/saveBrokerData`, 
        {
          firstName: first_name, lastName: last_name, email: email_address, phone: phone_number, broker_first_name, broker_last_name, broker_email, agent_number, broker_phone_number, dob, medicare_number
        }
      );
      if (response.status === 200 || response.status === 204) {
        setOpen(true);
      }else{
        alert("Failed !")
      }
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (broker_last_name === "" ) {
      alert("Your last name is required !");
      return;
    }  
    if (broker_email === "" ) {
      alert("Your email is required !");
      return;
    }  
    if (broker_phone_number === "" ) {
      alert("Your phone is required !");
      return;
    }  
    if (last_name === "" ) {
      alert("Client's last name is required !");
      return;
    }
    if (email_address === "" ) {
      alert("Client's email is required !");
      return;
    }
    if (phone_number === "" ) {
      alert("Client's phone is required !");
      return;
    }
    requestData();
    
    // emailjs.send('service_jqr774k', 'template_7gg2vl9', {
    //   broker_first_name, broker_last_name, broker_email, broker_phone_number
    // }, 'CXpMtCeRuYT0VXv2a')
    // .then((result) => {
    //   alert("Sent successfully !");
    //   setState({...initialState});
    // }, (error) => {
    //   alert('Error:', error.text);
    //   console.log('Error:', error.text);
    // });
  };


  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDisagree}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><p className="text-black text-2xl font-[600]">Ready ?</p></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p className="text-black text-2xl">Are you ready to enroll your client?</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree} sx={{ width: 70, height: 30, fontSize: 12 }} variant="outlined" color="warning">No</Button>
          <Button onClick={handleAgree} sx={{ width: 70, height: 30, fontSize: 12 }} variant="contained" color="primary">Yes</Button>
        </DialogActions>
      </Dialog>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2 className="text-[17px]">Contact Client</h2>
                <p className="text-[18px]">
                  Please fill out ALL data fields and click SUBMIT when done. Once you click SUBMIT, an email will be sent
                  to your client reflecting your enrollment of them into our program and asking them to verify the
                  information and consent to our preventative wellness program.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="broker_first_name"
                        name="broker_first_name"
                        className="form-control"
                        placeholder="Your First Name"
                        value={broker_first_name}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="broker_last_name"
                        name="broker_last_name"
                        value={broker_last_name}
                        className="form-control"
                        placeholder="Your Last Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="agent_number"
                    name="agent_number"
                    className="form-control"
                    value={agent_number}
                    placeholder="Your Agent Number"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="broker_email"
                    name="broker_email"
                    className="form-control"
                    value={broker_email}
                    placeholder="Your Email Address"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="broker_phone_number"
                    name="broker_phone_number"
                    className="form-control"
                    value={broker_phone_number}
                    placeholder="Your Phone Number"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <Divider className="w-full" sx={{ borderColor: '#f1f1f1' }} />
                <div className="row mt-6">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="form-control"
                        placeholder="Your Client’s Last Name"
                        value={first_name}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={last_name}
                        className="form-control"
                        placeholder="Your Client’s First Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email_address"
                    name="email_address"
                    className="form-control"
                    value={email_address}
                    placeholder="Your Client’s Email"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    className="form-control"
                    value={phone_number}
                    placeholder="Your Client’s Phone Number"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="medicare_number"
                    name="medicare_number"
                    className="form-control"
                    placeholder="Your Client’s Medicare Number"
                    value={medicare_number}
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={dob}
                    className="form-control"
                    placeholder="Your Client’s DOB"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3 className="text-[17px] font-bold">CareOne Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <a href="mailto:info@careone-concierge.com">{props.data ? props.data.email : "loading"}</a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            Copyright © 2024 CareONE Concierge – All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
