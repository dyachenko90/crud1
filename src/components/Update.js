import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import API_URL from "../const/Url";

function Update() {

  const [ id, setId ] = useState(''); 
  const [ firstName, setFirstName ] = useState(''); 
  const [ lastName, setLastName ] = useState(''); 
  const [ checked, setChecked ] = useState(false);
  const navigate = useNavigate();

  const updateUser = async () => {
    await axios.put(API_URL + '/' + id, {
      firstName,
      lastName,
      checked
    })
    navigate('/read');
  }
  
  useEffect(() => {
    setId(localStorage.getItem('id'));
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setChecked(localStorage.getItem('checked'));
  }, [])

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
        <Button onClick={updateUser} className="bg-info">Update</Button>
      </Form>
    );
  }
  
  export default Update;