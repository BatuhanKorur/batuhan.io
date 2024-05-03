<script setup lang="ts">
import portfolio from '@/config/portfolio'

const work = ref(portfolio.reachin_cortex)
</script>

<template>
	<PortfolioPage :image="work.img" :title="work.title">
		<template #desc>
			{{ $t(work.desc) }}
		</template>
		<template #category>
			<p>Web App Development</p>
			<p>Backend Development</p>
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
			<Description title="Database Design" />
			<Description title="API Backend" />
			<Description title="CRM Web Application" />
			<Description title="Marketing Module" />
			<Description title="Support Support" />
		</div>
	</PortfolioPage>
</template>
