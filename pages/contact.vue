<script setup lang="ts">
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
					<NuxtLink to="/" class="underline">mail@batuhan.io</NuxtLink>
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
					<NuxtLink to="/" class="underline">github.com/BatuhanKorur</NuxtLink>
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
					<NuxtLink to="/" class="underline">linkedin.com/in/BatuhanKorur</NuxtLink>
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
					<NuxtLink to="/" class="underline">instagram.com/batuhan.korur</NuxtLink>
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
