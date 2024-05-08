<script setup lang="ts">
defineProps({
	href: {
		type: String,
		default: '',
	},
	self: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="inline-flex transition duration-200 ease-in-out mx-px hover:opacity-75">
		<NuxtLink
			:to="href"
			:target="self ? '_self' : '?_blank'"
			class="inline-flex items-center space-x-1 text-accent brightness-110"
		>
			<span class="font-medium"><slot /></span>
			<Icon name="ph:link" class="mt-px" />
		</NuxtLink>
	</div>
</template>
