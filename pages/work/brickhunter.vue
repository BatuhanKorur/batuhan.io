<script setup lang="ts">
</script>

<template>
	<div class="portfolio_container">
		<PortfolioHead
			title="Brickhunter"
			img="brickhunter.png"
			desc="brickhunter.desc"
			year="2022 - 2023"
			:category="['Web Development', 'UI/UX Design']"
			:stack="['javascript', 'vue', 'laravel', 'storyblok-icon', 'tailwindcss-icon']"
		/>
		<section class="py-16">
			<h2 class="h2">
				Design System
			</h2>
			<PortfolioImage img="brickhunter/01" />
			<PortfolioImage img="brickhunter/02" />
		</section>
	</div>
</template>

<style scoped>

</style>
