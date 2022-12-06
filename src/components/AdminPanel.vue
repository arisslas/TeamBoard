<template>
  <div>
    <h1 class="my-8">
      {{ ($t('ADMIN_TITLE')).toUpperCase() }}
    </h1>
    <table class="table-fixed mx-8">
  <thead>
    <tr>
      <th class="w-1/2 px-4 py-2">Titulo</th>
      <th class="w-1/4 px-4 py-2">Descripcion</th>
      <th class="w-1/4 px-4 py-2">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-400">
      <td class="border px-4 py-2">TAREA 2</td>
      <td class="border px-4 py-2">kakakakaakakakakakakakakakakakakak</td>
      <td class="border px-4 py-2"></td>
    </tr>
    <tr class="bg-gray-400">
      <td class="border px-4 py-2">ENDPOINT ME</td>
      <td class="border px-4 py-2">integrar el endpoint/me en el front</td>
      <td class="border px-4 py-2"></td>
    </tr>
    <tr class="bg-gray-400">
      <td class="border px-4 py-2">TAREA 1</td>
      <td class="border px-4 py-2">nananaanananananananaana</td>
      <td class="border px-4 py-2"></td>
    </tr>
    <tr class="bg-gray-400">
      <td class="border px-4 py-2">CREAR COMPONENTE AVISO</td>
      <td class="border px-4 py-2">see necesita poder ver un aviso cada vez que haga una modificacion dentro del campo x</td>
      <td class="border px-4 py-2"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></td>
    </tr>
  </tbody>
</table>
  </div>


</template>
<script>
export default {
  name: 'AdminPanel',
}
</script>
<style>

</style>