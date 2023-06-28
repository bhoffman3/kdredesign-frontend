<script setup lang="ts">
import KDButton from '../Buttons/KDButton.vue'
import ComponentTitle from '../Typography/ComponentTitle.vue'
import ComponentSubtitle from '../Typography/ComponentSubtitle.vue'
import ComponentText from '../Typography/ComponentText.vue'
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
	<div class="kd-card relative bg-yellow shadow-lg overflow-hidden">
		<div class="w-full h-full flex flex-col">
			<div class="kd-card__img w-full flex-1 overflow-auto">
				<img
					:src="img"
					alt="card img"
					class="w-full h-full object-cover object-center"
				/>
			</div>

			<div
				class="kd-card__content w-full px-8 py-4 relative flex-1 overflow-auto"
			>
				<ComponentTitle :text="title" :color="'text-navy'" />
				<ComponentSubtitle :text="subtitle" :color="'text-navy'" />
				<ComponentText :text="text" :color="'text-navy'" />

				<KDButton
					v-if="linkText != ''"
					:text="linkText"
					:url="linkUrl"
					:color="'navy'"
				/>
			</div>
		</div>
	</div>
</template>
