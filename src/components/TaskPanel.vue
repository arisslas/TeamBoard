<template>
  <div>
    <h1 class="my-8 uppercase">{{ ($t('TASK_TITLE'))}}</h1>
    <button
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4"
      v-on:click="openModal()">
      {{ ($t('CREATE_TASK')) }}
    </button>
    <div class="flex mt-4 mx-8 example-parent mx-10 my-10 flex items-strech overflow-auto">
      <div v-for="(item, i) in columns" :key="i" :id="i" class=" example-dropzone mx-2 bg-gray-500 rounded"
        v-on:drop="drop" v-on:dragover="allowDrop">
        <div class="bg-slate-400 py-2" v-on:drop.stop="noAllowDrop" v-on:dragover.stop="noAllowDrop">{{ $t(item.nombre)
        }}</div>
        <div v-for="(task) in taskList.filter(task => task.status == i)" :key="task.id" v-on:dragstart="dragStart"
          draggable="true" :id="task.id" v-on:drop.stop="noAllowDrop" v-on:dragover.stop="noAllowDrop"
          class="example-draggable bg-gradient-to-r from-green-300 rounded uppercase">
          <div>{{ (task.name) }}</div>
          <div>{{ task.description }}</div>
        </div>
      </div>
    </div>
    <CreateModal v-if="showEditModal"
    @close="showEditModal = false"
    :title="$t('CREATE_TASK')">
  </CreateModal>
  </div>

</template>
<script>
import taskService from '@/services/taskService'
import CreateModal from '@/components/common/sharedModules/CreateModal.vue'
export default {
  name: "TaskPanel",
  components: { CreateModal },
  data() {
    return {
      columns: [
        { nombre: "BACKLOG" },
        { nombre: "TO_DO" },
        { nombre: "PROGRESS" },
        { nombre: "REVIEW" },
        { nombre: "DONE" },
      ],
      taskList: [],
      showEditModal: false,
    };
  },
  mounted() {
    this.getTasks();
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
      console.log("soltado");
      let newStatus = event.target.id;
      let id = taskId;
      this.updateTaskStatus(id, newStatus);
    },
    async getTasks() {
      let prueba = await taskService.getAllTasks();
      this.taskList = prueba.tasks;
      console.log(this.taskList);
    },
    updateTaskStatus(id, newStatus) {
      taskService.updateTaskStatus(id, newStatus)
        .then(() => { this.getTasks(); });
    },
    getUserProjects() {
      taskService.getUserProjects("86f4ed31-0cda-43ca-83ab-33e54c7f8612").then((data) => { console.log(data.data.map(item => item.project_id).filter((value, index, self) => self.indexOf(value) === index)); });
    },
    openModal() {
      console.log("creando");
      this.showEditModal = true;
      console.log(this.showEditModal);
    },
  },
}
</script>
<style>
.example-parent {
  color: black;
  display: flex;
  font-family: sans-serif;
  font-weight: bold;
}




.example-draggable {
  color: black;
  font-weight: normal;
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
