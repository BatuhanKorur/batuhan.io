<script setup lang="ts">
import Popper from 'vue3-popper'

const props = defineProps({
	icon: {
		type: String,
		required: true,
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
		<Popper
			hover
			placement="top"
			offset-distance="8"
		>
			<template #content>
				<span class="text-sm text-light/75">{{ tip }}</span>
			</template>
			<div class="f-center size-[20px]">
				<Icon :name="`logos:${icon}`" class="min-h-[18px] w-full" />
			</div>
		</Popper>
	</div>
</template>
