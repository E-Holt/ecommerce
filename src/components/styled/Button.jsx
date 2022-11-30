import styled from 'styled-components'

const Button = styled.button`
  height: 40px;
  border: none;
  background-color: rgba(38, 115, 141, 1);
  border-radius: 10px;
  font-size: 20px;
  padding:0px 15px;
  /* For one value to change use this: */
  color: ${(props) => props.greaterThanFive ? 'black' : 'white'};
  cursor: pointer;
  :hover {
    background-color: rgba(38, 115, 141, 0.8);
  }
  :disabled {
    background-color: grey;
    cursor: not-allowed;
  }

  /* If you want more than one valie to change use this: */
  /* ${(props) => {
    return `
      color: ${props.greaterThanFive ? 'black' : 'white'};
    `
  }} */
`

export default Button