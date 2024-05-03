<template>
	<div class="grid grid-cols-1 lg:grid-cols-2">
		<div class="lg:border-r border-carbon">
			<Header>
				{{ $t('about') }}
			</Header>
			<section class="p-5 lg:p-8">
				<h2 class="text-[48px]">
					🧑‍💻
				</h2>
				<div class="space-y-4 md:max-w-screen-sm">
					<Text>{{ $t('about_me.0') }}</Text>
					<Text>{{ $t('about_me.1') }}</Text>
					<Text>{{ $t('about_me.2') }}</Text>
				</div>
				<div class="flex py-5 lg:flex-row-reverse mr-1">
					<Button href="https://batuhan.io/cv_batuhan-korur.pdf" download>
						{{ $t('download_resume') }}
					</Button>
				</div>
			</section>
		</div>
		<div>
			<Header class="border-t border-b-0 lg:border-b lg:border-t-0">
				{{ $t('experience') }}
			</Header>
			<section>
				<ExpCard
					company="Reachin"
					job="Full-stack Developer"
					:date="`2023 - ${$t('present')}`"
					:tags="['Javascript', 'Typescript', 'Ionic', 'Vue', 'Nuxt', 'Storyblok', 'AWS', 'Vercel']"
				>
					<Text>{{ $t('work_experience.reachin.desc') }}</Text>
					<ul class="list-inside list-disc">
						<ListItem>
							{{ $t('work_experience.reachin.list.0') }}
						</ListItem>
						<ListItem>
							{{ $t('work_experience.reachin.list.1') }}
						</ListItem>
						<ListItem>
							{{ $t('work_experience.reachin.list.2') }}
						</ListItem>
						<ListItem>
							{{ $t('work_experience.reachin.list.3') }}
						</ListItem>
					</ul>
				</ExpCard>
				<ExpCard
					company="Brickhunter"
					job="Full-stack Developer"
					date="2022 - 2024"
					:tags="['PHP', 'Laravel', 'Livewire', 'Alpine', 'Storyblok', 'Vue', 'SQL']"
				>
					<Text>{{ $t('work_experience.brickhunter.desc') }}</Text>
					<ul class="list-inside list-disc">
						<ListItem>{{ $t('work_experience.brickhunter.list.0') }}</ListItem>
						<ListItem>{{ $t('work_experience.brickhunter.list.1') }}</ListItem>
						<ListItem>{{ $t('work_experience.brickhunter.list.2') }}</ListItem>
						<ListItem>{{ $t('work_experience.brickhunter.list.3') }}</ListItem>
					</ul>
				</ExpCard>
				<ExpCard
					company="Universal Packing Specialists"
					job="Front-end Developer"
					date="2020 - 2022"
					:tags="['PHP', 'Laravel', 'Javascript', 'Vue', 'Quasar', 'Inertia.js', 'Capacitor']"
				>
					<Text>{{ $t('work_experience.ups.desc') }}</Text>
					<ul class="list-inside list-disc">
						<ListItem>{{ $t('work_experience.ups.list.0') }}</ListItem>
						<ListItem>{{ $t('work_experience.ups.list.1') }}</ListItem>
						<ListItem>{{ $t('work_experience.ups.list.2') }}</ListItem>
					</ul>
				</ExpCard>
				<ExpCard
					company="UI Bears"
					job="Front-end Developer / UI Designer"
					date="2018 - 2020"
					:tags="['Javascript', 'React', 'Vue', 'Figma', 'UI Design']"
				>
					<Text>{{ $t('work_experience.uibears.desc') }}</Text>
					<ul class="list-inside list-disc">
						<ListItem>{{ $t('work_experience.uibears.list.0') }}</ListItem>
						<ListItem>{{ $t('work_experience.uibears.list.1') }}</ListItem>
					</ul>
				</ExpCard>
				<ExpCard
					company="Okami Creative"
					job="Founder / Web Developer"
					date="2016 - 2019"
					:tags="['Javascript', 'Cordova', 'jQuery', 'Bootstrap', 'PHP', 'Wordpress']"
				>
					<Text>{{ $t('work_experience.okami_creative.desc') }}</Text>
					<ul class="list-inside list-disc">
						<ListItem>{{ $t('work_experience.okami_creative.list.0') }}</ListItem>
						<ListItem>{{ $t('work_experience.okami_creative.list.1') }}</ListItem>
					</ul>
				</ExpCard>
			</section>
		</div>
	</div>
</template>
