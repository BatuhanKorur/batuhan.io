<script setup lang="ts">
defineProps({
	href: {
		type: String,
		default: '',
	},
	download: {
		type: Boolean,
		default: false,
	},
	label: {
		type: String,
		default: null,
	},
})

const localePath = useLocalePath()
</script>

<template>
	<NuxtLink :to="download ? href : localePath(href)">
		<p class="pb-0.5 border-b border-blue-200/50 font-mono text-blue-200 text-base font-medium t-200 hover:opacity-75">
			<template v-if="label">
				{{ label }}
			</template>
			<slot v-else />
		</p>
	</NuxtLink>
</template>
