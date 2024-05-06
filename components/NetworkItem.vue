<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="px-5 pt-3.5 pb-4">
		<label class="font-mono text-xxs text-grey-400 uppercase font-medium">{{ label }}</label>
		<p class="text-xs text-grey-100 font-medium">
			<slot />
		</p>
	</div>
</template>

<style scoped lang="postcss">

</style>
