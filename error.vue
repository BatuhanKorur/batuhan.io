<script setup type="ts">
const route = useRoute()
</script>

<template>
	<NuxtLayout>
		<div class="grow flex items-center justify-center">
			<div>
				<div class="bg-red-800/30 px-5 py-3.5 rounded">
					<p class="text-base font-mono text-red-400 font-medium">
						[HTTP/1.1 <span class="font-bold text-red-300">404 Page not found</span>]
					</p>
					<p class="text-sm font-mono text-red-400 pt-1">
						GET <span class="underline">https://batuhan.io{{ route.fullPath }}</span>
					</p>
				</div>
				<div class="w-full flex flex-row-reverse pt-4">
					<NuxtLink to="/" class="border border-carbon inline-flex px-4 py-2 rounded-md">
						<p class="font-mono text-light/90 text-base font-semibold">
							Return Home
						</p>
					</NuxtLink>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
