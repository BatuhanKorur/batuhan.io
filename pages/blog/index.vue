<template>
	<div class="lg:grid lg:grid-cols-10 min-h-svh">
		<div class="border-r border-carbon" />
		<div class="col-span-8">
			<Header title="Blog" />
			<section class="border-b border-carbon">
				<ContentList v-slot="{ list }" path="/blog">
					<NuxtLink
						v-for="article in list"
						:key="article._path"
						:to="article._path"
						class="grid grid-cols-1 p-6 space-y-6 md:space-y-0 md:grid-cols-7 md:gap-x-10"
					>
						<div class="md:col-span-4 md:flex md:flex-col md:justify-between">
							<div class="content-area">
								<span>{{ article.date }}</span>
								<h2>{{ article.title }}</h2>
								<p>{{ article.description }}</p>
							</div>
						</div>
						<div class="md:col-span-3 f-center border border-carbon rounded-md backdrop-brightness-125">
							<NuxtImg :src="article.img" class="object-contain w-full h-[240px] py-6 lg:py-10" />
						</div>
					</NuxtLink>
				</ContentList>
			</section>
		</div>
		<div class="border-l border-carbon" />
	</div>
</template>

<style scoped lang="postcss">
.content-area {
	span {
		@apply block text-grey-400 font-[450];
		@apply text-[15px];
	}

	h2 {
		@apply text-light font-[650] pt-1 pb-2;
		@apply text-[24px] leading-[30px];
	}

	p {
		@apply text-grey-200;
		@apply text-[15px] leading-[21px];
	}
}
</style>
