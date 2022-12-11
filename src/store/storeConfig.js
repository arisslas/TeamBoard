import { user } from './modules/user'
import { tasks} from './modules/tasks'
import { projects } from './modules/projects'


export const storeConfig = {
  modules: {
    tasks: tasks,
    projects: projects,
    user: user
  }
}
