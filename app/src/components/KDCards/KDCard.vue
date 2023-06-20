<script setup lang="ts">
import KDButton from '../Buttons/KDButton.vue'
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
	<div class="kd-card relative bg-navy rounded-lg shadow-lg overflow-hidden">
		<div class="kd-card__img w-full h-[250px] p-2 pb-0">
			<img
				:src="img"
				alt="card img"
				class="w-full h-full object-cover object-center rounded"
			/>
		</div>

		<div class="kd-card__content w-full h-1/2 px-8 py-4 relative">
			<div class="text-white uppercase text-4xl">{{ title }}</div>
			<div class="text-white uppercase text-xl">{{ subtitle }}</div>
			<p class="text-white my-4">{{ text }}</p>
			<KDButton v-if="linkText != ''" :text="linkText" :url="linkUrl" />
		</div>
	</div>
</template>
