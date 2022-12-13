<template>
  <transition name="modal">
    <div
      class="modal-mask table w-full h-full top-0 left-0 fixed z-30 bg-gray-500 bg-opacity-60"
    >
      <div class="table-cell align-middle">
        <div
          class="modal-container pt-5 pb-12 px-8 my-0 mx-auto w-4/6 sm:w-2/5 bg-white rounded-lg"
        >
          <h1 class="text-center uppercase font-extrabold my-8">
            {{ windowTitle }}
          </h1>
          <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  {{ $t("TITLE") }}
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="Text"
                  v-model="dataTitle"
                  maxlength="60"
                />
                <p v-if="dataTitle.length == 60" class="text-red-700 text-xs">
                  {{ $t("MAX_CHAR_TITLE") }}
                </p>
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  {{ $t("DESCRIPTION") }}
                </label>
                <textarea
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  v-model="dataDescription"
                  maxlength="200"
                ></textarea>
                <p
                  v-if="dataDescription.length == 200"
                  class="text-red-700 text-xs"
                >
                {{ $t("MAX_CHAR_DESCRIPTION") }}
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  {{ $t("USER") }}
                </label>
                <select
                  v-model="dataUser"
                  @change="onChange($event)"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                >
                  <option disabled value="">Please select one</option>
                  <option
                    v-for="user in aplicationUsers"
                    :key="user.id"
                    :id="user.id"
                    v-bind:value="user.id"
                  >
                    {{ user.full_name }}
                  </option>
                </select>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  {{ $t("PROJECT") }}
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  v-model="dataProject"
                />
              </div>
            </div>
          </form>
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
import * as constants from "@/components/common/constants.js";
import { createToast } from "@/components/Toast";
import { i18n } from "@/i18n";
import taskService from "@/services/taskService";
import { mapState } from "vuex";

export default {
  name: "CreateModal",
  data() {
    return {
      dataTitle: this.taskTitle,
      dataDescription: this.taskDescription,
      dataUser: {
        id: this.user_id,
        full_name: this.user_fullName,
      },
      dataProject: this.project,
    };
  },
  computed: {
    ...mapState("user", ["aplicationUsers"]),
  },
  props: {
    windowTitle: {
      type: String,
      required: true,
    },
    idTask: {

    },
    taskTitle: {
      type: String,
      default: "",
    },
    taskDescription: {
      type: String,
      default: "",
    },
    user_id: {
      type: String,
      default: "",
    },
    user_fullName: {
      type: String,
      default: "",
    },
    project: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      required: true,
    },
  },
  methods: {
    submit() {
      this.action == constants.TASK_ACTIONS.CREATE
        ? this.createTask()
        : this.editTask();
    },
    createTask() {
      this.checkForm()
        ? taskService
            .createTask(
              this.dataTitle,
              this.dataDescription,
              this.dataProject,
              this.dataUser.id
            )
            .then(() => {
              this.showSuccessToast(i18n.t("SUCCESS"));
              this.$emit("close");
              this.$emit("reload");
            })
        : this.showErrorToast(i18n.t("EMPTY_FIELDS"));
    },
    editTask() {
      this.checkForm()
        ? taskService.editTask(
            this.idTask,
            this.dataTitle,
            this.dataDescription,
            this.dataProject,
            this.dataUser.id
          ).then(() => {
              this.showSuccessToast(i18n.t("SUCCESS"));
              this.$emit("close");
              this.$emit("reload");
            })
        : this.showErrorToast(i18n.t("EMPTY_FIELDS"));
    },
    checkForm() {
      return (
        !!this.dataTitle &&
        !!this.dataDescription &&
        this.dataUser.id != "" &&
        !!this.dataProject
      );
    },
    showErrorToast(message) {
      const toastError = createToast(message);
      this.$toast.error(toastError);
    },
    showSuccessToast(message) {
      const toastSuccess = createToast(message);
      this.$toast.success(toastSuccess);
    },

    onChange: function (event) {
      this.dataUser.id == event.target.value;
    },
  },
};
</script>

<style></style>
