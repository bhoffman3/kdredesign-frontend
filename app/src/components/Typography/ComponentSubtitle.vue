<script setup lang="ts">
const props = defineProps({
	text: String,
	color: String,
})
</script>

<template>
	<div
		class="kd-comp-subtitle text-lg md:text-2xl mb-4 upppercase"
		:class="color"
	>
		{{ text }}
	</div>
</template>
