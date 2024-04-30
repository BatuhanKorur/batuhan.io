<script setup lang="ts">
import portfolio from '@/config/portfolio'
</script>

<template>
	<div>
		<p class="text-light font-mono px-3 pt-10 pb-8">
			Portfolio
		</p>
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<PortfolioCard
				v-for="item in portfolio"
				:key="item.href"
				class="first:border-t border-b border-carbon lg:border"
				:title="item.title"
				:img="item.img"
				:desc="item.desc"
				:href="item.href"
				:icons="item.icons"
			/>
		</div>
	</div>
</template>

<style scoped>

</style>
