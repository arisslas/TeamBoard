import { supabase } from './supabaseService'

function factory() {
    return {
        async getAllTasks() {
            let { data: tasks, error } = await supabase
                .from('tasks')
                .select('*')

            return { tasks, error }
        },
        async updateTaskStatus(id,newStatus) {
            const { data, error } = await supabase
            .from('tasks')
            .update({status:newStatus  })
            .eq('id', id)
               return{data,error}
           }
    }
}

export default factory()


