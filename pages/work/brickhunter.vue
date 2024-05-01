<script setup lang="ts">
</script>

<template>
	<div class="c-portfolio-container">
		<PortfolioHead
			title="Brickhunter"
			img="brickhunter.png"
			desc="brickhunter.desc"
			year="2022 - 2023"
			:category="['Web Development', 'UI/UX Design']"
			:stack="['javascript', 'vue', 'laravel', 'storyblok-icon', 'tailwindcss-icon']"
		/>
		<section class="py-16">
			<PortfolioImage img="brickhunter/01" />
			<PortfolioImage img="brickhunter/02" />
		</section>
	</div>
</template>

<style scoped>

</style>
