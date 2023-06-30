<script setup lang="ts">
import KDSquareSplashV2 from '../KDSquareSplashV2/KDSquareSplashV2.vue'
import KDButton from '../Buttons/KDButton.vue'
import ComponentTitle from '../Typography/ComponentTitle.vue'
import KMask from '../SVG/KMask.vue'
const props = defineProps({
	color: String,
	img: String,
	title: String,
	linkText: String,
	linkUrl: String,
})
</script>

<style lang="scss">
.kmask {
	clip-path: polygon(55% 0%, 100% 0%, 100% 100%, 55% 100%);

	@screen md {
		clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
	}
}
</style>

<template>
	<section class="kd-hero overflow-hidden">
		<div
			class="w-full h-[400px] md:h-[350px] lg:h-[400px] xl:h-[500px] py-2 relative"
			:class="color"
		>
			<div class="flex justify-end w-full h-full absolute top-0 left-0">
				<!-- mask -->
				<div class="w-full md:w-[60%] lg:w-[50%] h-full rotate-90 md:rotate-0">
					<div class="w-full h-full kmask" :class="color"></div>
				</div>
				<!-- /mask -->

				<!-- content -->
				<div
					class="content absolute w-full md:w-[45%] h-full pb-8 md:pb-0 flex justify-center items-end md:items-center"
				>
					<div class="flex flex-col flex-wrap justify-center items-center">
						<ComponentTitle :text="title" :color="'text-white'" />
						<div class="bg-white rounded w-full h-[3px] mb-6"></div>
						<KDButton text="Click here" url="#" />
					</div>
				</div>
				<!-- /content -->
			</div>

			<img :src="img" alt="kd hero" class="w-full h-full object-cover" />
		</div>
	</section>
</template>
