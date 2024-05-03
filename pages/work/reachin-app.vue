<script setup lang="ts">
import portfolio from '@/config/portfolio'

const work = ref(portfolio.reachin_app)
</script>

<template>
	<PortfolioPage :image="work.img" :title="work.title">
		<template #desc>
			Designed and Developed a hybrid mobile application for iOS and Android from scratch. I used Ionic Framework with
			Vue as the front-end stack and created a Vue UI Kit for easily customizable UI components and a scalable
			development process.
		</template>
		<template #category>
			<p>Mobile Development</p>
			<p>Mobile UI/UX Design</p>
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
		<div class="space-y-1">
			<Description title="App Design">
				The project started by designing the app in Figma and creating detailed user flow diagrams.
			</Description>
			<PortfolioImage img="reachin/01" />
			<PortfolioImage img="reachin/02" />
			<Description title="Products & Ordering" class="pt-6">
				Users can add a link to the product they desire. On the backend, using OxyLabs E-commerce Scrapper API, product
				information is fetched and returned to the app, automatically filling out the product-creating form.
			</Description>
			<PortfolioImage img="reachin/03" />
			<Description title="Shoppers" class="pt-6">
				Users can review their orders with a step-by-step layout, starting with gathering offers from travellers and
				ending with reviewing an order's completion.
			</Description>
			<PortfolioImage img="reachin/04" />
			<Description title="Travellers" class="pt-6">
				Users who are on a trip can fill out their travel details and see relevant orders that app users request.
				Travellers can start a chat with the shopper and make an offer.
			</Description>
			<PortfolioImage img="reachin/05" />
			<Description title="Chat and Wallet Modules" class="pt-6">
				In-app wallet system was created to manage earnings from order. Users can view their transaction history with
				detail and request a bank transfer.
			</Description>
			<PortfolioImage img="reachin/06" />
			<Description title="Landing Page" class="pt-6">
				Built with Nuxt and Vue frameworks. Storyblok was integrated to manage website content and blog.
			</Description>
			<PortfolioImage img="reachin/08" />
			<PortfolioImage img="reachin/07" />
		</div>
	</PortfolioPage>
</template>
