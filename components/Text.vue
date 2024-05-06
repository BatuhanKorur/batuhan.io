<script setup lang="ts">
defineProps({
	content: {
		type: String,
		default: null,
	},
})
</script>

<template>
	<div class="text-light">
		<p class="text-pretty break-words text-size">
			<template v-if="content">
				{{ content }}
			</template>
			<slot v-else />
		</p>
	</div>
</template>

<style scoped lang="postcss">
.text-size {
	@apply text-[14.5px] leading-[22px] font-[360];
	@apply md:text-base md:leading-[23px] md:font-[410];
}
</style>
