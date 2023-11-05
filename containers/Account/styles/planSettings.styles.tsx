import { DatePicker } from 'antd';
import styled from 'styled-components';

export const DatePickerFooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

export const StyledTrialDatePicker = styled(DatePicker)`
  padding: 0.7rem;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
  outline: none;
  border-radius: 6px;
  z-index: 2;

  &:hover {
    outline: none;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
  }
`;

export const SubSectionHeading = styled.h3<{ $mr?: string; $mb?: string }>`
  font-weight: 500;
  font-size: 14px;
  color: #6b778c;
  margin: 0;
  padding: 0;
  margin-right: ${(props) => props.$mr && props.$mr};
  margin-bottom: ${(props) => props.$mb && props.$mb};
`;

export const TrialColumn = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const FreezeColumn = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  @media (min-width: 485px) {
    justify-content: flex-end;
  }
  @media (min-width: 768px) {
    margin: 0;
    justify-content: center;
  }
`;

export const ArchiveColumn = styled.div`
  display: flex;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const ArchiveContentContainer = styled.div`
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column;

    button {
      margin-top: 0.6rem;
    }
  }
`;
