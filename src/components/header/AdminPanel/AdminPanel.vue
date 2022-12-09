<template>
  <div>
    <h1 class="my-8">
      {{ ($t('ADMIN_TITLE')).toUpperCase() }}
    </h1>
    <table class="table-fixed mx-8">
  <thead>
    <tr>
      <th class="w-1/2 px-4 py-2 ">Titulo</th>
      <th class="w-1/4 px-4 py-2">Descripcion</th>
      <th class="w-1/4 px-4 py-2">Estado</th>
      <th class="w-1/4 px-4 py-2">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-400">
      <td class="border px-4 py-2">TAREA 2</td>
      <td class="border px-4 py-2">kakakakaakakakakakakakakakakakakak</td>
      <td class="border px-4 py-2"></td>
      <td class="border px-4 py-2"></td>
    </tr>
    <tr class="bg-gray-400">
      <td class="border px-4 py-2">ENDPOINT ME</td>
      <td class="border px-4 py-2">integrar el endpoint/me en el front</td>
      <td class="border px-4 py-2"></td>
      <td class="border px-4 py-2"></td>
    </tr>
    <tr class="bg-gray-400">
      <td class="border px-4 py-2">TAREA 1</td>
      <td class="border px-4 py-2">nananaanananananananaana</td>
      <td class="border px-4 py-2"></td>
      <td class="border px-4 py-2 space-x-2">
        <font-awesome-icon icon="fa-trash-can" class="ml-4 delete" v-on:click="openDelete()"/>
        <font-awesome-icon icon="fa-pencil" class="icon" v-on:click="openEdit()" />
      </td>
    </tr>
    <tr class="bg-gray-400">
      <td class="border px-4 py-2">CREAR COMPONENTE AVISO</td>
      <td class="border px-4 py-2">see necesita poder ver un aviso cada vez que haga una modificacion dentro del campo x</td>
      <td class="border px-4 py-2"></td>
      <td class="border px-4 py-2 space-x-2">
        <font-awesome-icon icon="fa-trash-can" class="ml-4 delete" v-on:click="openDelete()"/>
        <font-awesome-icon icon="fa-pencil" class="icon" v-on:click="openEdit()" />
      </td>
    </tr>
  </tbody>
</table>
<EditModal v-if="showEditModal"
@close="showEditModal = false"></EditModal>
  </div>


</template>
<script>
import EditModal from './EditModal.vue'
export default {
  name: 'AdminPanel',
  components: {EditModal },
  data() {
    return{
     showEditModal:false
    }
  },
  methods: {
    openEdit(){
      console.log('editando')
      this.showEditModal=true
      console.log(this.showEditModal)
    },
    openDelete(){
      console.log('borrando')
    }
  }
}
</script>
<style>
 .icon:hover {
     color: rgb(245, 213, 4);
 }
 .delete:hover {
     color: rgb(195, 17, 17);
 }
 .icon{
     color: rgb(255, 255, 255);
 }
 .delete {
     color: rgb(254, 254, 254);
 }
</style>