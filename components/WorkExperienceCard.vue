<script setup lang="ts">
defineProps({
  company: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="border border-gray-700 rounded">
    <div class="px-3 py-2 border-b border-gray-700 -space-y-0.5">
      <div class="f-between">
        <p class="text-base font-[550]">
          {{ company }}
        </p>
        <p class="text-sm font-[450] text-white/70">
          {{ date }}
        </p>
      </div>
      <p class="text-xs text-white/70">
        {{ job }}
      </p>
    </div>
    <div class="px-3 py-2.5">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
