export interface CustomerInformation {
  contactName: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
}

export interface PlanInformation {
  billingMethod: 'stripe';
}

export interface PlanSettings {
  freeze: boolean;
  trialExpiry: string;
}

export interface SenderInfo {
  senderName: string;
  senderEmail: string;
}

interface SaveButtonsDisabledState {
  coBranding: boolean;
  planInformation: boolean;
  CTAs: boolean;
}

export type INITIAL_STATE_TYPE = {
  status: 'TRIAL' | 'PAID' | 'FREEZED' | 'OPEN';
  tenantId?: number;
  customerInformation: CustomerInformation;
  planInformation: PlanInformation;
  planSettings: PlanSettings;
  senderInfo: SenderInfo;
  saveButtonsDisabled: SaveButtonsDisabledState;
};

const initialState: INITIAL_STATE_TYPE = {
  status: 'PAID',
  tenantId: undefined,
  customerInformation: {
    contactName: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
  },
  planInformation: {
    billingMethod: 'stripe',
  },
  planSettings: {
    freeze: false,
    trialExpiry: '',
  },
  senderInfo: {
    senderName: '',
    senderEmail: '',
  },
  saveButtonsDisabled: {
    coBranding: true,
    CTAs: true,
    planInformation: true,
  },
};

export default initialState;
