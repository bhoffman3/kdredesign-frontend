<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue'
import { uuid } from 'vue-uuid'

import KDSquare from '../models/KDSquare'
import NewBounds from '../models/NewBounds'
import SquareList from './SquareList.vue'

const props = defineProps({
	numSquaresFloor: Number,
	numSquaresCeiling: Number,
	squareSizeFloor: Number,
	squareSizeCeiling: Number,
	squarePadding: Number,
})

// core functions
function generateSquares(numFloor: any, numCeiling: any, container: any) {
	let count = Math.floor(Math.random() * (numCeiling - numFloor + 1)) + numFloor

	let squares = []
	for (let i = 0; i < count; i++) {
		let size = getRandomSize()
		squares.push(
			new KDSquare(
				size,
				getRandomColor(),
				new NewBounds(size, props.squarePadding),
			),
		)
	}
	return randomizePos(squares, container)
}

function randomizePos(squares: KDSquare[], areaToFit: any) {
	let containerRect = areaToFit.getBoundingClientRect()
	const triesPerSquare = 50
	const placing = squares
	const placed: KDSquare[] = []
	let maxTries = triesPerSquare * squares.length

	while (placing.length && maxTries > 0) {
		let i = 0
		while (i < placing.length) {
			let square = placing[i]
			square.newBounds.moveTo(
				getRandomUint(containerRect.width - square.newBounds.width),
				getRandomUint(containerRect.height - square.newBounds.height),
			)
			if (
				placed.every((placed) => !placed.newBounds.overlaps(square.newBounds))
			) {
				square.styles.visibility = 'visible'
				square.styles.position = 'absolute'
				square.styles.left = `${square.newBounds.l}px`
				square.styles.top = `${square.newBounds.t}px`
				placed.push(placing.splice(i--, 1)[0])
			} else {
				maxTries--
			}

			i++
		}
	}

	console.log(placed)
	return placed
}

function getRandomColor() {
	let colors = Array(
		/*"#e56a54",*/
		/*'#384967'*/
		'#fdd086',
		'#75787b',
		'#c6d6e3',
	) // TODO: need a way to exclude the color of the bg of the components
	return colors[Math.floor(Math.random() * colors.length)]
}

function getRandomSize() {
	let sizeFloor = 15
	let sizeCeiling = 100

	let size = Math.floor(Math.random() * (sizeCeiling - sizeFloor) + sizeFloor)
	return size
}

function getRandomUint(range: number): number {
	return (Math.random() * range) | 0
}

// runtime
let instanceID = uuid.v4()
const splashContainer = ref()

let squares: any = ref(null)

onMounted(() => {
	squares.value = generateSquares(
		props.numSquaresFloor,
		props.numSquaresCeiling,
		splashContainer.value,
	)
})
</script>

<style lang="scss">
.kd-square-splash {
	.kd-square {
		border-radius: 10%;
		background-color: white;
	}
}
</style>

<template>
	<div
		class="kd-square-splash w-full h-full absolute top-0 right-0 z-50"
		:id="instanceID"
		ref="splashContainer"
	>
		<div class="inner w-full h-full relative">
			<SquareList v-if="squares != null" :squares="squares" />
		</div>
	</div>
</template>
