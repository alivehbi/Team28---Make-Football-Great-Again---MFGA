import styled from "styled-components";
import { Button, Card, Form, Input, Label, NavLink } from "reactstrap";

export const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;

  justify-content: center;

  z-index: 0;
  overflow-x: auto;
  background: #EAE7E7;
  flex: 1;
`;

export const ContainerCard = styled(Card)`
  position: relative;
  height: 700px;
  width: 450px;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius: 17%;
  border-bottom-left-radius: 20%;
  border-top-left-radius: 10%;
  top: 4rem;

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;

export const Title = styled.h1`
  position: absolute;
  top: 50px;
  left: 20%;
  right: 20%;

  color: rgb(0, 0, 0, 0.5);
  text-decoration: underline;
  text-decoration-thickness: 1px;

  font-size: 2.18rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const StyledForm = styled(Form)`
  width: 90%;
  height: 70%;
  position: absolute;
  top: 8rem;
  left: 1.6rem;
  right: 1.6rem;
`;

export const StyledInputUsername = styled(Input)`
  position: relative;
  left: 5rem;
  width: 70%;
  


  border: none;

  background: rgb(0, 0, 0, 0.1);
`;
export const StyledInputName= styled(Input)`
  position: relative;
  left: 5rem;
  width: 70%;
  top: 1rem;
  border: none;

  background: rgb(0, 0, 0, 0.1);
`;
export const StyledInputPassword = styled(Input)`
  position: relative;
 
  left: 5rem;
  width: 70%;
  top: 3rem;
  border: none;

  background: rgb(0, 0, 0, 0.1);
`;

export const StyledUsernameLabel = styled(Label)`
  position: center;
  

  font-size: 1rem;
  font-weight: bold;

  color: rgb(0, 0, 0, 0.5);
`;


export const StyledButton = styled(Button)`
  position: absolute;
  top: 21rem;
  display: flex;
  width: 30%;
  height: 35px;
  left: 15rem;

  border: none;
  justify-content: center;
  font-weight: bold;
  

  color: rgb(0, 0, 0, 0.8);

  background: linear-gradient(to right, #ff3838 0%, #ff4d4d 0%, #ffffff 2000%);
`;
export const StyledButton2 = styled(Button)`
  position: absolute;
  top: 21rem;
  display: flex;
  width: 50%;
  height: 35px;
  left: 35px;
  font-weight: bold;

  border: none;
  justify-content: center;

  color: rgb(0, 0, 0, 0.8);

  background: #ffffff
`;

export const StyledHr = styled.hr`
  top: 27.5rem;
  left: 25%;
  position: absolute;
  width: 50%;
  height: 1px;

  color: black;
`

export const StyledP = styled.p`
  top: 25rem;
  left: 25%;
  position: absolute;
  width: 50%;
  height: 1px;
  color: black;
`

export const StyledNavLink = styled(NavLink)`
  position: absolute;
  top: 29rem;
  left: 43%;
  color: #ff3838;
`

export const StyleUsername = styled.p`
    position: absolute;
    top: 2.3rem;
`
export const StylePass = styled.p`
    position: absolute;
    top: 13rem;
`
export const StyleName = styled.p`
    position: absolute;
    top: 7.2rem;
`

export const StyledNameError = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 9.2rem;
  text-align: center;
  font-size: 10px;
  color: red;
`;

export const StyledPassError = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 15rem;
  text-align: center;
  font-size: 10px;
  color: red;
`;

export const StyledUsernameError = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 4.3rem;
  text-align: center;
  font-size: 10px;
  color: red;
`;