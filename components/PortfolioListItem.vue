<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: true,
	},
	icons: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="grid grid-cols-10">
		<div class="col-span-4">
			<p class="font-mono font-[525] text-blue-200 uppercase text-xs md:text-sm lg:text-base">
				{{ title }}
			</p>
		</div>
		<div class="col-span-6">
			<div
				class="text-light text-sm font-[425] lg:font-[475] lg:text-base"
				:class="icons ? 'space-x-2' : 'space-y-0.5'"
			>
				<slot />
			</div>
		</div>
	</div>
</template>
