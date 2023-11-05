import React from 'react';
import { Container, ContentContainer } from './styles/main.styles';
import CustomerInformation from './CustomerInformation';
import PlanSettings from './PlanSettings';
import CoBranding from './CoBranding';

const Account: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <CustomerInformation />
        <PlanSettings />
        <CoBranding />
      </ContentContainer>
    </Container>
  );
};

export default Account;
