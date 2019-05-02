import styled from 'styled-components'

export const Card = styled.div`
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 16px;
    border-radius: 4px;
    background: #fff;
    color: rgba(0,0,0,.87);
    margin: ${(props) => props.margin || '0px'}
`;

export const CardImage = styled.div`
  height: 200px;
  width: 100%;
  background-image: ${({backgroundImage}) => backgroundImage ? `url(${backgroundImage})` : 'none'};
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 10px 10px;
`;
