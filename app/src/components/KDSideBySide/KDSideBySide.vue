<script setup lang="ts">
import KDButton from '../Buttons/KDButton.vue'
import ComponentTitle from '../Typography/ComponentTitle.vue'
import ComponentSubtitle from '../Typography/ComponentSubtitle.vue'
import ComponentText from '../Typography/ComponentText.vue'
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
	<section class="kd-side-by-side container mx-auto my-8 px-4 lg:px-0">
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
				<ComponentTitle :text="title" :color="'text-white'" />
				<ComponentSubtitle :text="subtitle" :color="'text-white'" />
				<ComponentText :text="text" :color="'text-white'" />

				<KDButton
					v-if="ctaText != ''"
					size="small"
					:color="color == 'navy' ? 'yellow' : color == 'orange' ? 'navy' : ''"
					:text="ctaText"
					:url="ctaLink"
					:newTab="false"
				/>
			</div>
		</div>
	</section>
</template>
