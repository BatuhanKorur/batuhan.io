<script setup lang="ts">
const { page } = useContent()
const article = ref(page.value)

useSchemaOrg([
	defineArticle({
		'@type': 'BlogPosting',
		'headline': article.value.title,
		'description': article.value.description,
		'image': article.value.img,
	}),
])
</script>

<template>
	<div class="min-h-svh mx-auto md:max-w-[600px] lg:max-w-[720px]">
		<ContentDoc v-slot="{ doc }">
			<article class="text-light px-4 py-5 md:px-4 md:py-10 lg:px-0 lg:py-12">
				<div class="flex items-center justify-between">
					<p class="text-grey-300 text-sm md:text-base">
						{{ doc.date }}
					</p>
					<div class="flex items-center space-x-2.5 font-medium text-accent text-sm md:text-base">
						<span>#vue</span>
						<span>#nuxt</span>
						<span>#resend</span>
					</div>
				</div>
				<div class="pt-2 pb-3.5">
					<h1 class="font-semibold text-3xl md:text-4xl lg:text-5xl">
						{{ doc.title }}
					</h1>
				</div>
				<div class="f-center border border-carbon rounded-md backdrop-brightness-125 mb-8">
					<NuxtImg :src="doc.img" class="py-10 h-[260px] lg:py-20 lg:h-[440px]" />
				</div>
				<div class="px-1">
					<ContentRenderer :value="doc" />
				</div>
			</article>
		</ContentDoc>
	</div>
</template>
