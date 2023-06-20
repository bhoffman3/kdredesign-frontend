<script setup lang="ts">
import DefaultButton from '../Buttons/KDButton.vue'
const props = defineProps({
	contentSide: String,
	color: String,
	img: String,
	title: String,
	subtitle: String,
	text: String,
	ctaText: String,
	ctaLink: String,
})
</script>

<template>
	<section class="kd-side-by-side container mx-auto my-8">
		<div
			class="flex flex-wrap overflow-hidden p-2"
			:class="
				color == 'navy'
					? 'bg-navy'
					: color == 'orange'
					? 'bg-orange'
					: 'bg-navy'
			"
		>
			<div
				class="kd-side-by-side__img w-full md:w-1/2 h-[15em] md:h-auto relative"
				:class="contentSide == 'right' ? 'order-1' : 'order-2'"
			>
				<img
					class="object-cover object-center w-full h-full absolute"
					:src="img"
					alt="side by side img"
				/>
			</div>

			<div
				class="kd-side-by-side__content w-full md:w-1/2 h-auto px-6 py-8 xl:px-24 xl:py-36"
				:class="contentSide == 'right' ? 'order-2' : 'order-1'"
			>
				<div class="text-white text-4xl lg:text-6xl uppercase mb-1">
					{{ title }}
				</div>
				<div class="text-white text-lg lg:text-2xl uppercase mb-4">
					{{ subtitle }}
				</div>
				<p class="text-white text-base lg:text-lg mb-4">
					{{ text }}
				</p>
				<DefaultButton
					v-if="ctaText != ''"
					:color="color == 'navy' ? 'yellow' : color == 'orange' ? 'navy' : ''"
					:text="ctaText"
					:url="ctaLink"
					:newTab="false"
				/>
			</div>
		</div>
	</section>
</template>
