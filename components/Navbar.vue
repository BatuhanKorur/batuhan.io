<script setup lang="ts">
import routes from '@/config/routes'

const props = defineProps({
	modelValue: {
		type: Boolean,
		required: true,
	},
})
const emits = defineEmits(['update:modelValue'])
const localePath = useLocalePath()
const router = useRoute()
const value = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emits('update:modelValue', value)
	},
})
</script>

<template>
	<div class="f-between w-full border-b border-carbon h-[52px] md:h-[60px] lg:justify-start">
		<div class="pl-4 md:pl-5">
			<NuxtLink
				:to="localePath('/')"
				class="font-mono text-light font-[550] text-base md:text-md lg:text-[17px] grow tracking-[-0.1px]"
				@click="value = false"
			>
				batuhan korur
			</NuxtLink>
		</div>
		<div class="hidden lg:flex h-full pl-10">
			<NuxtLink
				v-for="route in routes"
				:key="route.label"
				:to="localePath(route.href)"
				class="border-l border-carbon px-8 f-center h-full last:border-r"
			>
				<p
					class="font-mono text-xs font-medium lowercase"
					:class="router.fullPath.startsWith(route.href) ? 'text-accent' : 'text-grey-400'"
				>
					{{ $t(route.label) }}
				</p>
			</NuxtLink>
		</div>
		<div class="lg:hidden border-l border-carbon h-full f-center w-12 md:w-14" @click="value = !value">
			<Icon
				v-if="!value"
				name="uim:apps"
				class="size-5 text-light opacity-70 t-200 hover:opacity-100 cursor-pointer"
			/>
			<Icon
				v-else
				name="line-md:menu-to-close-transition"
				class="size-5 text-light opacity-70 t-200 hover:opacity-100 cursor-pointer"
			/>
		</div>
	</div>
</template>
