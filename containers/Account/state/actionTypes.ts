import { SenderInfo, CustomerInformation } from './initialState';

export const enum ActionTypes {
  UPDATE_CUSTOMER_INFORMATION = 'update_customer_information',
  TOGGLE_FREEZE_ACCOUNT = 'toggle_freeze_account',
  UPDATE_TRIAL_EXTENSION = 'update_trial_extension',
  UPDATE_SENDER_INFO = 'update_sender_info',
  TOGGLE_CO_BRANDING_SAVE_BUTTON = 'toggle_coBranding_save_button',
  TOGGLE_PLANS_SAVE_BUTTON = 'toggle_plans_save_button',
  TOGGLE_CTAS_SAVE_BUTTON = 'toggle_ctas_save_button',
}

export type Action =
  | {
      type: ActionTypes.UPDATE_CUSTOMER_INFORMATION;
      payload: Partial<CustomerInformation>;
    }
  | {
      type: ActionTypes.TOGGLE_FREEZE_ACCOUNT;
    }
  | {
      type: ActionTypes.UPDATE_TRIAL_EXTENSION;
      payload: string;
    }
  | {
      type: ActionTypes.UPDATE_SENDER_INFO;
      payload: Partial<SenderInfo>;
    }
  | {
      type: ActionTypes.TOGGLE_CO_BRANDING_SAVE_BUTTON;
      payload: boolean;
    }
  | {
      type: ActionTypes.TOGGLE_CTAS_SAVE_BUTTON;
      payload: boolean;
    }
  | {
      type: ActionTypes.TOGGLE_PLANS_SAVE_BUTTON;
      payload: boolean;
    };
