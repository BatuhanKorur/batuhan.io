<script setup lang="ts">
import portfolio from '@/config/portfolio'
</script>

<template>
	<div>
		<Header>
			{{ $t('portfolio') }}
		</Header>
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<PortfolioCard
				v-for="item in portfolio"
				:key="item.href"
				:title="item.title"
				:img="item.img"
				:desc="item.desc"
				:href="item.href"
				:icons="item.icons"
			/>
		</div>
	</div>
</template>
