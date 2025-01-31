<script setup lang="ts">
const { page } = useContent()
const article = ref(page.value)
useSchemaOrg([
	defineArticle({
		'@type': 'BlogPosting',
		'headline': article.value.title,
		'description': article.value.description,
		'author': 'Batuhan Korur',
		'image': article.value.img,
		'datePublished': article.value.date,
		'dateModified': article.value.date,
		'keywords': [...article.value.tags, 'batuhan korur'],
	}),
])
</script>

<template>
	<div class="min-h-svh mx-auto md:max-w-[600px] lg:max-w-[720px]">
		<ContentDoc v-slot="{ doc }">
			<article class="text-light px-4 py-5 md:py-10 lg:px-0 lg:py-12">
				<div class="f-between">
					<Date :date="doc.date" />
					<div class="flex items-center space-x-2 font-medium text-accent text-sm md:text-base">
						<span v-for="tag in doc.tags" :key="tag">#{{ tag }}</span>
					</div>
				</div>
				<h1 class="pt-1 pb-3 font-semibold text-3xl md:text-4xl lg:text-5xl">
					{{ doc.title }}
				</h1>
				<div class="f-center border border-carbon rounded-md backdrop-brightness-125 mb-8">
					<NuxtImg :src="doc.img" class="py-10 h-[260px] md:h-[340px] md:py-14 lg:py-20 lg:h-[440px]" />
				</div>
				<div class="px-1">
					<ContentRenderer :value="doc" />
				</div>
			</article>
		</ContentDoc>
	</div>
</template>
