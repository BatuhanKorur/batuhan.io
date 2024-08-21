<script setup lang="ts">
</script>

<template>
	<NuxtLayout>
		<div class="min-h-svh lg:grid lg:grid-cols-10">
			<div class="border-r border-carbon" />
			<div class="col-span-8">
				<Header title="Blog" />
				<ContentList v-slot="{ list }" path="/blog">
					<NuxtLink
						v-for="article in list"
						:key="article._path"
						:to="article._path"
						class="grid grid-cols-1 p-6 md:grid-cols-7 md:gap-x-10 border-b border-carbon"
					>
						<div class="md:col-span-4 md:flex md:flex-col md:justify-between">
							<div class="space-y-1">
								<h2 class="text-light font-semibold text-2xl md:text-3xl">
									{{ article.title }}
								</h2>
								<p class="text-grey-200 text-base lg:leading-6">
									{{ article.description }}
								</p>
							</div>
							<div class="f-between mt-5 mb-2">
								<Date :date="article.date" />
								<div class="flex items-center space-x-2 font-medium text-accent text-sm md:text-base">
									<span v-for="tag in article.tags" :key="tag">#{{ tag }}</span>
								</div>
							</div>
						</div>
						<div class="md:col-span-3 f-center border border-carbon rounded-md bg-blue-400/10">
							<NuxtImg :src="article.img" class="object-contain w-full h-[240px] py-8 lg:py-10" />
						</div>
					</NuxtLink>
				</ContentList>
			</div>
			<div class="border-l border-carbon" />
		</div>
	</NuxtLayout>
</template>
