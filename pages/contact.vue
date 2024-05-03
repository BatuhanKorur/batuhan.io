<script setup lang="ts">
import socials from '@/config/socials'
</script>

<template>
	<div class="flex flex-col">
		<Header>
			{{ $t('contact') }}
		</Header>
		<div class="bg-[#101218] lg:border-b border-carbon">
			<Code n="1">
				<template #comment>
					{{ $t('contact_via_email') }}
				</template>
			</Code>
			<Code n="2">
				<template #variable>email</template>
				<template #string>
					<CodeLink href="mailto:mail@batuhan.io">
						mail@batuhan.io
					</CodeLink>
				</template>
			</Code>
			<Code n="3" />
			<Code n="4">
				<template #comment>
					{{ $t('link_via_socials') }}
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
					<CodeLink :href="socials.github.url" blank>
						{{ socials.github.url_pretty }}
					</CodeLink>
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
					<CodeLink :href="socials.linkedin.url" blank>
						{{ socials.linkedin.url_pretty }}
					</CodeLink>
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
					<CodeLink :href="socials.instagram.url" blank>
						{{ socials.instagram.url_pretty }}
					</CodeLink>
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
