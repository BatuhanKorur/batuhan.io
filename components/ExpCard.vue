<script setup lang="ts">
defineProps({
	company: {
		type: String,
		required: true,
	},
	job: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	tags: {
		type: Array,
		required: true,
	},
})
</script>

<template>
	<div class="border-t border-carbon">
		<div class="p-4 lg:px-6 lg:pt-6">
			<div class="flex items-end justify-between">
				<p class="text-light text-[15px] font-medium leading-4">
					{{ company }}
				</p>
				<p class="text-grey-300 text-[14px] font-[425] leading-4 tracking-[-0.1px]">
					{{ date }}
				</p>
			</div>
			<div class="pt-0.5">
				<p class="text-accent/90 brightness-110 font-mono font-[550] text-[13px] tracking-[-0.2px]">
					{{ job }}
				</p>
			</div>
		</div>
		<div class="px-4 content lg:px-6">
			<slot />
		</div>
		<div class="px-4 py-3 mb-3 flex flex-wrap gap-x-2 gap-y-1.5 lg:px-6 lg:py-4">
			<Tag
				v-for="(tag, i) in tags"
				:key="i"
				:label="tag"
			/>
		</div>
	</div>
</template>

<style scoped>

</style>
