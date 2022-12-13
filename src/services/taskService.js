import { supabase } from "./supabaseService";

function factory() {
  return {
    async getAllTasks() {
      let { data: tasks, error } = await supabase.from("tasks").select("*");

      return { tasks, error };
    },
    async updateTaskStatus(id, newStatus) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ status: newStatus })
        .eq("id", id);
      return { data, error };
    },
    async getUserProjects(userId) {
      const { data, error } = await supabase
        .from("tasks")
        .select("project_id")
        .eq("user_id", userId);
      return { data, error };
    },
    async createTask(taskName, taskDescription, taskProject, taskUser) {
      const { data, error } = await supabase.from("tasks").insert([
        {
          name: taskName,
          description: taskDescription,
          project_id: taskProject,
          status: 0,
          user_id: taskUser,
        },
      ]);
      return { data, error };
    },
    async editTask(id, taskName, taskDescription, taskProject, taskUser) {
      const { data, error } = await supabase
        .from("tasks")
        .update({
          name: taskName,
          description: taskDescription,
          project_id: taskProject,
          user_id: taskUser,
        })
        .eq("id", id);
      return { data, error };
    },

    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", id)
        return { data, error };
    },
  };
}

export default factory();

//86f4ed31-0cda-43ca-83ab-33e54c7f8612
