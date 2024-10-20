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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialState = {
  first_name: "",
  last_name: "",
  email_address: "",
  phone_number: "",
  message: "",
};
export const Contact = (props) => {
  const [{ first_name, last_name, email_address, phone_number, message }, setState] = useState(initialState);
  const [checked, setChecked] = React.useState(false);
  const [contact, setContact] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDisagree = () => {
    setOpen(false);
    setContact(false);
  };

  const handleAgree = () => {
    setContact(true);
    setOpen(false);
  };

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };
  
  const checkContact = (event) => {
    handleClickOpen();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };  

  const requestData = async () => {
    try {
      const response = await axios.post('https://welltrackone.com/api/saveData', 
        {
          firstName: first_name, lastName: last_name, email: email_address, phone: phone_number, message
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(first_name, last_name, email_address, phone_number, message);  
    if (last_name === "" ) {
      alert("Last Name is required !");
      return;
    }  
    if (email_address === "" ) {
      alert("Email is required !");
      return;
    }  
    if (phone_number === "" ) {
      alert("Phone is required !");
      return;
    }  
    requestData();
    
    emailjs.send('service_jqr774k', 'template_7gg2vl9', {
      first_name, last_name, email_address, phone_number, message
    }, 'CXpMtCeRuYT0VXv2a')
    .then((result) => {
      alert("Sent successfully !");
      setState({...initialState});
    }, (error) => {
      alert('Error:', error.text);
      console.log('Error:', error.text);
    });
  };

  const contents = (
    <div>
      <div>
        <p className="text-3xl font-[600] text-black underline"> General Terms</p> 
        <p className="text-2xl font-[500] text-black ml-2">1. I am currently an active Medicare beneficiary.</p>
        <p className="text-2xl font-[500] text-black ml-2">2. I understand that I may be charged copayments and/or deductibles for the services including
        Telehealth visits by the physician assigned to me and I agree to pay the copayments and/or
        deductibles via an approved credit card or check. I will be advised of copayments before
        services are rendered.</p>
        <p className="text-2xl font-[500] text-black ml-2">3. Governing Law. This Agreement has been executed and delivered in and shall be interpreted,
        construed, and enforced pursuant to and in accordance with laws of the State of Georgia. The
        venue for any action, special proceeding, or other proceeding that may be brought or arise out
        of, in connection with, or by reason of this Agreement shall be in Fulton County, Georgia.</p>
        <p className="text-2xl font-[500] text-black ml-2">4. The initial term of this Agreement shall be one year beginning with the Effective Date, and this
        Agreement shall automatically renew for additional one-year terms, unless sooner terminated as
        provided in this Section of the Agreement.</p>
        <p className="text-2xl font-[500] text-black ml-2">5. This Agreement may be terminated as follows:</p>
        <p className="text-2xl font-[500] text-black ml-4">a. Either party may terminate this Agreement at any time upon thirty (30) days written
        notice.</p><br></br>

        <p className="text-3xl font-[600] text-black underline"> For United States Residents: HIPAA Agreement</p> 
        <p className="text-2xl font-[500] text-black ml-2">1. I agree to the sharing of my health information electronically with others involved in my care,
        including the Providers and eQ8Health Corporation d/b/a CareONE Concierge (“CareONE”). I
        understand that federal and state law requires health care providers to protect the privacy and
        the security of my personal health information. I understand that CareONE and Providers will
        take steps to make sure that my health information is not seen by anyone who should not see it.
        </p>
        <p className="text-2xl font-[500] text-black ml-2">2. I agree that CareONE may use my protected health information (“PHI”) for the purposes of
        providing medical care. I acknowledge that my PHI will not be shared with any other parties
        other than CareONE and any other parties that I may authorize from time to time.
        </p><br></br>

        <p className="text-3xl font-[600] text-black underline">For United States Residents: Treatment by Telemedicine</p> 
        <p className="text-2xl font-[500] text-black ml-2">Telehealth/Telemedicine involves the use of electronic communications to enable health care providers at
        different locations to share individual patient medical information for the purpose of improving patient
        care. Providers may include primary care practitioners, specialists and/or subspecialists, nurse
        practitioners, registered nurses, medical assistants and other healthcare providers who are part of my
        clinical care team. In addition to myself and the members of my clinical care team, my family members,
        caregivers, or other legal representatives or guardians may join and participate on the
        telehealth/telemedicine service, and I agree to share my personal information with such family members,
        caregivers, legal representatives or guardians. The information may be used for diagnosis, therapy, follow-
        up and/or education.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">Telehealth/Telemedicine requires transmission, via Internet or tele-communication device, of health
        information, which may include:</p><br/>
        <p className="text-2xl font-[500] text-black ml-4"> • Progress reports, assessments, or other intervention-related documents;</p> 
        <p className="text-2xl font-[500] text-black ml-4"> • Bio-physiological data transmitted electronically;</p> 
        <p className="text-2xl font-[500] text-black ml-4"> • Videos, pictures, text messages, audio and any digital form of data.</p> <br/>
        <p className="text-2xl font-[500] text-black ml-2">The laws that protect the privacy and confidentiality of health and care information also apply to
        telehealth/telemedicine. Information obtained during telehealth/telemedicine that identifies me will not
        be given to anyone without my consent except for the purposes of treatment, education, billing and
        healthcare operations. By agreeing to use the telehealth/telemedicine services, I am consenting to
        CareONE sharing of my protected health information with certain third parties as more fully described in
        CareONE’s Privacy Policy. I understand, agree, and expressly consent to CareONE obtaining, using, storing,
        and disseminating to necessary third parties, information about me, including my image, as necessary to
        provide the telehealth/telemedicine services.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">As with any Internet-based communication, I understand that there is a risk of security breach. Electronic
        systems used will incorporate network and software security protocols to protect the confidentiality of
        patient identification and imaging data and will include measures to safeguard the data and to ensure its
        integrity against intentional or unintentional corruption.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">I hereby release and hold harmless CareONE and all members of my care team from any loss of data or
        information due to technical failures associated with the telehealth/telemedicine service.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">I understand and agree that the health information I provide at the time of my telehealth/telemedicine
        service may be the only source of health information used by the medical professionals during the
        course of my evaluation and treatment at the time of my telehealth/telemedicine visit, and that such
        professionals may not have access to my full medical record or information.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">I have the right to withhold or withdraw consent to the use of telehealth/telemedicine services at any
        time and revert back to traditional in-person clinic services. I understand that if I withdraw my consent
        for telehealth/telemedicine, it will not affect any future services or care benefits to which I am entitled
        </p><br/>

        <p className="text-3xl font-[600] text-black underline">For United States Residents: Automated Text Messaging Consent</p> 
        <p className="text-2xl font-[500] text-black ml-2">Technology is always changing the world we live in. These days many patients no longer have a
        landline telephone, instead solely relying on a mobile phone as their primary means of contact.
        This change has complicated our ability to communicate with you. Federal law has placed some
        restrictions on contacting patients on their mobile phones.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">Due to the Telephone Consumer Protection Act (TCPA) that was passed by Congress, all
        healthcare organizations are required to obtain consent before contacting a patient on their
        mobile phone. To ensure that you don’t miss any important communications, including possible
        fraud or suspicious activity on your account, we are requesting your permission to contact you
        on your mobile phone.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">By stating your consent on this form, CareONE and the Provider and related affiliates have your
        permission to contact you on any mobile number on file. Please note that contacts may be made
        as a direct dial call or through the use of text messages, pre- recorded or artificial voice
        messages, and/or the use of an “automated telephone dialing system: or autodialer”.
        </p><br/>
        
        <p className="text-3xl font-[600] text-black underline">For United States Residents: Billing and Assignment of Benefits</p> 
        <p className="text-2xl font-[500] text-black ml-2">I understand that services rendered to me by CareONE are my financial responsibility and that
        the Provider will bill my insurance company as a courtesy. I authorize my insurance company
        to pay my benefits directly to the Provider and I understand that I will be fully responsible for
        any outstanding balance on my account. THIS IS A DIRECT ASSIGNMENT OF MY RIGHTS AND
        BENEFITS UNDER THIS POLICY. This payment will not exceed my indebtedness to the above-
        mentioned assignee and I have agreed to pay, in a current manner, any balance of said
        professional service charges over and above this insurance payment
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">I further certify that I have been given the opportunity to pay my estimated deductible and co-
        insurance at the time of service. I have chosen to assign the benefits, knowing that the claim
        must be paid within all state or federal prompt payment guidelines. I will provide all relevant
        and accurate information to facilitate the prompt payment of the claim.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">I also understand that should my insurance company send payment to me, I will forward the
        payment to my Provider within 48 hrs. I agree that if I fail to send the payment to the Provider
        and then are forced to proceed with the collections process; I will be responsible for any cost
        incurred by the office to retrieve their monies. In the event I receive any check draft or other
        payment subject to this agreement, I will immediately deliver said check, draft or payment to
        the Provider and bring any balance owed to the Provider immediately due and payable. To avoid
        this additional cost and inconvenience, should the insurance company forward payment to me, I
        authorize CareONE to facilitate payment by billing me.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">I authorize the Provider to initiate a complaint or file appeal to the insurance commissioner or
        any payer authority for any reason on my behalf and personally will be active in the
        resolution of claims delay or unjustified reductions or denials.
        </p><br/>
        
        <p className="text-3xl font-[600] text-black underline">For United States Residents: Notice of Privacy Protection</p> 
        <p className="text-2xl font-[500] text-black ml-2">Protected health information includes demographic and medical information that concerns
        the past, present, or future physical or mental health of an individual. Demographic
        information could include your name, address, telephone number, social security number and
        any other means of identifying you as a specific person. Protected health information
        contains specific information that identifies a person or can be used to identify a person.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">Protected health information is health information created or received by a health care
        provider, health plan, employer, or health care clearinghouse. CareONE can act as each of the
        above business types. This medical information is used by CareONE in many ways while
        performing normal business activities.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">Your protected health information may be used or disclosed by CareONE for purposes of
        treatment, payment, and health care operations. Health care professionals use medical
        information in the clinics or hospital to take care of you. Your protected health information
        may be shared, with or without your consent, with another health care provider for purposes
        of your treatment. CareONE may use or disclose your health information for case
        management and services. CareONE clinic or hospital may send the medical information to
        insurance companies, Medicaid, or community agencies to pay for the services provided you.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">Your information may be used by certain department personnel to improve CareONE’s health
        care operations. CareONE also may send you appointment reminders, information about
        treatment options or other health-related benefits and services.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">Some protected health information can be disclosed without your written authorization as
        allowed by law. Those circumstances include:
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-4">• Internal investigations and audits by CareONE’s divisions, bureaus, and offices;
        </p>
        <p className="text-2xl font-[500] text-black ml-4">• Investigations and audits by the state’s Inspector General and Auditor General, and
        the legislature’s Office of Program Policy Analysis and Government Accountability;
        </p>
        <p className="text-2xl font-[500] text-black ml-4">• Public health purposes, including vital statistics, disease reporting, public
        health surveillance, investigations, interventions, and regulation of health professionals;
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">Other uses and disclosures of your protected health information by CareONE will require your
        written authorization. These uses and disclosures may be for marketing and for research
        purposes, certain uses and disclosure of psychotherapist notes, and the sale of protected
        health information resulting in remuneration to CareONE.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">This authorization will have an expiration date that can be revoked by you in writing.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">You have the right to request CareONE to restrict the use and disclosure of your protected
        health information to carry out treatment, payment, or health care operations. You may also
        limit disclosures to individuals involved with your care. CareONE is not required to agree to any
        restriction.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">You have the right to be assured that your information will be kept confidential. CareONE will
        make contact with you in the manner and at the address or phone number you select. You
        may be asked to put your request in writing. If you are responsible to pay for services, you
        may provide an address other than your residence where you can receive mail and where we
        may contact you.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">You have the right to inspect and receive a copy of your protected health information that is
        maintained by CareONE within 30 days of CareONE’s receipt of your request.to obtain a copy
        of your protected health information. If there are delays in getting you the information, you
        will be told the reason for the delay and the anticipated date when you will receive your
        information.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">If you choose to receive a copy of your protected health information, you have the right to
        receive the information in the form or format you request. If CareONE cannot produce it in
        that form or format, it will give you the information in a readable hard copy form or another
        form or format that you and CareONE agree to.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">If access is denied, you have the right to request a review by a licensed health care
        professional who was not involved in the decision to deny access. This licensed health care
        professional will be designated by CareONE.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">You have the right to correct your protected health information. Your request to correct your
        protected health information must be in writing and provide a reason to support your requested
        correction. CareONE may deny your request, in whole or part, if it finds the protected health
        information:
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">• Was not created by CareONE.
        </p>
        <p className="text-2xl font-[500] text-black ml-2">• Is not protected health information.
        </p>
        <p className="text-2xl font-[500] text-black ml-2">• Is by law not available for your inspection.
        </p>
        <p className="text-2xl font-[500] text-black ml-2">• Is accurate and complete.
        </p><br></br>
        <p className="text-2xl font-[500] text-black ml-2">If your correction is accepted, CareONE will make the correction and tell you and others who
        need to know about the correction. If your request is denied, you may send a letter detailing
        the reason you disagree with the decision. CareONE may respond to your letter in writing.
        You also may file a complaint, as described below in the section titled Complaints.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">You have the right to receive a summary of certain disclosures CareONE may have made of
        your protected health information. This summary does not include:
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">• Disclosures made to you or individuals involved with your care.
        </p>
        <p className="text-2xl font-[500] text-black ml-2">• Disclosures authorized by you.
        </p>
        <p className="text-2xl font-[500] text-black ml-2">• Disclosures made to carry out treatment, payment, and health care operations.
        </p>
        <p className="text-2xl font-[500] text-black ml-2">• Disclosures for public health.
        </p>
        <p className="text-2xl font-[500] text-black ml-2">• Disclosures to health professional regulatory purposes.
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">This summary does include disclosures made for:
        </p><br/>
        <p className="text-2xl font-[500] text-black ml-2">• Purposes of research, other than those you authorized in writing.
        </p>
        <p className="text-2xl font-[500] text-black ml-2">• Responses to court orders, subpoenas, or warrants.
        </p><br></br>
        <p className="text-3xl font-[600] text-black underline">Agreement</p> 
        <p className="text-2xl font-[500] text-black ml-2">I have read this document and I understand its terms and conditions. By clicking the “agree” button, I am
        indicating I agree with the terms and conditions of this document and have no questions related to any of the terms and conditions herein.
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDisagree}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><p className="text-black text-4xl font-[600]">Our Terms</p></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {contents}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree} sx={{ width: 100, height: 40, fontSize: 14 }}>Disagree</Button>
          <Button onClick={handleAgree} sx={{ width: 100, height: 40, fontSize: 14 }}>Agree</Button>
        </DialogActions>
      </Dialog>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2 className="text-[17px]">Contact Us</h2>
                <p className="text-[18px]">
                  Today and one of our clinical team will respond to you right away and answer your questions.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="form-control"
                        placeholder="First Name"
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
                        placeholder="Last Name"
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
                    placeholder="Email Address"
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
                    placeholder="Phone Number"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="flex">
                  <FormControlLabel
                    label="I am currently a Medicare or Medicare Advantage member"
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleCheck}
                        sx={{ 
                          transform: 'scale(1.5)', // Resize the checkbox
                        }}
                        color="default"
                      />
                    }
                    sx={{
                      '.MuiFormControlLabel-label': {
                        fontSize: '18px', // Change label font size
                      },
                    }}
                  />
                </div>
                <div className="mb-5">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label"
                      sx={{ fontSize: '18px', color: 'white' }}
                    >
                      I would like more information and I would like to be contacted by (Choose One):
                    </FormLabel>
                    <div className="ml-[127px]">
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{ 
                          transform: 'scale(1.5)', // Resize the checkbox
                        }}
                        color="default"
                      >
                        <FormControlLabel value="email" control={<Radio />} label="Email" />
                        <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                      </RadioGroup>
                    </div>
                  </FormControl>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={message}
                    onChange={handleChange}
                    maxLength={255}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="flex">
                  <FormControlLabel
                    label="Consent"
                    control={
                      <Checkbox
                        checked={contact}
                        onChange={checkContact}
                        sx={{ 
                          transform: 'scale(1.5)', // Resize the checkbox
                        }}
                        color="default"
                      />
                    }
                    sx={{
                      '.MuiFormControlLabel-label': {
                        fontSize: '18px', // Change label font size
                      },
                    }}
                  />
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg" disabled={!contact}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3 className="text-[17px] font-bold">Contact Info</h3>
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
