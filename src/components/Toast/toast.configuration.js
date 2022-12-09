

const defaultStyles = ['toast-wrapper', 'toast-margin', 'toast-top-center']
export const toastConfiguration = {
  transition: 'Vue-Toastification__fade',
  timeout: 3000,
  closeButton: false,
  showCloseButtonOnHover: false,
  draggable: false,
  maxToasts: 1,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  hideProgressBar: true,
  containerClassName: 'container-top-center',
  toastClassName: defaultStyles,
  position: 'top-center',
  toastDefaults: {
    ['error']: {
      toastClassName: ['toast-background-error', ...defaultStyles]
    },
    ['success']: {
      toastClassName: ['toast-background-success', ...defaultStyles]
    },
    ['info']: {
      toastClassName: ['toast-background-info', ...defaultStyles]
    },
    ['warning']: {
      toastClassName: ['toast-background-warning', ...defaultStyles]
    }
  }
}
