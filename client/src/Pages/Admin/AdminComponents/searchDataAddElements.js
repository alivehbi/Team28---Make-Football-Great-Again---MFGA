import styled from "styled-components";
import { Button, Card, Form, Input, Label } from "reactstrap";

export const ContainerCard = styled(Card)`
position:absolute;

  right: 30%;
  height: 20rem;
  width: 20rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:20%;
  border-bottom-left-radius: 20%;
  border-top-left-radius: 20%;
  border-bottom-right-radius:20%;
  top: 20%;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;

export const Title = styled.h1`
  position: absolute;
  top: 2%;
  left: 20%;

  width:60%;
  height:10%;

  color: rgb(0, 0, 0, 0.5);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-align: center;

  font-size: 115%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const StyledForm = styled(Form)`
  width: 90%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 5%;
`;

export const StyledInputName = styled(Input)`
  position: absolute;
  top: 15%;
  left:5%;

  width: 90%;
  height: 15%;

  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;
  background: rgb(0, 0, 0, 0.1);
`;

export const StyledInputRoute = styled(Input)`
  position: absolute;
  top: 50%;
  left:5%;
 
  width: 90%;
  height: 15%;


  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;

  background: rgb(0, 0, 0, 0.1);
`;


export const StyledNameLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 1%;

  font-size: 1.1rem;

  color: rgb(0, 0, 0, 0.5);
`;

export const StyledRouteLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 35%;

  font-size: 1.1rem;

  color: rgb(0, 0, 0, 0.5);
`;

export const StyledButton = styled(Button)`
  position: absolute;
  bottom: 10%;
  display: flex;
  width: 50%;
  height: 15%;
  left: 25%;

  border: none;
  justify-content: center;

  color: rgb(0, 0, 0, 0.5);

  background: linear-gradient(to right, #ff3838 0%, #ff4d4d 0%, #ffffff 2000%);
`;


