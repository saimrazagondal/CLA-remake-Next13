import React, { useState, useContext, useCallback } from 'react';
import {
  SubSectionHeading,
  DatePickerFooterContainer,
} from '../../styles/planSettings.styles';
import Button from '@/components/Button';
import confirmDialog from '@/components/ConfirmDialog';
import { message, Spin } from 'antd';
import { PLAN_SETTINGS } from '../constants';
import { SubText } from '../../styles/main.styles';
import { StyledTrialDatePicker } from '../../styles/planSettings.styles';
import { AccountStateContext } from '@/context';
import { ActionTypes } from '../../state';
// import axios, { baseUrl } from '../../../utils/axios';
import dayjs from 'dayjs';

import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(localizedFormat);
dayjs.extend(utc);

const TrialExtension: React.FC = () => {
  const {
    state: {
      planSettings: { trialExpiry: value },
    },
    dispatch,
  } = useContext(AccountStateContext);

  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const extendTrial = useCallback(async () => {
    setLoading(true);
    try {
      // await axios.put(`${baseUrl('entities')}/tenants`, {
      //   tenantId,
      //   trialExpiry: value,
      // });
      message.success('Trial updated successfully');
      setOpen(false);
    } catch (err) {
      console.log(err);
      message.error('Could not update trial');
    } finally {
      setLoading(false);
    }
  }, []);

  const footer = (
    <DatePickerFooterContainer>
      <Button
        variant='datePickerFooter'
        text='APPLY'
        disabled={disabled || loading}
        onClick={() =>
          confirmDialog(PLAN_SETTINGS.CONFIRMATION.TRIAL_EXTENSION, extendTrial)
        }
      />
    </DatePickerFooterContainer>
  );

  return (
    <Spin spinning={loading}>
      <SubSectionHeading $mb='10px'>Trial Extension</SubSectionHeading>
      <StyledTrialDatePicker
        open={open}
        onClick={() => setOpen((prev) => !prev)}
        allowClear={false}
        format={(value) => `Trial valid till: ${value.format('LL')}`}
        disabledDate={(currentDate) =>
          currentDate.isBefore(dayjs().endOf('day'))
        }
        showToday={false}
        value={dayjs(value || undefined)}
        onChange={(_, dateString) => {
          setDisabled(false);
          dispatch({
            type: ActionTypes.UPDATE_TRIAL_EXTENSION,
            payload: dayjs(dateString).utc().toISOString(),
          });
        }}
        renderExtraFooter={() => footer}
      />
      <SubText>Set the validity date for extension</SubText>
    </Spin>
  );
};

export default TrialExtension;
