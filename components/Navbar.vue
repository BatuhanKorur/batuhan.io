<script setup lang="ts">
import routes from '@/config/routes'

const props = defineProps({
	modelValue: {
		type: Boolean,
		required: true,
	},
})
const emits = defineEmits(['update:modelValue'])
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
	<div class="f-between w-full border-b border-carbon h-12 md:h-14 lg:justify-start">
		<div class="pl-4 md:pl-5">
			<NuxtLink
				to="/"
				class="font-mono text-light font-[580] text-[15px] md:text-[16px] lg:text-[17px] grow tracking-[-0.1px]"
				@click="value = false"
			>
				batuhan korur
			</NuxtLink>
		</div>
		<div class="hidden lg:flex h-full pl-10">
			<NuxtLink
				v-for="route in routes"
				:key="route.label"
				:to="route.href"
				class="border-l border-carbon px-8 f-center h-full last:border-r"
			>
				<p
					class="font-mono text-xs font-[600]"
					:class="router.fullPath.startsWith(route.href) ? 'opacity-100 text-blue-300' : 'opacity-60 text-light'"
				>
					{{ route.label }}
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
