<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	year: {
		type: String,
	},
	category: {
		type: Array,
	},
	stack: {
		type: Array,
	},
})
</script>

<template>
	<div>
		<div class="lg:pt-4 lg:pb-5">
			<NuxtImg
				:src="`/img/portfolio/${img}`"
				class="w-full object-cover rounded-xl"
				format="webp"
				quality="100"
			/>
		</div>
		<div>
			<div class="border-b pb-1 border-grey-500 mb-5">
				<h1 class="text-light font-semibold text-lg md:text-xl lg:text-2xl">
					{{ title }}
				</h1>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
				<div class="lg:col-span-3">
					<div class="space-y-4 lg:space-y-5">
						<PortfolioListItem title="Category">
							<p v-for="(item, i) in category" :key="i">
								{{ item }}
							</p>
						</PortfolioListItem>
						<PortfolioListItem title="Year">
							{{ year }}
						</PortfolioListItem>
						<PortfolioListItem title="Tech Stack" icons>
							<TechIcon
								v-for="(item, i) in stack"
								:key="i"
								:icon="item"
								css="size-4"
							/>
						</PortfolioListItem>
					</div>
				</div>
				<div class="lg:col-span-4">
					<p class="text-sm text-light md:text-[14.5px] md:leading-[21px]">
						{{ $t(desc) }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.seperator {
}
</style>
