<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="pb-1">
		<div class="title">
			<p class="text-grey-400 pr-1 font-semibold">
				//
			</p>
			<h3 class="text-light tracking-[-0.15px]">
				{{ title }}
			</h3>
		</div>
		<p class="desc">
			<slot />
		</p>
	</div>
</template>

<style scoped lang="postcss">
.title {
	@apply flex items-center font-mono;

	p {
		@apply text-[13.5px] md:text-[14.5px] lg:text-[16.5px];
	}

	h3 {
		@apply text-[14.5px] md:text-[15.5px] lg:text-[17.5px];
		@apply font-[450] md:font-[500] lg:font-[600];
	}
}

.desc {
	@apply text-grey-300 leading-[1.45em] tracking-[0.1px];
	@apply text-xs md:text-sm lg:text-base;
	@apply font-[350] md:font-[380] lg:font-[415];
}
</style>
