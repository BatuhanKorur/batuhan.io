<script setup lang="ts">
defineProps({
	img: {
		type: String,
		required: true,
	},
	css: {
		type: String,
		default: 'h-[250px] md:h-[400px]',
	},
})
</script>

<template>
	<div class="bg-black">
		<NuxtImg
			:src="`/img/${img}.png`"
			class="rounded-lg border border-carbon/50"
			format="webp"
			quality="90"
			fit="cover"
			loading="lazy"
		/>
	</div>
</template>

<style scoped>

</style>
