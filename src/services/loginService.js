import { supabase } from "./supabaseService";

function factory() {
  return {
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { user, error };
    },
    async signUp(email, password) {
      const { data, error } = await supabase.auth.signUp({ email, password });
      return { data, error };
    },
    async addPersonalData(id, name) {
      const { data, error } = await supabase
        .from("profiles")
        .insert([{ id: id, full_name: name }]);
      return { data, error };
    },
    async updatePersonalData(id, name) {
      const { data, error } = await supabase
        .from("profiles")
        .update({ full_name: name })
        .eq("id", id);
      return { data, error };
    },

    async getAllUsers() {
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("id, full_name");
        return { data: profiles, error }
    },
    async getName(id){
        let { data: profiles, error } = await supabase
      .from('profiles')
      .select('full_name')
      .eq("id", id);
  return { data: profiles, error}
    }
  };
}

export default factory();
