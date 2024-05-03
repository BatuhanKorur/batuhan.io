<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div>
		<div class="flex items-center">
			<p class="text-grey-500 font-mono text-[12px] mb-px pr-1 font-semibold lg:text-sm lg:font-semibold">
				//
			</p>
			<h3 class="font-mono text-light text-sm font-[450] tracking-[-0.15px] lg:text-base lg:font-semibold">
				<span>{{ title }}</span>
			</h3>
		</div>
		<p class="text-grey-300 text-xs leading-[1.45em] font-[350] lg:text-base lg:font-[410]">
			<slot />
		</p>
	</div>
</template>
