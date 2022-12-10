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
           },
        async getUserProjects(userId) {
            const { data, error } = await supabase
            .from('tasks')
            .select('project_id')
            .eq('user_id', userId)
               return{data,error}
           }
    }
}

export default factory()


//86f4ed31-0cda-43ca-83ab-33e54c7f8612


