<template>
  <transition name="modal">
    <div
      class="modal-mask table w-full h-full top-0 left-0 fixed z-30 bg-gray-500 bg-opacity-60"
    >
      <div class="table-cell align-middle">
        <div
          class="modal-container pt-5 pb-12 px-8 my-0 mx-auto w-5/6 sm:w-2/5 bg-white rounded-lg  overflow-auto"
        >
          <h1 class="text-center uppercase font-extrabold my-8">
            {{ title }}
          </h1>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Titulo
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="Text"
                />
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Descripción
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Asignado
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  proyecto
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
            </div>
          </form>
          <div class="my-6">
            <button
              class="leading-tight  bg-red-600 hover:bg-red-800 text-white text-sm uppercase font-bold py-2 px-4 rounded-full w-54 h-8 focus:outline-none mr-8 sm:mr-2"
              @click="$emit('close')"
            >
             Cancelar
            </button>
            <button
              class="leading-tight bg-teal-700 hover:bg-teal-900 text-white text-sm uppercase font-bold py-2 px-4 rounded-full w-54 h-8 focus:outline-none"
              @click="$emit('close')"
            >
            Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CreateModal",
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    closing: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  methods: {},
};
</script>

<style></style>
