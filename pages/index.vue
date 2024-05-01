<script setup lang="ts"></script>

<template>
	<div class="grow flex flex-col justify-between overflow-y-hidden">
		<div class="h-[25vh] md:h-[40vh] w-full content-end space-y-3 md:max-w-2xl md:mx-auto lg:max-w-screen-lg">
			<div class="px-6">
				<p class="text-light font-[425] text-[20px] md:text-[24px] lg:pb-2">
					{{ $t('hello') }}
				</p>
				<p
					class="text-light font-[580] text-[40px] md:text-[52px] lg:text-[64px] lg:font-[610] tracking-[1px] leading-10"
				>
					Batuhan Korur
				</p>
			</div>
			<div class="flex items-end space-x-3 px-8 lg:pt-5">
				<Icon name="octicon:command-palette-16" class="size-[18px] text-accent animate-pulse lg:size-[20px]" />
				<p class="font-mono text-accent font-[450] text-[17px] leading-none lg:text-[20px] lg:font-[480]">
					Front-end Engineer
				</p>
			</div>
		</div>
		<Donut />
	</div>
</template>
