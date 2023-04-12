import styled from "styled-components";
import BadgeEmployee from "./BadgeEmployee";

export const BadgeEmployeeStyle = styled(BadgeEmployee)`
  background-color: ${(props) => props.backgroundColor};
`;
