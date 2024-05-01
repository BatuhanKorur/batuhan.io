<script setup lang="ts">
const props = defineProps({
	icon: {
		type: String,
		required: true,
	},
	css: {
		type: String,
		default: 'size-4 lg:size-5',
	},
})

const tip = computed(() => {
	if (props.icon.includes('-'))
		return props.icon.split('-')[0]
	else
		return props.icon
})
</script>

<template>
	<div class="inline-flex">
		<UTooltip :text="tip">
			<Icon :name="`logos:${icon}`" :class="css" />
		</UTooltip>
	</div>
</template>
