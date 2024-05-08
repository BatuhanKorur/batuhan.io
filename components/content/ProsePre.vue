<script setup lang="ts">
const props = defineProps({
	language: {
		type: String,
		default: null,
	},
	filename: {
		type: String,
		default: null,
	},
})

const icon = computed(() => {
	switch (props.language) {
		case 'js':
			return 'logos:javascript'
		case 'dotenv':
			return 'vscode-icons:file-type-dotenv'
		case 'vue':
			return 'logos:vue'
		default:
			return 'logos:terminal'
	}
})
</script>

<template>
	<div class="border border-carbon rounded-md mt-3">
		<div class="px-4 py-3.5 border-b border-carbon flex items-center space-x-2">
			<Icon :name="icon" />
			<p class="text-[12px] subpixel-antialiased opacity-80 font-mono">
				{{ filename }}
			</p>
		</div>
		<pre><slot /></pre>
	</div>
</template>

<style scoped lang="postcss">
pre {
	@apply p-5 font-mono font-medium;
	@apply bg-blue-800/5 text-[13.5px];

	overflow-x: scroll;
	scroll-behavior: smooth;
	scrollbar-width: none;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
}

pre code .line {
	@apply block;
}
</style>
