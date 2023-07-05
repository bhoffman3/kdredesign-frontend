<script setup lang="ts">
import { shuffle as _shuffle } from 'lodash-es'
import { onMounted, computed } from 'vue'
import anime from 'animejs'
import KDSquareV2 from '../../models/KDSquareV2'

/**
 * NOTE: This component will auto fill any container it is placed in.
 * HOWEVER -- the parent container must be set to RELATIVE position.
 */

const props = defineProps({
	totalSquares: {
		type: Number,
		default: 100,
	},
	componentBackgroundColor: {
		type: String,
		default: '',
	},
	squareFinalOpacity: {
		type: Number,
		default: 0.25,
	},
	xGap: {
		type: String,
		default: '1rem',
	},
	yGap: {
		type: String,
		default: '1rem',
	},
})

const computedSquares = computed(() => {
	let squares: KDSquareV2[] = []
	for (let i = 0; i < props.totalSquares; i++) {
		squares.push(new KDSquareV2(props.componentBackgroundColor))
	}
	return _shuffle(squares)
})

function onBeforeEnter(el) {
	el.style.opacity = 0
	el.style.width = el.dataset.size
	el.style.height = el.dataset.size
	el.style.backgroundColor = el.dataset.color
	el.style.alignSelf = el.dataset.align
}

function onEnter(el, done) {
	anime({
		targets: el,
		opacity: [0, props.squareFinalOpacity],
		translateY: [100, 0],
		duration: 500,
		easing: 'easeOutElastic',
		delay: el.dataset.delay * 100, // build a custom delay based on the index
		complete: done,
	})
}

onMounted(() => {
	console.log('KDSquareSplash mounted successfully')
})
</script>

<template>
	<div class="kd-square-splash w-full h-full relative overflow-hidden">
		<div
			class="w-[110%] h-[110%] m-0 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] overflow-hidden"
		>
			<TransitionGroup
				appear
				name="squares"
				tag="div"
				class="flex flex-wrap justify-around gap-x-10 gap-y-10"
				:class="['gap-x-[' + xGap + ']', 'gap-y-[' + yGap + ']']"
				:css="false"
				@before-appear="onBeforeEnter"
				@appear="onEnter"
			>
				<div
					v-for="(square, index) in computedSquares"
					:key="square.uid"
					:data-index="index"
					:data-size="square.size"
					:data-color="square.color"
					:data-align="square.align"
					:data-delay="square.delay"
					:data-gap="square.xgap"
					class="rounded shadow"
				></div>
			</TransitionGroup>
		</div>
	</div>
</template>
