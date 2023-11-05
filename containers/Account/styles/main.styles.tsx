import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 90%;

  @media (min-width: 485px) {
    width: 85%;
  }

  @media (min-width: 992px) {
    width: 70%;
  }
`;

export const GridContainer = styled.div<{
  $columns_sm?: number;
  $columns_md?: number;
  $columns_lg?: number;
}>`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(${(p) => p.$columns_sm || 1}, minmax(0, 1fr));
  margin-top: 1rem;

  @media (min-width: 485px) {
    grid-template-columns: repeat(${(p) => p.$columns_md || 2}, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(${(p) => p.$columns_lg || 3}, minmax(0, 1fr));
  }
`;

export const SectionHeading = styled.h2`
  font-size: 18px;
  color: #323c47;
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: ${(p) => p.theme.textColors.sectionHeadings};
`;

export const SectionContainer = styled.div`
  margin-top: 2.5rem;
`;

export const SectionHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SubText = styled.p`
  margin: 0;
  padding: 0;
  color: #6b778c;
  font-size: 11px;
  margin-top: 5px;
`;
