import React, { useContext } from 'react';
import Divider from '@/components/Divider';
import {
  SectionHeading,
  GridContainer,
  SectionContainer,
} from '@/containers/Account/styles/main.styles';
import {
  ArchiveColumn,
  FreezeColumn,
  TrialColumn,
} from '../styles/planSettings.styles';
import { TrialExtension, Freeze, Archive } from './components';
import { AccountStateContext } from '@/context';

const PlanSettings: React.FC = () => {
  const {
    state: {
      status,
      planInformation: { billingMethod },
    },
  } = useContext(AccountStateContext);

  const trialUser = status === 'TRIAL';

  /* customers on trial */
  const showTrialSection = true || trialUser;

  /* non-stripe paid or freezed customers */
  const showFreezeSection =
    true ||
    ((status === 'PAID' || status === 'FREEZED') && billingMethod !== 'stripe');

  /* non-stripe trial & paid customers  */
  const showArchiveSection =
    true ||
    (billingMethod !== 'stripe' &&
      (status === 'PAID' ||
        status === 'OPEN' ||
        status === 'TRIAL' ||
        status === 'FREEZED'));

  return (
    (showTrialSection || showFreezeSection || showArchiveSection) && (
      <SectionContainer>
        <SectionHeading>Plan Settings</SectionHeading>
        <Divider $mt='0.5rem' />

        <GridContainer>
          {showTrialSection && (
            <TrialColumn>
              <TrialExtension />
            </TrialColumn>
          )}

          {showFreezeSection && (
            <FreezeColumn>
              <Freeze />
            </FreezeColumn>
          )}

          {showArchiveSection && (
            <ArchiveColumn>
              <Archive />
            </ArchiveColumn>
          )}
        </GridContainer>
      </SectionContainer>
    )
  );
};

export default PlanSettings;
