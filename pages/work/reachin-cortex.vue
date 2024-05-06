<script setup lang="ts">
import { reachin_cortex as work } from '@/config/portfolio'
</script>

<template>
	<PortfolioPage :image="work.img" :title="work.title">
		<template #desc>
			{{ $t(work.desc) }}
		</template>
		<template #category>
			<p>{{ $t('api_backend_dev') }}</p>
			<p>{{ $t('web_app_dev') }}</p>
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
			<Description
				:title="$t('cortex.section1.title')"
				:content="$t('cortex.section1.content')"
			/>
			<PortfolioImage img="cortex/01" />
			<PortfolioImage img="cortex/02" />
			<Description
				class="pt-4"
				:title="$t('cortex.section2.title')"
				:content="$t('cortex.section2.content')"
			/>
			<PortfolioImage img="cortex/03" />
			<PortfolioImage img="cortex/04" />
			<PortfolioImage img="cortex/05" />
		</div>
	</PortfolioPage>
</template>
