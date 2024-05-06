<script setup lang="ts">
defineProps({
	image: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="md:p-6 lg:p-0 lg:py-4 lg:max-w-[840px] lg:mx-auto">
		<div class="border-carbon md:border md:rounded lg:mt-5 lg:mx-4">
			<NuxtImg
				:src="`/img/portfolio/${image}`"
				class="w-full object-cover h-[220px] md:h-[360px] lg:h-[440px] border-b border-carbon md:rounded-t-sm"
				format="webp"
				quality="100"
			/>
			<div class="p-4 md:p-5">
				<h1 class="text-light font-semibold text-md tracking-[0.4px] md:text-lg md:tracking-[0.2px]">
					{{ title }}
				</h1>
				<p class="text-grey-200 text-pretty break-words text-xs md:text-sm lg:text-base">
					<slot name="desc" />
				</p>
			</div>
			<div
				class="grid grid-cols-1 divide-carbon divide-y md:grid-cols-3 md:divide-x md:divide-y-0 border-t border-carbon border-b md:border-b-0"
			>
				<div class="project-detail">
					<h2>{{ $t('category') }}</h2>
					<div>
						<slot name="category" />
					</div>
				</div>
				<div class="project-detail">
					<h2>{{ $t('year') }}</h2>
					<div>
						<slot name="year" />
					</div>
				</div>
				<div class="project-detail">
					<h2>{{ $t('tech_stack') }}</h2>
					<div class="space-x-3">
						<slot name="stack" />
					</div>
				</div>
			</div>
		</div>
		<div class="px-4 py-6">
			<slot />
		</div>
	</div>
</template>

<style scoped lang="postcss">
.project-detail {
	@apply p-4 md:p-5;

	h2 {
		@apply font-mono text-blue-200/90 uppercase font-semibold tracking-[0.3px];
		@apply text-xs md:text-sm mb-2;
	}

	div {
		@apply text-grey-100 text-xs space-y-1;
		@apply md:text-sm lg:text-base lg:font-[450];
	}
}
</style>
