import axios from "axios";
import React, { useState } from "react";
import API_URL from "../const/Url.js";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Create() {

    const [ firstName, setFirstName ] = useState(''); 
    const [ lastName, setLastName ] = useState(''); 
    const [ checked, setChecked ] = useState(false);
    const navigate = useNavigate();

    const postData = async () => {
       await axios.post(API_URL, {
            firstName,
            lastName,
            checked
        })
        navigate('/read');
    }

    return (
      <Form> 
        <FormGroup className="d-flex align-items-center justify-content-around">
            <Label>First Name</Label>
            <Input 
                value={firstName}  
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
            >
            </Input>
        </FormGroup>
        <FormGroup className="d-flex align-items-center">
            <Label>Last Name</Label>
            <Input 
                value={lastName} 
                placeholder="Enter your last name"
                onChange={(e) => setLastName(e.target.value)}
            >
            </Input>
        </FormGroup>
        <FormGroup>
            <Input type="checkbox" 
                    checked={checked}
                    onChange={() => setChecked(!checked)}
            />
            <Label>I agree the terms</Label>
        </FormGroup>
        <Button onClick={postData} className="bg-info">Send</Button>
      </Form>
    );
  }
  
  export default Create;