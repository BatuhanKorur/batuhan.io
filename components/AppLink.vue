<script setup lang="ts">
const props = defineProps({
	href: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
})
const router = useRoute()
const localePath = useLocalePath()

const isActive = computed(() => {
	return router.fullPath.startsWith(props.href)
})
</script>

<template>
	<NuxtLink :to="localePath(href)">
		<div class="link">
			<span :class="{ active: isActive }">{{ label }}</span>
		</div>
	</NuxtLink>
</template>

<style scoped lang="postcss">
.link {
	@apply flex items-center px-6 md:px-8;
	@apply border-carbon border-b md:border-b-0 md:border-l;
	@apply font-mono font-medium tracking-[0.2px] h-[72px] md:h-full;

	span {
		@apply lowercase text-sm;

		&.active {
			@apply text-accent;
		}

		&:not(.active) {
			@apply text-light/80;
		}
	}
}
</style>
