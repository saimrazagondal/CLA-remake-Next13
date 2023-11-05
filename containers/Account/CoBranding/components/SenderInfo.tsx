import React, { useContext, useCallback } from 'react';
import Input from '@/components/Input';
import { AccountStateContext } from '@/context';
import { ActionTypes } from '@/containers/Account/state';

const SenderInfo = () => {
  const {
    state: {
      senderInfo: { senderName, senderEmail },
    },
    dispatch,
  } = useContext(AccountStateContext);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.UPDATE_SENDER_INFO,
      payload: {
        [e.target.name]: e.target.value,
      },
    });
  }, []);

  return (
    <div>
      <Input
        variant='formBasic'
        label='Sender Name'
        value={senderName}
        name='senderName'
        placeholder='John Doe'
        required
        onChange={handleChange}
      />
      <Input
        variant='formBasic'
        name='senderEmail'
        label='Sender Email'
        placeholder='johndoe@email.com'
        type='email'
        required
        value={senderEmail}
        onChange={handleChange}
      />
    </div>
  );
};

export default SenderInfo;
