<script setup lang="ts">
import KDButtonAlt from '../Buttons/KDButtonAlt.vue'
import KDSquareSplashV2 from '../KDSquareSplashV2/KDSquareSplashV2.vue'
const props = defineProps({
	img: String,
	title: String,
	subtitle: String,
	text: String,
	linkText: String,
	linkUrl: String,
})
</script>

<template>
	<div class="kd-card relative shadow-lg rounded overflow-hidden">
		<div class="flex flex-wrap">
			<div class="w-full max-h-60 md:max-h-72 relative">
				<img :src="img" alt="card img" class="w-full h-full object-cover" />
			</div>

			<div
				class="w-full bg-yellow px-4 md:px-6 py-2 md:py-4 relative overflow-hidden"
			>
				<div class="text-navyDarken relative z-10">
					<div class="text-lg md:text-xl uppercase">{{ subtitle }}</div>
					<div class="text-2xl md:text-4xl mb-2 md:mb-4">{{ title }}</div>
					<p class="text-sm md:text-base text-navy mb-2 md:mb-4">{{ text }}</p>
					<KDButtonAlt :text="linkText" :url="linkUrl" />
				</div>

				<div class="w-full h-full absolute top-0 left-0 z-0">
					<KDSquareSplashV2 componentBackgroundColor="yellow" />
				</div>
			</div>
		</div>
	</div>
</template>
