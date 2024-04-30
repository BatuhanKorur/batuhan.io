<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	href: {
		type: String,
		required: true,
	},
	icons: {
		type: Array,
	},
})
</script>

<template>
	<div class="flex flex-col">
		<div class="inline-flex px-3.5 pt-4 pb-2.5 h-[220px] lg:p-8 lg:h-[320px]">
			<NuxtImg
				:src="`img/${img}`"
				class="object-cover h-inherit w-full rounded"
				:alt="title"
			/>
		</div>
		<div class="px-4 lg:px-8">
			<NuxtLink :to="href" class="text-light font-mono font-semibold text-base tracking-[-0.2px]">
				{{ title }}
			</NuxtLink>
			<p class="text-sm text-grey-200 leading-4 lg:text-base">
				Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks,
				and detailed audio information about each track.
			</p>
		</div>
		<div class="px-4 pt-4 pb-6 f-between lg:px-8 lg:py-10">
			<div class="space-x-4 opacity-80">
				<Icon
					v-for="(icon, i) in icons"
					:key="i"
					:name="icon"
					class="size-[18px]"
				/>
			</div>
			<NuxtLink :to="href" class="px-1">
				<span
					class="font-mono text-base text-light font-[550] tracking-[-0.4px] border-b border-light/70"
				>View Project</span>
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped>

</style>
