<script setup lang="ts">
const props = defineProps({
	hasPadding: {
		type: Boolean,
		default: true,
	},
	fullWidth: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<section
		class="kd-container mb-12 md:mb-10 lg:mb-8"
		:class="[
			hasPadding ? 'px-2 lg:px-0' : '',
			fullWidth ? 'container-fluid' : 'container mx-auto',
		]"
	>
		<slot></slot>
	</section>
</template>
