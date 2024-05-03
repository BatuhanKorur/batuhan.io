<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="f-center px-3.5 py-2 bg-accent/5 rounded">
		<p class="text-blue-200/90 font-mono text-xxs font-medium">
			{{ label }}
		</p>
	</div>
</template>
