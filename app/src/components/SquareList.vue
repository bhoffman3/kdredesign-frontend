<script setup lang="ts">
import KDSquare from '../models/KDSquare'
import PropType from 'vue'

const props = defineProps({
	squares: null,
})
</script>

<template>
	<div
		v-if="squares != null"
		v-for="square of squares"
		class="kd-square"
		:style="square.styles"
	></div>
</template>
