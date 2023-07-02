<script setup lang="ts">
import KDButtonAlt from '../Buttons/KDButtonAlt.vue'
const props = defineProps({
	title: {
		type: String,
		default: '',
	},
	text: {
		type: String,
		default: '',
	},
	linkText: {
		type: String,
		default: '',
	},
	linkUrl: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="kd-cta relative overflow-hidden rounded-xl shadow-lg">
		<div
			class="kd-cta__bg w-full h-full bg-sky absolute top-0 left-0 z-0"
		></div>

		<div class="flex flex-wrap relative z-10">
			<div
				class="kd-cta__left w-full lg:w-[25%] flex flex-wrap relative opacity-25 lg:opacity-100 z-0"
			>
				<div class="kd-cta__left-top w-full h-[70%] relative">
					<div class="bg-gray w-5 h-5 absolute top-4 left-1/2 rounded"></div>
					<div
						class="bg-orange w-8 h-8 absolute top-8 left-[90%] rounded"
					></div>
					<div class="bg-navy w-10 h-10 absolute top-24 left-8 rounded"></div>
					<div
						class="bg-yellow w-14 h-14 absolute top-28 left-1/2 rounded"
					></div>
					<div
						class="bg-lightGray w-4 h-4 absolute top-32 left-[90%] rounded"
					></div>
				</div>

				<div class="kd-cta__left-bot w-full h-[30%] relative">
					<div
						class="w-[75%] lg:w-[50%] h-full bg-orange rounded-xl rounded-es-none rounded-ee-none mx-auto"
					></div>
				</div>
			</div>

			<div class="kd-cta__content w-full lg:w-[55%] relative z-10">
				<div class="px-4 lg:px-10 py-8 lg:my-16">
					<div
						class="text-5xl md:text-6xl lg:text-7xl text-navy font-bold tracking-wide uppercase mb-4"
					>
						{{ title }}
					</div>
					<p class="text-lg text-navy font-semibold">{{ text }}</p>
				</div>
			</div>

			<div class="kd-cta__right w-full lg:w-[20%] flex flex-wrap px-4 lg:px-0">
				<div
					class="w-[75%] lg:w-[90%] h-28 lg:h-36 bg-navy rounded-xl mb-[-5%] lg:mt-[-5%] ml-16 order-2 lg:order-1 opacity-25 lg:opacity-100"
				></div>
				<div v-if="linkText != ''" class="w-full order-1 md:order-2">
					<KDButtonAlt :text="linkText" :url="linkUrl" size="large" />
				</div>
			</div>
		</div>
	</div>
</template>
