<script setup lang="ts">
import {onClickOutside} from '@vueuse/core'

const {locale, setLocale} = useI18n()

const target = ref(null)
const isOpen = ref(false)

function handleMenu(val: boolean) {
	isOpen.value = val
}

function switchLocale(lang: string) {
	if (locale.value !== lang) {
		setLocale(lang)
	}
	handleMenu(false)
}

onClickOutside(target, () => isOpen.value = false)
</script>

<template>
	<div class="px-4 md:px-5 md:py-3 relative">
		<p class="font-mono text-xs md:text-sm space-x-1" @click="handleMenu(!isOpen)">
			<span class="text-code-keyword">const</span>
			<span class="text-code-label font-[450]">locale</span>
			<span class="text-code-keyword">=</span>
			<span class="text-code-string uppercase">'{{ locale }}'</span>
		</p>
		<Transition>
			<div v-if="isOpen" ref="target">
				<div class="absolute border border-carbon bg-black -right-10 bottom-10 w-44 rounded-md divide-y divide-carbon">
					<div class="lang-item" @click="switchLocale('tr')">
						<p>'TR'</p>
						<div>
							<span>//</span>
							<span>Turkish</span>
						</div>
					</div>
					<div class="lang-item" @click="switchLocale('en')">
						<p>'EN'</p>
						<div>
							<span>//</span>
							<span>English</span>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<style scoped lang="postcss">
.lang-item {
	@apply flex items-center justify-between cursor-pointer;
	@apply px-3.5 py-2.5;
	@apply transition duration-200 ease-in-out hover:backdrop-brightness-150;

	p {
		@apply font-mono text-xxs;
		@apply text-code-string;
	}

	div {
		@apply font-mono text-xxs;
		@apply text-grey-200/50 space-x-0.5;
	}
}
</style>
