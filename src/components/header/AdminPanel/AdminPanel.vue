<template>
  <div div v-if="isAuthenticated" class="my-8 mx-12">
    <h1 class="mt-8 mb-4 uppercase font-medium leading-tight text-2xl mt-0 mb-2 text-teal-600">
      {{ $t("ADMIN_TITLE") }}
    </h1>
    <table class="table-fixed overflow-auto mt-8">
      <thead>
        <tr>
          <th class="w-1/2 px-4 py-2">{{ $t("TITLE") }}</th>
          <th class="w-1/4 px-4 py-2">{{ $t("DESCRIPTION") }}</th>
          <th class="w-1/4 px-4 py-2">{{ $t("STATUS") }}</th>
          <th class="w-1/4 px-4 py-2">{{ $t("PROJECT") }}</th>
          <th class="w-1/4 px-4 py-2">{{ $t("ACTIONS") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in taskList" :key="task.id" class="bg-gray-400 py-8">
          <td class="border px-4 py-2 uppercase font-bold">{{ task.name }}</td>
          <td class="border px-4 py-2">{{ task.description }}</td>
          <td class="border px-4 py-2">{{ nameStatus[task.status] }}</td>
          <td class="border px-4 py-2">{{ task.project_id }}</td>
          <td class="border px-4 py-2 space-x-2">
            <font-awesome-icon
              icon="fa-trash-can"
              class="ml-4 delete"
              v-on:click="openDelete(task.id)"
            />
            <font-awesome-icon
              icon="fa-pencil"
              class="icon"
              v-on:click="openModalEdit(
                  task.id,
                  task.name,
                  task.description,
                  task.user_id,
                  task.project_id
                )"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <TaskModal
      v-if="showEditModal"
      @close="showEditModal = false"
      @reload="getTasks"
      :windowTitle="$t('EDIT_TASK')"
      :idTask="editIdTask"
      :taskTitle="editName"
      :taskDescription="editDescription"
      :user_id="editUserId"
      :user_fullName="editUserName"
      :project="editProject"
      :action="taskActionEdit"
    >
    </TaskModal>
    <DeleteModal
    v-if="showDeleteModal"
    @close="showDeleteModal = false"
    @reload="getTasks"
    :windowTitle="$t('DELETE_TASK')"
    :subtitle="$t('SUBTITLE_DELETE')"
    :message="$t('MESSAGE_DELETE')"
    :idTask="editIdTask"
    ></DeleteModal>
  </div>
</template>
<script>
import * as constants from "@/components/common/constants.js";
import * as authFunction from "@/components/common/helpers";
import taskService from "@/services/taskService";
import loginService from "@/services/loginService";
import TaskModal from "@/components/common/sharedModules/TaskModal.vue";
import DeleteModal from "@/components/header/AdminPanel/DeleteModal.vue"
export default {
  name: "AdminPanel",
  components: { TaskModal,DeleteModal },
  data() {
    return {
      showEditModal: false,
      taskList: [],
      nameStatus: constants.TASKS_STATUS,

      taskActionEdit: constants.TASK_ACTIONS.EDIT,
      editIdTask: "",
      editName: "",
      editDescription: "",
      editProject: "",
      editUserId: "",
      editUserName: "",

      showDeleteModal: false,
    };
  },
  computed: {
    isAuthenticated() {
      let isAuth = authFunction.getAuthenticated();
      if (isAuth === "true") {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    openEdit() {
      this.showEditModal = true;
    },
    openDelete(id) {
      this.editIdTask= id
      this.showDeleteModal=true
    },
    async getTasks() {
      let prueba = await taskService.getAllTasks();
      this.taskList = prueba.tasks;
    },
    openModalEdit(id,name, description, user_id, project_id) {
      this.editIdTask= id
      this.editName = name;
      this.editDescription = description;
      this.editProject = "" + project_id;
      this.editUserId = user_id;
      this.getUserName(user_id)
      console.log(this.editUserName)
    },
    getUserName(id){
      loginService.getName(id).then((response) =>{ this.editUserName = response.data[0].full_name; this.showEditModal = true;})
    }
  },
};
</script>
<style>
.icon:hover {
  color: rgb(245, 213, 4);
}
.delete:hover {
  color: rgb(195, 17, 17);
}
.icon {
  color: rgb(255, 255, 255);
}
.delete {
  color: rgb(254, 254, 254);
}
</style>
