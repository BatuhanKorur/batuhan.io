<script setup lang="ts">
defineProps({
	n: {
		type: String,
	},
})
</script>

<template>
	<div class="flex items-center h-[24px] font-mono first:mt-3 last:mb-3 hover:backdrop-brightness-110">
		<label class="line-number pl-3 w-10">{{ n }}</label>
		<div class="text-[13.5px]">
			<!-- Comment -->
			<div v-if="$slots.comment" class="comment">
				<slot name="comment" />
			</div>

			<!-- Variable -->
			<div v-if="$slots.variable" class="variable">
				<p>
					<span class="keyword">const</span>
					<span class="name"><slot name="variable" /></span>
					<span class="keyword">=</span>
				</p>
				<div v-if="$slots.string" class="string pl-1.5 flex space-x-px">
					<span>'</span>
					<slot name="string" />
					<span>'</span>
				</div>
				<p v-if="$slots.val" class="operator">
					<span class="pl-1.5">
						<slot name="val" />
					</span>
				</p>
			</div>

			<!-- Operator -->
			<div v-if="$slots.operator" class="operator">
				<slot name="operator" />
			</div>

			<!-- Prop -->
			<div v-if="$slots.prop" class="flex items-center pl-4">
				<span class="prop"><slot name="prop" /></span>
				<span class="keyword">:</span>
				<p v-if="$slots.string" class="string pl-1.5 flex space-x-px">
					<span>'</span>
					<slot name="string" />
					<span>'</span>
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="postcss">
.line-number {
	color: #6f7480;
	font-size: 12px;
}

.comment {
	color: #666f80;

	&:before {
		content: '//'
	}
}

.variable {
	@apply flex items-center;

	p {
		@apply first:space-x-1.5;

	}
}

.keyword {
	@apply text-code-keyword;
}

.name {
	@apply text-code-label;
	font-weight: 500;
}

.string {
	@apply text-code-string;
}

.operator {
	color: #8A92A8;
}

.prop {
	color: #D1B0FA;
	font-weight: 450;
}
</style>
