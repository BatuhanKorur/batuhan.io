<script setup lang="ts">
</script>

<template>
	<div>
		<PortfolioHeadImage src="dummy.png" />
		<div class="px-4 lg:px-8 ">
			<PortfolioTitle title="UPS Package Tracking" />
			<div class="grid grid-cols-1 lg:grid-cols-7">
				<div class="mt-4 space-y-3 lg:col-span-3">
					<PortfolioListItem title="Category">
						<p>Web Development</p>
						<p>Mobile Development</p>
					</PortfolioListItem>
					<PortfolioListItem title="Year">
						<p>2019-2020</p>
					</PortfolioListItem>
					<PortfolioListItem title="Tech Stack">
						<p>Javascript</p>
						<p>PHP / Laravel</p>
						<p>Vue / Inertia.js</p>
					</PortfolioListItem>
				</div>
				<div class="pt-4 lg:col-span-4">
					<p class="text-base text-light leading-5">
						{{ $t('ups_tracking_app.desc') }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
