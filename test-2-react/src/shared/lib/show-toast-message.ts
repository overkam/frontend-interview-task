import { toast, ToastOptions, TypeOptions } from 'react-toastify';

export const showToastMessage = (typeMessage: TypeOptions, message: string, otherProps?: ToastOptions) => {
  toast(message, { type: typeMessage, ...otherProps });
};
