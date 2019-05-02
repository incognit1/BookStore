import styled from 'styled-components';

export const Button = styled.button`
  font-size: 14px;
  color: ${(props) => props.primaryColor ? props.theme.primary : '#333'};
  text-transform: uppercase;
  font-family: Arial, sans-serif;
  &:hover {
    color: ${(props) => props.primaryColor ? props.theme.primaryDark : '#000'};  
  }
`;
