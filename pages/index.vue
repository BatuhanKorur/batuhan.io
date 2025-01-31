<template>
	<div class="grow flex flex-col justify-between overflow-y-hidden">
		<div class="w-full content-end h-[25vh] md:h-[30vh] md:max-w-2xl md:mx-auto lg:max-w-screen-lg">
			<div class="px-6 md:px-8 lg:px-12">
				<p class="text-lg md:text-xl pl-0.5 text-light">
					{{ $t('hello') }}
				</p>
				<h1 class="name text-light">
					Batuhan Korur
				</h1>
				<div class="flex items-end space-x-3 pt-4 md:pt-6 lg:pt-8">
					<Icon name="octicon:command-palette-16" class="size-lg text-accent animate-pulse lg:size-[20px]" />
					<p class="font-mono text-accent font-[450] text-md leading-none lg:text-lg">
						Full-stack Developer
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
	@apply text-[38px] leading-[38px];
	@apply md:text-[52px] md:leading-[52px];
	@apply lg:text-[64px] lg:leading-[64px];
}
</style>
