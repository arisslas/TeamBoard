import { supabase } from './supabaseService'

function factory() {
    return {
        async getAllTasks() {
            let { data: tasks, error } = await supabase
                .from('tasks')
                .select('*')

            return { tasks, error }
        }
    }
}

export default factory()


