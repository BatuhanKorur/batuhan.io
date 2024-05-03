<script setup lang="ts">

</script>

<template>
	<li class="text-size first:pt-3 pb-2 text-blue-50/90 text-pretty break-words">
		<slot />
	</li>
</template>

<style scoped lang="postcss">
.text-size {
	@apply text-[13.5px] font-[325];
	@apply md:text-sm md:font-[360];
	@apply lg:text-[14.5px] lg:leading-[21.5px] lg:font-normal;
}
</style>
