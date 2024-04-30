<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: true,
	},
	icons: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="grid grid-cols-10">
		<div class="col-span-4">
			<p class="font-mono text-light/50 text-sm md:text-[14.5px] font-[550]">
				{{ title }}
			</p>
		</div>
		<div class="col-span-6">
			<div class="text-light text-sm font-[440] md:text-[14.5px]" :class="icons ? 'space-x-2' : 'space-y-1'">
				<slot />
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
