<template>
  <div v-if="isAuthenticated">
    <h1 class="my-8 uppercase">{{ $t("TASK_TITLE") }}</h1>
    <button
      class="bg-transparent hover:bg-teal-600 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded mb-4"
      v-on:click="openModalCreate()"
    >
      {{ $t("CREATE_TASK") }}
    </button>
    <div
      class="flex mt-4 mx-8 example-parent mx-10 my-10 flex items-strech overflow-auto"
    >
      <div
        v-for="(item, i) in columns"
        :key="i"
        :id="i"
        class="example-dropzone mx-2 bg-gray-500 rounded"
        v-on:drop="drop"
        v-on:dragover="allowDrop"
      >
        <div
          class="bg-slate-400 py-2 uppercase "
          v-on:drop.stop="noAllowDrop"
          v-on:dragover.stop="noAllowDrop"
        >
          {{ $t(item.name) }}
        </div>
        <div
          v-for="task in taskList.filter((task) => task.status == i)"
          :key="task.id"
          v-on:dragstart="dragStart"
          draggable="true"
          :id="task.id"
          v-on:drop.stop="noAllowDrop"
          v-on:dragover.stop="noAllowDrop"
          @mouseenter="(hover = true), (selected = task.id)"
          @mouseleave="(hover = false), (selected = '')"
          class="my-4 p-4 bg-white rounded shadow-lg"
        >
          <div
            class="uppercase font-bold mb-2"
            :class="{ 'line-through': task.status == 4 }"
          >
            {{ task.name }}
          </div>
          <div class="text-gray-700 text-base">{{ task.description }}</div>
          <div class="px-6 pt-4 pb-2">
            <button
              v-if="hover && selected == task.id"
              v-on:click="
                openModalEdit(
                  task.id,
                  task.name,
                  task.description,
                  task.user_id,
                  task.project_id
                )
              "
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {{ $t("EDIT") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <TaskModal
      v-if="showCreateModal"
      @close="showCreateModal = false"
      @reload="getTasks"
      :windowTitle="$t('CREATE_TASK')"
      :action="taskActionCreate"
    >
    </TaskModal>

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
  </div>
</template>
<script>
import * as constants from "@/components/common/constants.js";
import * as authFunction from "@/components/common/helpers"
import taskService from "@/services/taskService";
import loginService from "@/services/loginService"
import TaskModal from "@/components/common/sharedModules/TaskModal.vue";
export default {
  name: "TaskPanel",
  components: { TaskModal },
  data() {
    return {
      columns: [
        { name: "BACKLOG" },
        { name: "TO_DO" },
        { name: "PROGRESS" },
        { name: "REVIEW" },
        { name: "DONE" },
      ],
      taskList: [],
      showCreateModal: false,
      showEditModal: false,
      taskActionCreate: constants.TASK_ACTIONS.CREATE,
      taskActionEdit: constants.TASK_ACTIONS.EDIT,
      hover: false,
      selected: "",

      editIdTask:"",
      editName: "",
      editDescription: "",
      editProject: "",
      editUserId: "",
      editUserName: "",
    };
  },
  computed: {
    isAuthenticated() {
      let isAuth = authFunction.getAuthenticated()
      if (isAuth === 'true' ) {
        return true
      }else {
         return false
      }
    }
  },
  mounted() {
    this.isAuthenticated
    this.getTasks();
    console.log(this.getUserProjects());
  },
  methods: {
    dragStart: function (event) {
      event.dataTransfer.setData("Text", event.target.id);
    },
    allowDrop: function (event) {
      event.preventDefault();
    },
    noAllowDrop: function (e) {
      e.returnValue = true;
    },
    drop: function (event) {
      event.preventDefault();
      var taskId = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(taskId));
      let newStatus = event.target.id;
      let id = taskId;
      this.updateTaskStatus(id, newStatus);
    },
    async getTasks() {
      let prueba = await taskService.getAllTasks();
      this.taskList = prueba.tasks;
    },
    updateTaskStatus(id, newStatus) {
      taskService.updateTaskStatus(id, newStatus).then(() => {
        this.getTasks();
      });
    },
    getUserProjects() {
      taskService
        .getUserProjects("86f4ed31-0cda-43ca-83ab-33e54c7f8612")
        .then((data) => {
          console.log(
            data.data
              .map((item) => item.project_id)
              .filter((value, index, self) => self.indexOf(value) === index)
          );
        });
    },
    openModalCreate() {
      this.showCreateModal = true;
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
.example-parent {
  color: black;
  display: flex;
}

.example-draggable {
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
}

.example-dropzone {
  flex-basis: 100%;
  flex-grow: 1;
  padding: 10px;
}
</style>
