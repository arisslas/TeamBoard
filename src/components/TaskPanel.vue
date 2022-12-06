<template>
  <div>
    <h1 class="my-8">{{ ($t('TASK_TITLE')).toUpperCase() }}</h1>
    <div class="flex mt-4 mx-8 example-parent mx-10 my-10 flex items-strech">
      <div v-for="(item, i) in columns" :key="i" class="droptarget example-dropzone mx-2 bg-gray-500 rounded"
        v-on:drop="drop" v-on:dragover="allowDrop">
        <div class="bg-slate-400 py-2">{{$t(item.nombre) }}</div>
        <div v-for="(task) in taskList.filter(task => task.status==i)" :key="task.id" v-on:dragstart="dragStart" draggable="true" :id="task.id" class="example-draggable">
         <div>{{(task.name).toUpperCase()}}</div> 
         <div>{{task.description}}</div> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import taskService from '@/services/taskService'
export default {
  name: 'TaskPanel',
  data() {
    return {
      columns: [
        { nombre: 'BACKLOG'},
        { nombre: 'TO_DO' },
        { nombre: 'PROGRESS' },
        { nombre: 'REVIEW' },
        { nombre: 'DONE' },
      ],
      taskList: [],
    }
  },
  mounted() {
    this.getTasks()
  },
  methods: {
    dragStart: function (event) {
      event.dataTransfer.setData('Text', event.target.id)
    },
    allowDrop: function (event) {
      event.preventDefault()
    },
    drop: function (event) {
      event.preventDefault()
      var data = event.dataTransfer.getData('Text')
      event.target.appendChild(document.getElementById(data))
      console.log()
    },
    async getTasks() {
      let prueba = await taskService.getAllTasks()
      this.taskList=prueba.tasks
      console.log(this.taskList)
    }
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

.example-origin {
  flex-basis: 100%;
  flex-grow: 1;
  padding: 10px;
}

.example-draggable {
  background-color: #4aae9b;
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
