import AppToast from './AppToast.vue'

export function createToast(title, text) {
  return {
    component: AppToast,
    props: {
      title,
      text
    }
  }
}
