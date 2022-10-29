export const ToastRConfig = {
  // * toast show close button
  // * default: false
  closeButton: true,
  // * show toast progress bar
  // * default: false
  progressBar: true,
  // * toast time to live in milliseconds
  // * default: 5000
  timeOut: 5000,
  // * time to close after a user hovers over toast
  // * default: 1000
  extendedTimeOut: 1000,
  //  * render html in toast message (possibly unsafe)
  //  * default: false
  enableHtml: false,
  // * css class on toast container
  // * default: toast-top-right
  // * position available:
  // 'toast-center-center'
  // 'toast-top-center'
  // 'toast-bottom-center'
  // 'toast-top-full-width'
  // 'toast-bottom-full-width'
  // 'toast-top-left'
  // 'toast-top-right'
  // 'toast-bottom-right'
  // 'toast-bottom-left'
  positionClass: 'toast-top-right',
  // * clicking on toast dismisses it
  // * default: true
  tapToDismiss: true,
  //  * max toasts opened. Toasts will be queued
  //  * Zero is unlimited
  //  * default: 0
  maxOpened: 0,
  //  * dismiss current toast when max is reached
  //  * default: false
  autoDismiss: false
}
