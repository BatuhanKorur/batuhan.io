<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="f-center px-3.5 py-2 bg-blue-800/10 rounded">
		<p class="text-blue-100/90 font-mono text-[10.5px] tracking-[0.1px] font-[425] lg:text-[11.5px] lg:font-[520]">
			{{ label }}
		</p>
	</div>
</template>
