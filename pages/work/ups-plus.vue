<script setup lang="ts">
import portfolio from '@/config/portfolio'

const work = ref(portfolio.ups)
</script>

<template>
	<PortfolioPage :image="work.img" :title="work.title">
		<template #desc>
			{{ $t(work.desc) }}
		</template>
		<template #category>
			<p>Web Development</p>
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
		<div class="space-y-4">
			<Description title="CRM Web App" />
			<Description title="Quote Management" />
			<Description title="Billing and Invoices" />
			<Description title="Transport Flows" />
			<Description title="Front Addon">
				Front Module
			</Description>
		</div>
	</PortfolioPage>
</template>
