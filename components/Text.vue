<template>
	<div class="text-light">
		<p class="text-pretty break-words text-size">
			<slot />
		</p>
	</div>
</template>

<style scoped lang="postcss">
.text-size {
	@apply text-[14.5px] leading-[22px] font-[360];
	@apply md:text-base md:leading-[24px] md:font-[410];
}
</style>
