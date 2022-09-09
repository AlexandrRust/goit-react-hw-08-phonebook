import styled from 'styled-components';

export const FirstButton = styled.button`
  display: inline-block;
  margin-top: 15px;
  width: 150px;
  padding: 3px;
  border-color: gray;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: blue;
    border-color: blue;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
