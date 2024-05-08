<template>
	<p class="text-grey-200 text-pretty">
		<slot />
	</p>
</template>

<style scoped lang="postcss">
p {
	@apply text-base leading-6;
	@apply md:text-md md:leading-[26px];
	@apply lg:text-[17px] lg:leading-7;
}
</style>
