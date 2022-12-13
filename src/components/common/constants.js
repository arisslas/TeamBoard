import { i18n } from '@/i18n'

export const TASK_ACTIONS = {
  CREATE:'create',
  EDIT:'edit'
  }

export const TASKS_STATUS = {
    0: i18n.t('BACKLOG'),
    1: i18n.t('TO_DO'),
    2: i18n.t('PROGRESS'),
    3: i18n.t('REVIEW'),
    4: i18n.t('DONE')
}