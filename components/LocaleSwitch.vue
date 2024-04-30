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
			<span class="text-code-variable">locale</span>
			<span class="text-code-keyword">=</span>
			<span class="text-code-string uppercase">'{{ locale }}'</span>
		</p>
		<Transition>
			<div v-if="isOpen" ref="target">
				<div class="absolute border border-carbon bg-black -right-7 bottom-7 w-44 rounded-md divide-y divide-carbon">
					<div class="f-between px-3.5 py-2.5 t-200 hover:backdrop-brightness-150" @click="switchLocale('tr')">
						<p class="text-code-string font-mono text-[12.5px]">
							'TR'
						</p>
						<p class="text-code-comment font-mono text-[12.5px] space-x-0.5">
							<span>//</span>
							<span>Turkish</span>
						</p>
					</div>
					<div class="f-between px-3.5 py-2.5 t-200 hover:backdrop-brightness-150" @click="switchLocale('en')">
						<p class="text-code-string font-mono text-[12.5px]">
							'EN'
						</p>
						<p class="text-code-comment font-mono text-[12.5px] space-x-0.5">
							<span>//</span>
							<span>English</span>
						</p>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<style scoped>

</style>
