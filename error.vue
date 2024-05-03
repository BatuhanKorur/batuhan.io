<script setup type="ts">
const route = useRoute()
</script>

<template>
	<NuxtLayout>
		<div class="f-center pt-[10vh]">
			<div>
				<div class="border border-carbon rounded divide-y divide-carbon">
					<div class="bg-red-800/25 px-5 py-4 rounded-t">
						<p class="text-sm font-mono text-red-400 font-medium">
							[HTTP/1.1 <span class="font-bold text-red-300">404 Page not found</span>]
						</p>
						<p class="text-xxs font-mono text-red-400/80 pt-0.5">
							GET <span class="underline">https://batuhan.io{{ route.fullPath }}</span>
						</p>
					</div>
					<div class="network-item">
						<label>Status</label>
						<p>404 Page not found: {{ route.fullPath }}</p>
					</div>
					<div class="network-item">
						<label>Version</label>
						<p>HTTP/1.1</p>
					</div>
					<div class="network-item">
						<label>Transferred</label>
						<p>17.65 kB (17.44 kB size)</p>
					</div>
					<div class="network-item">
						<label>Request Priority</label>
						<p>Highest</p>
					</div>
					<div class="network-item">
						<label>DNS Resolution</label>
						<p>System</p>
					</div>
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
		</div>
	</NuxtLayout>
</template>

<style scoped lang="postcss">
.network-item {
	@apply px-4 pt-3 pb-3.5;

	label {
		@apply text-xxs text-grey-300 font-mono uppercase font-medium;
	}

	p {
		@apply text-xs text-grey-100 font-medium pb-1;
	}
}
</style>
