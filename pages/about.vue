<script setup lang="ts">
</script>

<template>
	<div class="grid grid-cols-1 lg:grid-cols-2">
		<section class="px-4 py-6 lg:px-8 lg:py-10">
			<h1 class="text-[48px]">
				🧑‍💻
			</h1>
			<div class="space-y-3 text-grey-100 font-[420] lg:pr-6">
				<p class="text-pretty text-sm md:text-base">
					{{ $t('about_me.0') }}
				</p>
				<p class="text-pretty text-sm md:text-base">
					{{ $t('about_me.1') }}
				</p>
				<p class="text-pretty text-sm md:text-base">
					{{ $t('about_me.2') }}
				</p>
			</div>
		</section>
		<section class="lg:border-l lg:border-carbon">
			<ExpCard
				company="Reachin"
				job="Full-stack Developer"
				date="2023 - Present"
				class="lg:border-t-0"
				:tags="['Javascript', 'Typescript', 'Ionic', 'Vue', 'Vercel', 'Nuxt', 'AWS', 'Storyblok']"
			>
				<p>{{ $t('work_experience.reachin.desc') }}</p>
				<ul>
					<li>{{ $t('work_experience.reachin.list.0') }}</li>
					<li>{{ $t('work_experience.reachin.list.1') }}</li>
					<li>{{ $t('work_experience.reachin.list.2') }}</li>
					<li>{{ $t('work_experience.reachin.list.3') }}</li>
				</ul>
			</ExpCard>
			<ExpCard
				company="Brickhunter"
				job="Full-stack Developer"
				date="2022 - 2024"
				:tags="['PHP', 'Laravel', 'Livewire', 'Alpine', 'Storybook', 'SQL']"
			>
				<p>{{ $t('work_experience.brickhunter.desc') }}</p>
				<ul>
					<li>{{ $t('work_experience.brickhunter.list.0') }}</li>
					<li>{{ $t('work_experience.brickhunter.list.1') }}</li>
					<li>{{ $t('work_experience.brickhunter.list.2') }}</li>
					<li>{{ $t('work_experience.brickhunter.list.3') }}</li>
				</ul>
			</ExpCard>
			<ExpCard
				company="Universal Packing Specialists"
				job="Front-end Developer"
				date="2019 - 2022"
				:tags="['PHP', 'Laravel', 'Javascript', 'Vue', 'Quasar', 'Inertia.js']"
			>
				<p>{{ $t('work_experience.ups.desc') }}</p>
				<ul>
					<li>{{ $t('work_experience.ups.list.0') }}</li>
					<li>{{ $t('work_experience.ups.list.1') }}</li>
					<li>{{ $t('work_experience.ups.list.2') }}</li>
				</ul>
			</ExpCard>
			<ExpCard
				company="UI Bears"
				job="Front-end Developer / UI Designer"
				date="2018-2019"
				:tags="['Javascript', 'React', 'Vue', 'PHP']"
			>
				<p>{{ $t('work_experience.uibears.desc') }}</p>
				<ul>
					<li>{{ $t('work_experience.uibears.list.0') }}</li>
					<li>{{ $t('work_experience.uibears.list.1') }}</li>
				</ul>
			</ExpCard>
			<ExpCard
				company="Okami Creative"
				job="Founder / Web Developer"
				date="2016 - 2018"
				:tags="['Javascript', 'Cordova', 'jQuery', 'PHP', 'Wordpress']"
			>
				<p>{{ $t('work_experience.okami_creative.desc') }}</p>
				<ul>
					<li>{{ $t('work_experience.okami_creative.list.0') }}</li>
					<li>{{ $t('work_experience.okami_creative.list.1') }}</li>
				</ul>
			</ExpCard>
		</section>
	</div>
</template>

<style scoped>

</style>
