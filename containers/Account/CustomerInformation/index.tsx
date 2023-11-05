import React, { useContext, useCallback } from 'react';
import {
  GridContainer,
  SectionHeading,
} from '@/containers/Account/styles/main.styles';
import CustomInput from '@/components/Input';
import { ActionTypes } from '../state/actionTypes';
import { AccountStateContext } from '@/context';
import { useParams } from 'next/navigation';

const CustomerInformation: React.FC<{}> = () => {
  const params = useParams();
  const disabled = params?.['account-type'] !== 'create-account';

  const {
    state: {
      customerInformation: {
        company,
        contactName,
        email,
        firstName,
        lastName,
        phone,
      },
    },
    dispatch,
  } = useContext(AccountStateContext);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.UPDATE_CUSTOMER_INFORMATION,
      payload: {
        [e.target.name]: e.target.value,
      },
    });
  }, []);

  return (
    <div>
      <SectionHeading>Customer Information</SectionHeading>

      <GridContainer>
        <CustomInput
          variant='formBasic'
          label='Contact Name'
          placeholder='Contact Name'
          name='contactName'
          value={contactName}
          onChange={handleChange}
          disabled={disabled}
        />
        <CustomInput
          variant='formBasic'
          label='First Name'
          placeholder='First Name'
          name='firstName'
          value={firstName}
          onChange={handleChange}
          disabled={disabled}
        />
        <CustomInput
          variant='formBasic'
          label='Last Name'
          placeholder='Last Name'
          name='lastName'
          value={lastName}
          onChange={handleChange}
          disabled={disabled}
        />
        <CustomInput
          variant='formBasic'
          label='Company'
          placeholder='Company'
          name='company'
          value={company}
          onChange={handleChange}
          disabled={disabled}
        />
        <CustomInput
          variant='formBasic'
          label='Phone'
          placeholder='0333 3333333'
          name='phone'
          type='number'
          value={phone}
          onChange={handleChange}
          disabled={disabled}
        />
        <CustomInput
          variant='formBasic'
          type='email'
          label='Email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleChange}
          disabled={disabled}
        />
      </GridContainer>
    </div>
  );
};

export default CustomerInformation;
