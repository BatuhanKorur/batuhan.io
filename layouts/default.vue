<script setup lang="ts">
import SpeedInsights from '@vercel/speed-insights'
import { links, socials } from '@/config/links'

const menuOpen = ref(false)
</script>

<template>
	<div class="wrapper">
		<div class="container">
			<Navbar v-model="menuOpen" class="z-50">
				<AppLink
					v-for="link in links"
					:key="link.href"
					:href="link.href"
					:label="$t(link.label)"
					class="last:border-r border-carbon"
				/>
			</Navbar>
			<div class="grow flex flex-col h-full">
				<Transition name="page" mode="out-in">
					<div v-if="menuOpen" class="grow">
						<AppLink
							v-for="link in links"
							:key="link.href"
							:href="link.href"
							:label="$t(link.label)"
							@click="menuOpen = false "
						/>
					</div>
					<template v-else>
						<div class="grow flex flex-col relative overflow-hidden">
							<div class="grow h-full w-full">
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
		<SpeedInsights />
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
