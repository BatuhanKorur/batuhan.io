<script setup lang="ts">
</script>

<template>
	<div class="grow flex flex-col justify-between overflow-y-hidden">
		<div class="w-full h-[20vh] md:h-[30vh] content-end space-y-3 md:max-w-2xl md:mx-auto lg:max-w-screen-lg">
			<div class="px-6 md:px-8 lg:px-12">
				<div class="text-light">
					<p class="text-lg md:text-xl pl-0.5 pb-1">
						{{ $t('hello') }}
					</p>
					<h1 class="name">
						Batuhan Korur
					</h1>
				</div>
				<div class="flex items-end space-x-3 lg:pt-8">
					<Icon name="octicon:command-palette-16" class="size-lg text-accent animate-pulse lg:size-[20px]" />
					<p class="font-mono text-accent font-[450] text-md leading-none lg:text-lg">
						Front-end Engineer
					</p>
				</div>
			</div>
		</div>
		<Donut />
	</div>
</template>

<style scoped lang="postcss">
.name {
	@apply font-semibold;
	@apply text-[38px] leading-[50px];
	@apply md:text-[50px] md:leading-[62px];
	@apply lg:text-[62px] md:leading-[80px];
}
</style>
