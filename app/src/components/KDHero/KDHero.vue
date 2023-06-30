<script setup lang="ts">
import KDSquareSplashV2 from '../KDSquareSplashV2/KDSquareSplashV2.vue'
import KDButtonAlt from '../Buttons/KDButtonAlt.vue'
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
	clip-path: polygon(0% 55%, 100% 55%, 100% 100%, 0% 100%);

	@screen md {
		clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
	}
}
</style>

<template>
	<div class="kd-hero overflow-hidden relative" :class="color">
		<div
			class="kd-hero__in w-full h-[400px] md:h-[350px] lg:h-[400px] xl:h-[500px]"
		>
			<div
				class="kd-hero__content w-full md:w-2/3 xl:w-1/2 h-full float-none md:float-right relative z-10"
			>
				<div class="kmask w-full h-full" :class="color">
					<KDSquareSplashV2
						componentBackgroundColor="orange"
						:squareFinalOpacity="0.25"
					/>
				</div>

				<div
					class="w-full md:w-[80%] h-1/2 md:h-full flex justify-center items-center absolute bottom-0 md:top-0 right-0"
				>
					<div class="flex justify-center flex-wrap">
						<div class="text-4xl md:text-5xl 2xl:text-6xl text-white font-bold">
							{{ title }}
						</div>
						<div class="bg-white rounded w-[90%] h-[5px] mt-3 mb-4"></div>
						<KDButtonAlt text="Click here!" url="#" size="large" />
					</div>
				</div>
			</div>

			<div class="kd-hero__img w-full h-full absolute top-0 left-0 py-2">
				<img :src="img" alt="kd hero" class="w-full h-full object-cover z-0" />
			</div>
		</div>
	</div>
</template>

<!-- <template>
	<div class="kd-hero overflow-hidden relative">
		<div
			class="w-full h-[400px] md:h-[350px] lg:h-[400px] xl:h-[500px] flex justify-end py-2"
			:class="color"
		>
			<div class="w-full md:w-[60%] lg:w-[50%] h-full relative z-10">
				<div class="kmask w-full h-full" :class="color">
					<KDSquareSplashV2
						componentBackgroundColor="orange"
						:squareFinalOpacity="0.75"
					/>
				</div>

				<div class="content w-full h-full bg-red-500">
					<ComponentTitle :text="title" :color="'text-white'" />
					<div class="bg-white rounded w-full h-[3px] mb-6"></div>
					<KDButton text="Click here" url="#" />
				</div>
			</div>

			<img
				:src="img"
				alt="kd hero"
				class="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
		</div>
	</div>
</template> -->
