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
	<div class="p-5 lg:p-6 border-t border-carbon lg:first:border-t-0">
		<div>
			<div class="flex items-center justify-between">
				<p class="text-light text-md font-medium">
					{{ company }}
				</p>
				<p class="text-grey-200 text-base tracking-[-0.1px]">
					{{ date }}
				</p>
			</div>
			<div class="pt-0.5">
				<p class="text-accent brightness-110 font-mono font-[500] text-sm">
					{{ job }}
				</p>
			</div>
		</div>
		<div class="py-4">
			<slot />
		</div>
		<div class="flex flex-wrap gap-2">
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
