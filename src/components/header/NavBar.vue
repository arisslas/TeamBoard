<template>
  <div
    class="hidden md:flex m-auto w-11/12 justify-center pt-10 items-center bottom-shadow"
  >
    <router-link
      v-for="section in sections"
      :key="section.path"
      :to="{ name: section.path }"
    >
      <div
        class="w-40 h-6 text-center uppercase font-extrabold hover:border-b-2 hover:border-green-500"
        :class="{ active: isCurrentSection(section.path) }"
      >
        {{ section.text }}
      </div>
    </router-link>
    <DropdownLanguage />
  </div>
</template>

<script>
import DropdownLanguage from './DropdownLanguage.vue'
export default {
  name: 'NavBar',
  components: { DropdownLanguage },
  computed: {
    sections() {
      return [
        { path: '/tasks', text: 'Tasks' },
        { path: '/admin', text: 'Admin' },
      ]
    },
  },
  methods: {
    isCurrentSection(path) {
      return path === this.currentRouteName
    },
  },
}
</script>

<style scoped>
.bottom-shadow {
  box-shadow: 0 2px 4px -4px;
}

.active {
  border-bottom: 2px solid #19ff0484;
}
</style>
