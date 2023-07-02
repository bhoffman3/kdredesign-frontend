<script setup lang="ts">
const props = defineProps({
	quote: {
		type: String,
		default: '',
	},
	quotee: {
		type: String,
		default: '',
	},
	theme: {
		type: String,
		default: 'orange',
	},
})
</script>

<style lang="scss">
.kd-testimonial {
	// @apply border-t-[5px] border-l-[8px] border-r-[8px] border-b-[10px];

	&.orange {
		@apply bg-orange text-white border-navy;

		.lb {
			@apply bg-yellow;
		}

		.offset-t {
			@apply bg-yellow;
		}
		.offset-b {
			@apply bg-navy;
		}
	}

	&.navy {
		@apply bg-navy text-white border-orange;

		.lb {
			@apply bg-sky;
		}

		.offset-t {
			@apply bg-yellow;
		}
		.offset-b {
			@apply bg-orange;
		}
	}
}
</style>

<template>
	<div
		class="kd-testimonial rounded shadow-lg relative mx-4 lg:mx-0 mb-12"
		:class="theme"
	>
		<div class="px-6 md:px-10 2xl:px-16 py-10">
			<div>
				<font-awesome-icon icon="fa-solid fa-quote-left" size="lg" />

				<p class="text-center text-lg md:text-xl leading-8 italic mx-3 inline">
					{{ quote }}
				</p>

				<font-awesome-icon icon="fa-solid fa-quote-right" size="lg" />
			</div>
			<div class="lb h-1 w-1/2 mx-auto my-6 rounded-lg"></div>
			<div class="uppercase text-center font-semibold tracking-wider">
				{{ quotee }}
			</div>
		</div>

		<div
			class="offset-t w-full h-full absolute bottom-3 left-3 rounded-xl z-[-1]"
		></div>
		<div
			class="offset-b w-full h-full absolute top-3 right-3 rounded-xl z-[-1]"
		></div>
	</div>
</template>
