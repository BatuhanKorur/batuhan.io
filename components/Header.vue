<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: null,
	},
})
</script>

<template>
	<div class="border-b border-carbon">
		<h1 class="text-light font-mono font-[550] text-xl px-6 py-10 md:px-7 md:text-2xl lg:px-8 lg:py-12">
			<template v-if="title">
				{{ title }}
			</template>
			<slot v-else />
		</h1>
	</div>
</template>
