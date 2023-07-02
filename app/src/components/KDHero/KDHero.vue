<script setup lang="ts">
import KDSquareSplashV2 from '../KDSquareSplashV2/KDSquareSplashV2.vue'
import KDButtonAlt from '../Buttons/KDButtonAlt.vue'
const props = defineProps({
	theme: {
		type: String,
		default: 'orange',
	},
	img: String,
	title: String,
	linkText: String,
	linkUrl: String,
})
</script>

<style lang="scss">
.kd-hero {
	&.orange {
		@apply bg-navy;

		.kmask {
			@apply bg-orange;
		}
	}
	&.navy {
		@apply bg-orange;

		.kmask {
			@apply bg-navy;
		}
	}
}

.kmask {
	clip-path: polygon(0% 55%, 100% 55%, 100% 100%, 0% 100%);

	@screen md {
		clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
	}
}
</style>

<template>
	<div class="kd-hero overflow-hidden relative shadow-lg" :class="theme">
		<div
			class="kd-hero__in w-full h-[400px] md:h-[350px] lg:h-[400px] xl:h-[500px]"
		>
			<div
				class="kd-hero__content w-full md:w-2/3 xl:w-1/2 h-full float-none md:float-right relative z-10"
			>
				<div class="kmask w-full h-full">
					<KDSquareSplashV2
						:componentBackgroundColor="theme"
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
						<KDButtonAlt
							text="Click here!"
							url="#"
							size="large"
							:theme="theme == 'navy' ? 'orange' : 'navy'"
						/>
					</div>
				</div>
			</div>

			<div class="kd-hero__img w-full h-full absolute top-0 left-0 py-3">
				<img :src="img" alt="kd hero" class="w-full h-full object-cover z-0" />
			</div>
		</div>
	</div>
</template>
