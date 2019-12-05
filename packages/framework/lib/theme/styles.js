import styled from "styled-components";

export const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
`;

export const Swatch = styled.div`
  align-items: flex-end;
  background-color: ${props => props.backgroundColor};
  display: flex;
  height: 250px;
  margin: 20px;
  width: 100%;
`;

export const Label = styled.span`
  color: white;
  font-family: Arial;
  font-size: 1.2em;
  letter-spacing: 1.2px;
  margin: 0 0 10px 15px;
`;
