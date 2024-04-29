<script setup lang="ts">

</script>

<template>
  <div class="h-full">
    <div class="h-14 border-b border-carbon">
      <div class="flex items-center h-full px-4 justify-between">
        <p class="text-white font-display text-md -mb-1">
          batuhan korur
        </p>
        <div class="size-6 flex items-center justify-center">
          <Icon name="ph:list-bold" class="text-white size-5" />
        </div>
      </div>
    </div>
    <div class="text-white p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
