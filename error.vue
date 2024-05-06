<script setup type="ts">
import NetworkItem from '~/components/NetworkItem.vue'

const route = useRoute()
</script>

<template>
	<NuxtLayout>
		<div class="flex flex-col">
			<div class="md:border md:border-carbon md:rounded divide-y divide-carbon">
				<div class="font-mono bg-red-900/30 px-6 py-10 space-y-1">
					<p class="text-sm text-red-400 text-center">
						[HTTP/1.1 <span class="font-bold text-red-500">404 Page not found</span>]
					</p>
					<p class="text-xs text-red-400 text-center">
						GET <span class="underline">https://batuhan.io{{ route.fullPath }}</span>
					</p>
				</div>
				<NetworkItem label="Status">
					404 Page not found: {{ route.fullPath }}
				</NetworkItem>
				<NetworkItem label="Version">
					HTTP/1.1
				</NetworkItem>
				<NetworkItem label="Transferred">
					17.65 kB (17.44 kB size)
				</NetworkItem>
				<NetworkItem label="Request Priority">
					Highest
				</NetworkItem>
				<NetworkItem label="DNS Resolution">
					System
				</NetworkItem>
			</div>
			<NuxtLink
				to="/"
				class="border border-carbon inline-flex py-4 rounded bg-grey-500/10 w-full f-center mt-4 t-200 hover:opacity-80"
			>
				<p class="text-xs font-bold font-mono text-light">
					Return Home
				</p>
			</NuxtLink>
		</div>
	</NuxtLayout>
</template>
