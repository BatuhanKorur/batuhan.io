<script setup lang="ts">
defineProps({
	href: {
		type: String,
		required: true,
	},
	blank: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="flex flex-col group">
		<NuxtLink :to="href" :target="blank ? '_blank' : ''">
			<slot />
		</NuxtLink>
		<div class="bg-code-string h-px w-full t-200 opacity-50 group-hover:opacity-100" />
	</div>
</template>
