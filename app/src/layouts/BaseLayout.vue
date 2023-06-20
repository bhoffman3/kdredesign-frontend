<script setup lang="ts">
import Header from '../components/Global/Header.vue'
import Footer from '../components/Global/Footer.vue'
</script>

<template>
	<Header />

	<main>
		<slot></slot>
	</main>

	<Footer />
</template>
