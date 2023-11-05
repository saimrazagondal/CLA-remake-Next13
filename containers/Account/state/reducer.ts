import { Action, ActionTypes, INITIAL_STATE_TYPE } from '.';

export default function (
  state: INITIAL_STATE_TYPE,
  action: Action
): INITIAL_STATE_TYPE {
  switch (action.type) {
    case ActionTypes.UPDATE_CUSTOMER_INFORMATION: {
      const prevState = state.customerInformation;
      return {
        ...state,
        customerInformation: {
          ...prevState,
          ...action.payload,
        },
      };
    }

    case ActionTypes.TOGGLE_FREEZE_ACCOUNT: {
      const prevState = state.planSettings;
      return {
        ...state,
        planSettings: {
          ...prevState,
          freeze: !state.planSettings.freeze,
        },
      };
    }

    case ActionTypes.UPDATE_TRIAL_EXTENSION: {
      const prevState = state.planSettings;
      return {
        ...state,
        planSettings: {
          ...prevState,
          trialExpiry: action.payload,
        },
      };
    }

    case ActionTypes.UPDATE_SENDER_INFO: {
      const prevState = state.senderInfo;
      // update sender info state and enable save button on coBranding section
      return {
        ...state,
        senderInfo: {
          ...prevState,
          ...action.payload,
        },
        saveButtonsDisabled: {
          ...state.saveButtonsDisabled,
          coBranding: false,
        },
      };
    }

    default:
      return state;
  }
}
