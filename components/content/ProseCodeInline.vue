<script setup lang="ts">

</script>

<template>
	<code class="font-mono rounded subpixel-antialiased">
		<slot />
	</code>
</template>

<style scoped lang="postcss">
code {
	@apply px-1.5 py-0.5 text-white;
	@apply text-[12px] md:text-[13.5px] lg:text-[14.5px];
	@apply bg-[#1B2232] border border-[#2D3953];
}
</style>
