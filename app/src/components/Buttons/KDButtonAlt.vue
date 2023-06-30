<script setup lang="ts">
import anime from 'animejs'
import enterView from 'enter-view'
import { onMounted } from 'vue'

const props = defineProps({
	theme: String,
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
}
</style>

<template>
	<Transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter">
		<a
			:href="url"
			:target="newTab ? '_blank' : ''"
			class="kd-btn-alt relative overflow-hidden"
		>
			<div
				class="bg-navy text-navy text-xl 2xl:text-2xl font-bold uppercase tracking-wider p-[5px] pt-[3px] pb-[8px] rounded-lg shadow-lg"
			>
				<div class="bg-white px-8 py-4 rounded">{{ text }}</div>
			</div>
		</a>
	</Transition>
</template>
