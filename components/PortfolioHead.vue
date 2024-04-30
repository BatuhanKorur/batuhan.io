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
	<div class="lg:max-w-screen-lg lg:mx-auto">
		<div class="p-4 md:p-8">
			<NuxtImg :src="`/img/portfolio/${img}`" class="w-full h-56 object-cover rounded-xl md:h-72 lg:h-96" />
		</div>
		<div class="px-5 md:px-8">
			<div class="border-b pb-1 border-grey-400 mb-5">
				<h1 class="text-light text-[20px] font-semibold">
					{{ title }}
				</h1>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
				<div class="lg:col-span-3">
					<div class="space-y-3 md:space-y-4">
						<PortfolioListItem title="Category">
							<p v-for="item in category" :key="item">
								{{ item }}
							</p>
						</PortfolioListItem>
						<PortfolioListItem title="Year">
							{{ year }}
						</PortfolioListItem>
						<PortfolioListItem title="Tech Stack" icons>
							<Icon
								v-for="item in stack"
								:key="item"
								:name="`logos:${item}`"
								class="size-3.5"
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
