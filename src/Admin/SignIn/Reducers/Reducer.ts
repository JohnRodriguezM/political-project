import { FormActions } from './Actions';

interface FormState {
  email: string;
  password: string;
}

interface FormAction {
  type: FormActions;
  payload: {
    name: string;
    value: string;
  };
}

export const initialState: FormState = {
  email: '',
  password: '',
};


export const formReducer = (state: FormState, action: FormAction): FormState => {

  const { payload } = action;

  switch (action.type) {
    case FormActions.SIGN_IN:
      return { ...state, ...action.payload };
    case FormActions.HANDLE_CHANGE:
      return { ...state, [payload.name]: payload.value };
    case FormActions.CLEAN_FORM: return initialState;
    default:
      return state;
  }
}