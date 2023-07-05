<script setup lang="ts">
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { onMounted } from 'vue'
import KDButtonAlt from '../Buttons/KDButtonAlt.vue'
import KDSquareSplashV2 from '../KDSquareSplashV2/KDSquareSplashV2.vue'
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
	color: {
		type: String,
		default: 'navy',
	},
	squareSplash: {
		type: Boolean,
		default: false,
	},
	pagination: {
		type: Boolean,
		default: true,
	},
	navigationButtons: {
		type: Boolean,
		default: true,
	},
})

onMounted(() => {
	console.log('KDCarousel mounted successfully')
	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination, Autoplay],
		loop: true,
		autoplay: {
			delay: 5000,
		},
		speed: 500,

		pagination: {
			el: props.pagination ? '.swiper-pagination' : null,
			type: 'bullets',
			clickable: false,
			bulletActiveClass: 'kd-bullet-active',
		},
		navigation: {
			nextEl: props.navigationButtons ? '.swiper-button-next' : null,
			prevEl: props.navigationButtons ? '.swiper-button-prev' : null,
		},
	})

	console.log(swiper)
})
</script>

<style lang="scss">
.kd-carousel {
	.content {
		&.navy {
			@apply bg-navy text-white;
		}
		&.orange {
			@apply bg-orange text-white;
		}
	}

	.kd-bullet-active {
		background-color: white;
		opacity: 1;
	}
}
</style>

<template>
	<div class="kd-carousel my-10 relative" :class="color">
		<div
			class="content w-full lg:w-[50%] min-h-[32rem] px-8 pt-12 pb-[6rem] flex flex-wrap items-end rounded-xl shadow-lg relative overflow-hidden"
			:class="color"
		>
			<div class="w-full lg:w-[90%] h-full relative z-10">
				<div class="text-6xl tracking-wide mb-4">{{ title }}</div>
				<p class="text-2xl mb-8">{{ text }}</p>
				<KDButtonAlt
					v-if="linkText != ''"
					:text="linkText"
					:url="linkUrl"
					:theme="color == 'navy' ? 'orange' : 'navy'"
				/>
			</div>

			<div v-if="squareSplash" class="absolute top-0 left-0 w-full h-full z-0">
				<KDSquareSplashV2 :componentBackgroundColor="color" />
			</div>
		</div>

		<div
			class="carousel w-full lg:w-[55%] h-full lg:h-[107%] mt-[-4rem] lg:mt-0 relative lg:absolute lg:top-[50%] lg:translate-y-[-50%] lg:right-0 rounded-xl overflow-hidden"
		>
			<div class="swiper h-full">
				<div class="swiper-wrapper">
					<slot></slot>
				</div>

				<div
					class="absolute w-full h-full top-0 left-0 flex items-center justify-between px-4 z-20 pointer-events-none"
				>
					<div
						v-if="navigationButtons"
						class="swiper-button-prev aspect-square cursor-pointer pointer-events-auto"
					>
						<font-awesome-icon
							icon="fa-solid fa-angle-left"
							size="3x"
							class="text-white"
						/>
					</div>
					<div
						v-if="navigationButtons"
						class="swiper-button-next w-10 aspect-square cursor-pointer text-right pointer-events-auto"
					>
						<font-awesome-icon
							icon="fa-solid fa-angle-right"
							size="3x"
							class="text-white"
						/>
					</div>
				</div>

				<div
					v-if="pagination"
					class="swiper-pagination absolute bottom-0 w-full h-8 flex justify-center"
				></div>
			</div>
		</div>
	</div>
</template>
