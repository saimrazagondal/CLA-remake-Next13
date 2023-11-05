import React, { useContext } from 'react';
import Divider from '@/components/Divider';
import {
  SectionHeading,
  GridContainer,
  SectionContainer,
  SectionHeadingContainer,
} from '@/containers/Account/styles/main.styles';

import CustomButton from '@/components/Button';
import { SenderInfo } from './components';
import { useParams } from 'next/navigation';
import { AccountStateContext } from '@/context';

const CoBranding: React.FC = () => {
  const params = useParams();
  const isEditPage = params?.['account-type'] === 'modify-account';

  const {
    state: {
      saveButtonsDisabled: { coBranding },
    },
  } = useContext(AccountStateContext);

  return (
    <SectionContainer>
      <SectionHeadingContainer>
        <SectionHeading>CoBranding</SectionHeading>
        {isEditPage && (
          <CustomButton variant='save' text='Save' disabled={coBranding} />
        )}
      </SectionHeadingContainer>
      <Divider $mt='0.5rem' />

      <GridContainer $columns_lg={2}>
        <div />
        <SenderInfo />
      </GridContainer>
    </SectionContainer>
  );
};

export default CoBranding;
