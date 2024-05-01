<script setup lang="ts">
defineProps({
	img: {
		type: String,
		required: true,
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
			height="320px md:440px lg:560px"
		/>
	</div>
</template>

<style scoped>

</style>
