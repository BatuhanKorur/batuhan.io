<script setup lang="ts">

</script>

<template>
	<li class="text-opt text-blue-50/90 first:pt-3 pb-2">
		<slot />
	</li>
</template>

<style scoped lang="postcss">
.text-opt {
	@apply text-pretty break-words;
	@apply text-[13.5px] font-[325];
	@apply md:text-sm md:font-[360];
	@apply lg:text-[14.5px] lg:leading-[21px] lg:font-normal;
}
</style>
