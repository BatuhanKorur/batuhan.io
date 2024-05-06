<script setup lang="ts">
import { brickhunter as work } from '@/config/portfolio'
</script>

<template>
	<PortfolioPage :image="work.img" :title="work.title">
		<template #desc>
			{{ $t(work.desc) }}
		</template>
		<template #category>
			<p>{{ $t('web_dev') }}</p>
			<p>{{ $t('ui_ux') }}</p>
		</template>
		<template #year>
			2022 - 2023
		</template>
		<template #stack>
			<TechIcon
				v-for="(item, i) in work.icons"
				:key="i"
				:icon="item"
			/>
		</template>
		<div class="space-y-4">
			<Description title="Design System">
				Before any development work, we created a detailed design system in Figma to communicate various design choices
				more effectively with the team and improve development productivity.
			</Description>
			<PortfolioImage img="brickhunter/01" />
			<PortfolioImage img="brickhunter/02" />
			<Description title="Redesigning and Developing UI">
				Development of multiple new modules and pages while integrating these components into storyblok for easy content
				management.
			</Description>
			<Description title="New Service User Flow">
				We updated the user flow of service-related pages and clarified the process to the customer.
			</Description>
			<Description title="Optimizing Ecommerce">
				We updated the e-commerce platform to encompass building related products instead of solely on bricks.
			</Description>
			<Description title="Product Ordering Process">
				The cart and ordering process was updated to a familiar e-commerce flow, and various new features were added to
				track and notify both the customer and business about the order status.
			</Description>
			<Description title="Web Search Feature">
				A search feature was added, backed by Algolia. Users could search for products, blog posts, and other
				informative pages.
			</Description>
			<Description title="Storyblok Integration">
				We integrated storyblok so business managers could easily create and update every website page. In the process,
				we completely redesigned the blog system and updated various SEO-related aspects.
			</Description>
		</div>
	</PortfolioPage>
</template>
