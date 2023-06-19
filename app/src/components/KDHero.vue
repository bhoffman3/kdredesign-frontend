<script setup lang="ts">
import KDSquareSplash from './KDSquareSplash.vue'

const props = defineProps({
	color: String,
	img: String,
	title: String,
	linkText: String,
	linkUrl: String,
})
</script>

<style lang="scss">
.kd-angle-mask-left {
	height: 100%;
	clip-path: polygon(50% 40%, 0% 65%, 100% 65%);

	@screen md {
		clip-path: polygon(50% 50%, 100% 0%, 100% 100%);
	}

	@screen lg {
		clip-path: polygon(10% 50%, 100% 0%, 100% 100%);
	}

	@screen xl {
		clip-path: polygon(40% 50%, 100% 0%, 100% 100%);
	}
}
</style>

<template>
	<section class="kd-hero overflow-hidden">
		<div class="w-full h-[500px] p-2 relative" :class="color">
			<div class="flex justify-end w-full h-full absolute top-0">
				<!-- mask -->
				<div class="w-full md:w-[75%] lg:w-[50%] absolute h-full">
					<div
						class="w-full md:w-[40.5%] lg:w-[20.1%] kd-angle-mask-left"
						:class="color"
					></div>
					<!-- triangle -->
					<div
						class="w-full md:w-[60%] lg:w-[80%] h-[35%] md:h-full absolute bottom-0 md:top-0 right-0"
						:class="color"
					>
						<!--<KDSquareSplash :num-squares-floor="15" :num-squares-ceiling="25" />-->
						<!--
							Issues with KDSquareSplash currently:
							- Hard to read content when there are squares behind it
							- On mobile we need to limit the amount of squares because the container is smaller
							- Limit the amount of larger squares compared to smaller ones???
						-->
					</div>
					<!-- rectangle -->
				</div>
				<!-- /mask -->

				<!-- content -->
				<div
					class="content absolute w-full md:w-[45%] h-full pb-8 md:pb-0 flex justify-center items-end md:items-center z-50"
				>
					<div class="flex flex-col flex-wrap justify-center items-center">
						<h1 class="text-4xl lg:text-5xl tracking-wider text-white mb-6">
							{{ title }}
						</h1>
						<div class="bg-white rounded w-full h-[3px] mb-6"></div>
						<div
							class="text-white text-xl px-4 py-2 border-4 border-yellow rounded"
						>
							TODO: CTA Link
						</div>
					</div>
				</div>
				<!-- /content -->
			</div>

			<img :src="img" alt="kd hero" class="w-full h-full object-cover" />
		</div>
	</section>
</template>
