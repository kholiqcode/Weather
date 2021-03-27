export const showToast = (message = 'Error') => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};
