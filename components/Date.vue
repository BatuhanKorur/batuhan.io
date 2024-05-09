<script setup lang="ts">
const props = defineProps({
	date: {
		type: String,
		required: true,
	},
})
const date = new Date(props.date)
const month = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
</script>

<template>
	<div class="space-x-1 text-grey-300 text-sm md:text-base font-medium">
		<span>{{ date.getDate() }}</span>
		<span>{{ month[date.getMonth()] }},</span>
		<span class="tracking-[-0.4px]">{{ date.getUTCFullYear() }}</span>
	</div>
</template>

<style scoped lang="postcss">

</style>
