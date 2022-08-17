import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from 'reactstrap';
import API_URL from "../const/Url";

function Read() {
  const [apiData, setApiData] = useState([]);

  const navigate = useNavigate();

  const updateUser = ({id, firstName, lastName, checked}) => {
    localStorage.setItem('id', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('checked', checked);
    navigate('/update');
  }

  const deleteUser = async (id) => {
    await axios.delete(API_URL + '/' + id);
    getData();
  }

  const getData = async () => {
    const response = await axios.get(API_URL);
    setApiData(response.data);
  } 

  useEffect(()=> {
    getData();
  }, []);

  return (
    <Container>
        <Row className="border">
          <Col className="border text-center">
            ID
          </Col>
          <Col className="border text-center">
            First Name
          </Col>
          <Col className="border text-center">
            Last Name
          </Col>
          <Col className="border text-center">
            Checked
          </Col>
          <Col className="border text-center">
            Delete/Update
          </Col>
        </Row>
        { 
        apiData.map(user => 
          <Row key={user.id}>
            <Col className="text-center">
              {user.id}
            </Col>
            <Col className="text-center">
              {user.firstName}
            </Col>
            <Col className="text-center">
              {user.lastName}
            </Col>
            <Col className="text-center">
              {user.checked ? 'checked' : 'unchecked'}
            </Col>
            <Col className="text-center">
              <Button 
                onClick={() => {
                  deleteUser(user.id);
                }}
                className="bg-danger">
                  Delete
              </Button>
              <Button 
                onClick={() => {
                  updateUser(user);
                }}
                className="bg-warning">
                  Update
              </Button>
            </Col>
          </Row>
          )
        }
      </Container>
  )
}
       
export default Read;  
        
        
       