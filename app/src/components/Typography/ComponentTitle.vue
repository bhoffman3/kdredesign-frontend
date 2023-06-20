<script setup lang="ts">
const props = defineProps({
	text: String,
	color: String,
})
</script>

<template>
	<div class="kd-comp-title text-2xl md:text-4xl mb-1 uppercase" :class="color">
		{{ text }}
	</div>
</template>
