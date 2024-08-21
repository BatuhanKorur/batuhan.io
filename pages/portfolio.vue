<script setup lang="ts">
import { brickhunter, dispatch_app, reachin_app, reachin_cortex, ups } from '@/config/portfolio'

const portfolio = {
	reachin_app,
	reachin_cortex,
	brickhunter,
	ups,
	dispatch_app,
}
</script>

<template>
	<NuxtLayout>
		<Header :title="$t('portfolio')" />
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<div
				v-for="(item, i) in Object.values(portfolio)"
				:key="i"
				class="flex flex-col p-5 border-b border-carbon md:odd:border-r last:border-b-0"
			>
				<div class="inline-flex">
					<NuxtImg
						:src="`/img/portfolio/${item.img}`"
						class="object-cover w-full rounded h-[250px] md:h-[275px] lg:h-[300px]"
						:alt="item.title"
					/>
				</div>
				<div class="pt-4 pb-6 lg:pb-8">
					<NuxtLink :to="item.href" class="text-light font-mono font-semibold text-md tracking-[-0.25px] pb-1">
						{{ item.title }}
					</NuxtLink>
					<Text :content="$t(item.desc)" class="opacity-[85%]" />
				</div>
				<div class="flex items-end justify-between">
					<div class="space-x-3 opacity-90">
						<TechIcon
							v-for="(icon, i) in item.icons"
							:key="i"
							:icon="icon"
						/>
					</div>
					<Button
						:href="item.href"
						:label="$t('view_project')"
						class="mr-2"
					/>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
