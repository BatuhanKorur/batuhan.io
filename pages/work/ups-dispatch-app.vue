<script setup lang="ts">
import portfolio from '@/config/portfolio'

const work = ref(portfolio.dispatch_app)
</script>

<template>
	<PortfolioPage :image="work.img" :title="work.title">
		<template #desc>
			{{ $t(work.desc) }}
		</template>
		<template #category>
			<p>Mobile Development</p>
		</template>
		<template #year>
			2023 - 2024
		</template>
		<template #stack>
			<TechIcon
				v-for="(item, i) in work.icons"
				:key="i"
				:icon="item"
			/>
		</template>
		<div>
			<Description title="App for Couriers" />
			<Description title="Barcode Scanning" />
			<Description title="On-site Signature Capture" />
			<Description title="Delivery Updates" />
		</div>
	</PortfolioPage>
</template>
