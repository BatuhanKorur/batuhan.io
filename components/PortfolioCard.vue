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
	<div class="flex flex-col p-5 border-b border-carbon md:odd:border-r last:border-b-0">
		<div class="inline-flex">
			<NuxtImg
				:src="`/img/portfolio/${img}`"
				class="object-cover w-full rounded h-[285px] md:h-[315px] lg:h-[340px]"
				:alt="title"
			/>
		</div>
		<div class="pt-4 pb-6 lg:pb-8">
			<NuxtLink :to="href" class="text-light font-mono font-semibold text-md tracking-[-0.1px] pb-1">
				{{ title }}
			</NuxtLink>
			<p class="text">
				{{ $t(desc) }}
			</p>
		</div>
		<div class="f-between pb-2">
			<div class="space-x-4 opacity-90">
				<TechIcon
					v-for="(icon, i) in icons"
					:key="i"
					:icon="icon"
					class="size-5"
				/>
			</div>
			<NuxtLink :to="href" class="font-mono text-base font-[525] pr-2">
				<span
					class="text-light tracking-[-0.4px] border-b border-grey-400 t-200 hover:border-indigo-400 hover:text-indigo-300"
				>
					View Project
				</span>
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped>

</style>
