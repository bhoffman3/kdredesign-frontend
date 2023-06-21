<script setup lang="ts">
const props = defineProps({
	size: String,
	color: String,
	text: String,
	url: String,
	newTab: Boolean,
})
</script>

<style lang="scss">
.kd-btn {
	display: inline-block;
	text-decoration: none;
	position: relative;
	cursor: pointer;
	transition: all 0.1s ease-in-out;

	.kd-btn__in {
		transition: all 0.1s ease-in-out;
	}

	::before,
	::after {
		position: absolute;
		content: '';
		background-color: rgba(255, 255, 255, 0.4);
	}

	::before {
		height: 65%;
		width: 6px;
		left: 6px;
		top: 5%;
		border-radius: 7px;
	}

	::after {
		height: 7px;
		width: 6px;
		border-radius: 50%;
		bottom: 8%;
		left: 6px;
	}

	&:hover {
		animation: wiggle 0.4s;
	}

	@keyframes wiggle {
		25% {
			transform: scale(0.96, 1.05);
		}
		50% {
			transform: scale(1.03, 0.96);
		}
		75% {
			transform: scale(0.95, 1.04);
		}
	}
}
</style>

<template>
	<a
		:href="url"
		:target="newTab ? '_blank' : ''"
		class="kd-btn hover:shadow-lg rounded border-4"
		:class="[
			color == 'yellow'
				? 'bg-yellow border-yellowLighten border-b-yellowDarken border-r-yellowDarken'
				: color == 'navy'
				? 'bg-navy border-navyLighten border-b-navyDarken border-r-navyDarken'
				: 'bg-yellow border-yellowLighten border-b-yellowDarken border-r-yellowDarken',
			size == 'base'
				? 'px-5 py-2'
				: size == 'large'
				? 'px-10 py-5'
				: 'px-5 py-2',
		]"
	>
		<div
			class="kd-btn__in text-lg font-semibold"
			:class="
				color == 'yellow'
					? 'text-navy hover:text-navyDarken'
					: color == 'navy'
					? 'text-white'
					: 'text-navy hover:text-navyDarken'
			"
		>
			{{ text }}
		</div>
	</a>
</template>
