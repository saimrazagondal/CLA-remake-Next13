import styled from 'styled-components';

const StyledDivider = styled.hr<{
  $mb?: string;
  $mt?: string;
  $light?: boolean;
}>`
  margin: 0;
  padding: 0;
  margin-bottom: ${(props) => props.$mb};
  margin-top: ${(props) => props.$mt};
  background-color: ${(p) => !p.$light && p.theme.colors.dividers};
`;

export default StyledDivider;
