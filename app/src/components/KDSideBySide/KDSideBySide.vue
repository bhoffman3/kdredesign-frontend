<script setup lang="ts">
import KDButtonAlt from '../Buttons/KDButtonAlt.vue'
import KDSquareSplashV2 from '../KDSquareSplashV2/KDSquareSplashV2.vue'
const props = defineProps({
	contentSide: String,
	theme: {
		type: String,
		default: '',
	},
	img: String,
	title: String,
	subtitle: String,
	text: String,
	ctaText: String,
	ctaLink: String,
	marginBottom: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="kd-side-by-side relative" :class="marginBottom ? 'mb-8' : ''">
		<div class="flex flex-wrap lg:flex-nowrap gap-1 md:gap-3">
			<div
				class="content w-full lg:w-[60%] p-6 md:p-0 md:pt-16 bg-orange flex flex-wrap justify-center items-top order-2 lg:order-1 rounded-xl relative overflow-hidden"
			>
				<div class="w-full lg:w-3/4">
					<div
						class="text-lg lg:text-xl text-white uppercase ml-1 tracking-wide"
					>
						{{ subtitle }}
					</div>
					<div class="text-4xl lg:text-6xl text-white tracking-wider">
						{{ title }}
					</div>
					<p
						class="text-white text-base lg:text-lg mt-4 lg:mt-6 tracking-wide leading-7"
					>
						{{ text }}
					</p>
					<KDButtonAlt
						v-if="ctaText != ''"
						:text="ctaText"
						:url="ctaLink"
						size="large"
						class="mt-6"
					/>
				</div>
				<div class="absolute bottom-0 left-0 w-full h-36 bg-navy">
					<KDSquareSplashV2
						componentBackgroundColor="navy"
						:squareFinalOpacity="0.7"
						xGap="1rem"
						yGap="1rem"
					/>
				</div>
			</div>

			<div
				class="image w-full lg:w-[40%] order-1 lg:order-2 rounded-lg aspect-square overflow-hidden"
			>
				<img
					v-if="img != ''"
					:src="img"
					alt="feature img"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>
	</div>
</template>
