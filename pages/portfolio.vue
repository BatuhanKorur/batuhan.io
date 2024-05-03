<script setup lang="ts">
import portfolio from '@/config/portfolio'

const localePath = useLocalePath()
</script>

<template>
	<div>
		<Header>
			{{ $t('portfolio') }}
		</Header>
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<template v-for="(item, i) in Object.values(portfolio)" :key="i">
				<div class="flex flex-col p-5 border-b border-carbon md:odd:border-r last:border-b-0">
					<div class="inline-flex">
						<NuxtImg
							:src="`/img/portfolio/${item.img}`"
							class="object-cover w-full rounded h-[240px] md:h-[275px] lg:h-[310px]"
							:alt="item.title"
						/>
					</div>
					<div class="pt-4 pb-6 lg:pb-8">
						<NuxtLink :to="item.href" class="text-light font-mono font-semibold text-md tracking-[-0.25px] pb-1">
							{{ item.title }}
						</NuxtLink>
						<p class="text-grey-200/90 text-base">
							{{ $t(item.desc) }}
						</p>
					</div>
					<div class="flex items-end justify-between">
						<div class="space-x-3 opacity-90">
							<TechIcon
								v-for="(icon, i) in item.icons"
								:key="i"
								:icon="icon"
							/>
						</div>
						<NuxtLink :to="localePath(item.href)" class="button mr-1.5">
							{{ $t('view_project') }}
						</NuxtLink>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<style scoped lang="postcss">
.button {
	@apply text-[12.5px] leading-none text-grey-200 font-mono font-[660] tracking-[-0.25px];
	@apply px-5 py-3.5 ring-1 ring-carbon rounded-sm;
	@apply transition duration-300 ease-in-out;
	@apply hover:bg-indigo-500/5 hover:text-light hover:ring-opacity-50;
}
</style>
