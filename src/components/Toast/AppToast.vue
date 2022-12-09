<template>
  <div class="w-full">
    <h1 class="text-sm font-extrabold">{{ title }}</h1>
    <span class="text-sm">{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: 'AppToast',
  props: {
    title: { type: String, required: true },
    text: { type: String, default: '' }
  }
}
</script>
