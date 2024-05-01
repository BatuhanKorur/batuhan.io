<script setup lang="ts">
import socials from '@/config/socials'
</script>

<template>
	<div class="flex flex-col">
		<Header>
			Contact
		</Header>
		<div class="bg-[#101218]">
			<Code n="1">
				<template #comment>
					Contact via email
				</template>
			</Code>
			<Code n="2">
				<template #variable>email</template>
				<template #string>
					<div class="code_link group">
						<NuxtLink to="mailto:mail@batuhan.io">mail@batuhan.io</NuxtLink>
						<div class="line group-hover:opacity-100" />
					</div>
				</template>
			</Code>
			<Code n="3" />
			<Code n="4">
				<template #comment>
					Link through social media
				</template>
			</Code>
			<Code n="5">
				<template #variable>socialLinks</template>
				<template #val>[</template>
			</Code>
			<Code n="6">
				<template #operator>{</template>
			</Code>
			<Code n="7">
				<template #prop>type</template>
				<template #string>github</template>
			</Code>
			<Code n="8">
				<template #prop>url</template>
				<template #string>
					<div class="code_link group">
						<NuxtLink :to="socials.github.url" target="_blank">{{ socials.github.url_pretty }}</NuxtLink>
						<div class="line group-hover:opacity-100" />
					</div>
				</template>
			</Code>
			<Code n="9">
				<template #operator>},</template>
			</Code>
			<Code n="10">
				<template #operator>{</template>
			</Code>
			<Code n="11">
				<template #prop>type</template>
				<template #string>linkedIn</template>
			</Code>
			<Code n="12">
				<template #prop>url</template>
				<template #string>
					<div class="code_link group">
						<NuxtLink :to="socials.linkedin.url" target="_blank">{{ socials.linkedin.url_pretty }}</NuxtLink>
						<div class="line group-hover:opacity-100" />
					</div>
				</template>
			</Code>
			<Code n="13">
				<template #operator>},</template>
			</Code>
			<Code n="14">
				<template #operator>{</template>
			</Code>
			<Code n="15">
				<template #prop>type</template>
				<template #string>instagram</template>
			</Code>
			<Code n="16">
				<template #prop>url</template>
				<template #string>
					<div class="code_link group">
						<NuxtLink :to="socials.instagram.url" target="_blank">{{ socials.instagram.url_pretty }}</NuxtLink>
						<div class="line group-hover:opacity-100" />
					</div>
				</template>
			</Code>
			<Code n="13">
				<template #operator>},</template>
			</Code>
			<Code n="14">
				<template #operator>];</template>
			</Code>
		</div>
	</div>
</template>
