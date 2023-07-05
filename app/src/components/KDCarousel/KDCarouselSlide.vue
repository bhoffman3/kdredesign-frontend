<script setup lang="ts">
import KDButtonAlt from '../Buttons/KDButtonAlt.vue'
const props = defineProps({
	title: {
		type: String,
		default: 'Title',
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
		default: '#',
	},
	image: {
		type: String,
		default: '',
	},
	color: {
		type: String,
		default: 'orange',
	},
	squareSplash: {
		type: Boolean,
		default: false,
	},
})
</script>

<style lang="scss">
.kd-carousel-slide {
	cursor: grab;
	&.navy {
		@apply bg-navy text-white;
	}
	&.orange {
		@apply bg-orange text-white;
	}
	&.yellow {
		@apply bg-yellow text-navy;
	}
	&.sky {
		@apply bg-sky text-navy;
	}
	&.gray {
		@apply bg-gray text-navy;
	}
}
</style>

<template>
	<div
		class="kd-carousel-slide swiper-slide w-full h-full px-8 py-12 shadow-xl relative overflow-hidden"
		:class="color"
	>
		<div class="flex w-full h-full items-center">
			<div
				class="flex w-full lg:w-[90%] mx-auto p-16 justify-center items-center relative z-10"
			>
				<div class="kd-carousel-slide__content relative z-10">
					<div v-if="title != ''" class="text-5xl mb-4 tracking-wide">
						{{ title }}
					</div>
					<p v-if="text != ''" class="text-xl">{{ text }}</p>
					<KDButtonAlt
						v-if="linkText != ''"
						:text="linkText"
						:url="linkUrl"
						class="mt-4"
					/>
				</div>

				<div
					v-if="image != ''"
					class="absolute top-0 left-0 bg-navy w-full h-full rounded-lg opacity-50 z-0"
				></div>
			</div>
		</div>

		<div
			v-if="image != ''"
			class="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
		>
			<img :src="image" alt="slide image" class="w-full h-full object-cover" />
		</div>
	</div>
</template>
