<script setup lang="ts">
const props = defineProps({
	text: String,
	color: String,
})
</script>

<template>
	<p class="kd-comp-text text-base mb-4" :class="color">
		{{ text }}
	</p>
</template>
