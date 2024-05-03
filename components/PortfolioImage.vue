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
			quality="100"
			fit="cover"
			loading="lazy"
		/>
	</div>
</template>
