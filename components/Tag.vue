<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="f-center px-3 py-1.5 bg-blue-900/10 rounded-b rounded-tl rounded-tr-md">
		<p class="text-blue-200 font-mono text-[10px] tracking-[-0.1px] lg:text-[11.5px] lg:font-[520]">
			{{ label }}
		</p>
	</div>
</template>
