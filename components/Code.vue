<script setup lang="ts">
defineProps({
	n: {
		type: String,
	},
})
</script>

<template>
	<div class="flex h-[24px] items-center mb-1 font-mono last:mb-3 first:mt-3 hover:backdrop-brightness-110">
		<label class="line-number pl-4 w-14">{{ n }}</label>
		<div class="text-[14px]">
			<div v-if="$slots.comment" class="comment">
				<slot name="comment" />
			</div>
			<div v-if="$slots.variable" class="variable">
				<p>
					<span class="keyword">const</span>
					<span class="name"><slot name="variable" /></span>
					<span class="keyword">=</span>
				</p>
				<p v-if="$slots.string" class="string">
					<span>'</span>
					<slot name="string" />
					<span>'</span>
				</p>
				<p v-if="$slots.val" class="operator">
					<span class="pl-2">
						<slot name="val" />
					</span>
				</p>
			</div>
			<div v-if="$slots.operator" class="operator">
				<slot name="operator" />
			</div>
			<div v-if="$slots.prop" class="flex items-center pl-5">
				<span class="prop"><slot name="prop" /></span>
				<span class="operator">:</span>
				<p v-if="$slots.string" class="string pl-2">
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
	color: #828C95;
	font-size: 12px;
}

.comment {
	color: #59626A;

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
	color: #FF7774;
}

.name {
	color: #72BEFC;
}

.string {
	color: #9ED2F9;
}

.operator {
	color: #E5ECF2;
}

.prop {
	color: #D3A3FB;
}
</style>
<!--
<script setup lang="ts">
defineProps({
	n: {
		type: String,
	},
	comment: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="flex items-center pb-1 font-mono">
		<label class="line-number">{{ n }}</label>
		<p v-if="comment" class="comment">
			// {{ comment }}
		</p>
		<div v-if="$slots.variable">
			<p class="code">
				<span class="kw">const</span>
				<span class="var"><slot name="variable" /></span>
				<span class="kw">=</span>
				<span v-if="$slots.string" class="str">'<slot name="string" />'</span>
				<span v-if="$slots.op" class="op"><slot name="op" /></span>
			</p>
		</div>
		<div v-if="$slots.prop">
			<p class="font-mono text-[13.5px] pl-5">
				<span class="prop"><slot name="prop" /></span>
				<span class="kw">:</span>
				<span v-if="$slots.string" class="str">'<slot name="string" />'</span>
				<span class="op">,</span>
			</p>
		</div>
		<div v-else>
			<p class="code">
				<span class="op"><slot /></span>
			</p>
		</div>
		&lt;!&ndash;		<div v-if="varName" class="flex items-center">
					<p class="variable">
						<span>const</span>
						<span>{{ varName }}</span>
						<span>=</span>
					</p>
					<p class="str">
						<span>'</span>
						<span>'</span>
					</p>
				</div> &ndash;&gt;
	</div>
</template>

<style scoped lang="postcss">
.line-number {
	@apply text-code-line/75 text-[12px] pr-6;
}

.comment {
	@apply text-code-comment text-[13.5px];
}

.code {
	@apply text-[13.5px] space-x-1.5;
}

.kw {
	@apply text-code-keyword;
}

.var {
	@apply text-code-variable;
}

.str {
	@apply text-code-string;
}

.op {
	@apply text-code-operator;
}

.prop {
	@apply text-[#D3A3FB];
}
</style>
-->
