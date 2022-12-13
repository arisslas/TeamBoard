<template>
    <transition name="modal">
    <div
      class="modal-mask table w-full h-full top-0 left-0 fixed transition-opacity ease-in-out duration-300 z-30"
    >
      <div class="table-cell align-middle">
        <div
          class="modal-container pt-5 pb-12 px-8 my-0 mx-auto w-5/6 sm:w-2/5 bg-white rounded-lg transition-all  ease-in-out duration-300 overflow-auto"
        >
          <h1 class="text-center uppercase font-extrabold mt-4">
            {{ windowTitle }}
          </h1>
          <h2 class="text-center text-gray-600 font-bold leading-normal">
            {{ subtitle }}
          </h2>
          <p class="text-center text-gray-600 font-bold leading-normal my-3">
            {{ message }}
          </p>
          <p class="text-center text-gray-600 font-bold leading-normalm my-3">
            {{ closing }}
          </p>
          <div class="mt-6 flex justify-between">
            <button
              class="leading-tight bg-red-600 hover:bg-red-800 text-white text-sm uppercase font-bold py-2 px-4 rounded-full w-54 h-8 focus:outline-none"
              @click="$emit('close')"
            >
              {{ $t("CANCEL") }}
            </button>
            <button
              class="leading-tight bg-teal-700 hover:bg-teal-900 text-white text-sm uppercase font-bold py-2 px-4 rounded-full w-54 h-8 focus:outline-none"
              @click="submit()"
            >
              {{ $t("CONFIRM") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import taskService from "@/services/taskService";
import { i18n } from "@/i18n";
import { createToast } from "@/components/Toast";
export default {
  name: 'DeleteModal',
  props: {
    windowTitle: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    idTask: {

    }
  },
  methods: {
    submit() {
      this.deleteTask()
    },
    deleteTask(){
     taskService.deleteTask(this.idTask)
     this.showSuccessToast(i18n.t("DELETE_SUCCESS"));
              this.$emit("close");
              this.$emit("reload");

    },
    showSuccessToast(message) {
      const toastSuccess = createToast(message);
      this.$toast.success(toastSuccess);
    },
  }
}
</script>
<style>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  height: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>