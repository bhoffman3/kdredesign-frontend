<script setup lang="ts">
import anime from 'animejs'
import enterView from 'enter-view'
import { onMounted } from 'vue'

const props = defineProps({
	size: {
		type: String,
		default: 'base',
	},
	theme: {
		type: String,
		default: 'navy',
	},
	text: String,
	url: String,
	newTab: Boolean,
})

function onBeforeEnter(el) {
	console.log(el)
	el.style.opacity = 0
}

function onEnter(el, done) {
	anime({
		targets: el,
		opacity: [0, 1],
		translateX: [300, 0],
		duration: 500,
		easing: 'easeOutElastic',
		complete: done,
	})
}

onMounted(() => {
	enterView({
		selector: '.kd-btn-alt',
		enter: function (el) {
			el.classList.add('entered')
		},
		exit: function (el) {
			el.classList.remove('entered')
		},
	})
})
</script>

<style lang="scss">
.kd-btn-alt {
	&.small {
	}
	&.base {
		.out {
			@apply p-[3px] pt-[2px] pb-[6px];
		}
		.in {
			@apply text-lg 2xl:text-xl px-4 py-2;
		}
	}
	&.large {
		.out {
			@apply p-[5px] pt-[3px] pb-[8px];
		}
		.in {
			@apply text-xl 2xl:text-2xl px-8 py-4;
		}
	}
}
</style>

<template>
	<Transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter">
		<a
			:href="url"
			:target="newTab ? '_blank' : ''"
			class="kd-btn-alt relative overflow-hidden inline-block"
			:class="size"
		>
			<div
				class="out bg-navy text-navy font-bold uppercase tracking-wider rounded-lg shadow-lg"
			>
				<div class="in bg-white rounded">{{ text }}</div>
			</div>
		</a>
	</Transition>
</template>
