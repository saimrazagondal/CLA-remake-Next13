import {
  Action,
  INITIAL_STATE_TYPE,
  initialState,
} from '@/containers/Account/state';
import React from 'react';

interface AccountStateContextType {
  state: INITIAL_STATE_TYPE;
  dispatch: React.Dispatch<Action>;
}

export const AccountStateContext = React.createContext<AccountStateContextType>(
  {
    state: initialState,
    dispatch: () => undefined,
  }
);
