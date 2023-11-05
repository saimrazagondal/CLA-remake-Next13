'use client';

import React, { useReducer } from 'react';
import { reducer, initialState } from '@/containers/Account/state';

import { AccountStateContext } from '@/context';
import Account from '@/containers/Account';

const Main: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AccountStateContext.Provider value={{ state, dispatch }}>
      <Account />
    </AccountStateContext.Provider>
  );
};

export default Main;
