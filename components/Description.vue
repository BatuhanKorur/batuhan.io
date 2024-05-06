<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		default: null,
	},
})
</script>

<template>
	<div>
		<h3>{{ title }}</h3>
		<p>
			<template v-if="content">
				{{ content }}
			</template>
			<slot v-else />
		</p>
	</div>
</template>

<style scoped lang="postcss">
h3 {
	@apply text-light font-mono;

	&::before {
		content: '//';
		@apply text-[13.5px] md:text-[14.5px] lg:text-[16.5px];
		@apply pr-1.5;
	}

	@apply text-[14.5px] font-[425] tracking-[-0.5px];
	@apply md:text-[15.5px] font-[500];
	@apply lg:text-[17px] lg:font-[620];
}

p {
	@apply text-grey-200 text-pretty break-words;
	@apply text-[13.75px] font-[375] tracking-[0.05px] leading-[21px];
	@apply lg:text-[15.5px] lg:font-[425] lg:tracking-[0.2px] lg:leading-[1.45em];
}
</style>
