<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import KDHero from '@/components/KDHero/KDHero.vue'
import KDSideBySide from '@/components/KDSideBySide/KDSideBySide.vue'
</script>

<template>
	<BaseLayout>
		<KDHero
			color="bg-orange"
			img="https://picsum.photos/seed/avocadoguy/1920/1080"
			title="Lorem Ipsum"
		/>

		<KDSideBySide
			contentSide="right"
			color="bg-navy"
			img="https://picsum.photos/seed/thesquishyman/1920/1080"
			title="Lorem Ipsum"
			subtitle="Lorem Ipsum"
			text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
					nibh praesent tristique magna sit amet."
			ctaText="Click here"
			ctaLink="#"
		/>

		<KDSideBySide
			contentSide="left"
			color="bg-orange"
			img="https://picsum.photos/seed/thesquishyguy/1920/1080"
			title="Lorem Ipsum"
			subtitle="Lorem Ipsum"
			text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
					nibh praesent tristique magna sit amet."
			ctaText="Click here"
			ctaLink="#"
		/>
	</BaseLayout>
</template>
