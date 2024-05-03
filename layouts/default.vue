<script setup lang="ts">
import routes from '@/config/routes'
import socials from '@/config/socials'

const menuOpen = ref(false)
</script>

<template>
	<div class="wrapper">
		<div class="container">
			<Navbar v-model="menuOpen" class="z-50" />
			<div class="grow flex flex-col h-full">
				<Transition name="page" mode="out-in">
					<div v-if="menuOpen" class="grow">
						<NuxtLink
							v-for="link in routes"
							:key="link.href"
							:to="link.href"
							@click="menuOpen = false"
						>
							<div class="border-b border-carbon px-6 h-[70px] flex items-center">
								<p class="text-light font-mono text-base lowercase font-[425]">
									{{ $t(link.label) }}
								</p>
							</div>
						</NuxtLink>
					</div>
					<template v-else>
						<div class="grow flex flex-col relative overflow-hidden">
							<div class="grow h-full">
								<slot />
							</div>
						</div>
					</template>
				</Transition>
				<div
					class="shrink-0 rounded-b-md z-50 f-between border-t border-carbon h-[44px] md:h-[52px]"
				>
					<LocaleSwitch />
					<div class="flex">
						<NuxtLink
							v-for="[key, value] in Object.entries(socials)"
							:key="key"
							class="border-l border-carbon f-center h-[44px] w-[48px] md:h-[52px] md:w-[58px]"
							:to="value.url"
							target="_blank"
						>
							<Icon
								:name="value.icon"
								class="size-6 text-grey-100 opacity-50 t-200 hover:opacity-100"
							/>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="postcss">
.wrapper {
	@apply flex flex-col min-h-svh w-full p-3 md:p-4 lg:p-6;
	@apply lg:max-w-screen-xl lg:mx-auto;
}

.container {
	@apply grow flex flex-col min-w-full;
	@apply border border-carbon rounded-[6px] md:rounded-[8px];
	@apply bg-indigo-900 bg-opacity-[3%];
}
</style>
