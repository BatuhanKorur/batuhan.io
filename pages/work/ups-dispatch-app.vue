<script setup lang="ts">
import { dispatch_app as work } from '@/config/portfolio'
</script>

<template>
	<PortfolioPage :image="work.img" :title="work.title">
		<template #desc>
			{{ $t(work.desc) }}
		</template>
		<template #category>
			<p>{{ $t('mobile_dev') }}</p>
			<p>{{ $t('ui_ux') }}</p>
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
