<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import KDHero from '@/components/KDHero/KDHero.vue'
import KDSideBySide from '@/components/KDSideBySide/KDSideBySide.vue'
import KDCard from '@/components/KDCards/KDCard.vue'
import KDCardListing from '@/components/KDCards/KDCardListing.vue'
import KDSquareSplashV2 from '@/components/KDSquareSplashV2/KDSquareSplashV2.vue'
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
			color="navy"
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
			color="orange"
			img="https://picsum.photos/seed/thesquishyguy/1920/1080"
			title="Lorem Ipsum"
			subtitle="Lorem Ipsum"
			text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
					nibh praesent tristique magna sit amet."
			ctaText="Click here"
			ctaLink="#"
		/>

		<KDCardListing>
			<KDCard
				img="https://picsum.photos/seed/kdcardimage/800"
				title="Lorem Ipsum"
				subtitle="Lorem Ipsum"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque. Libero id faucibus nisl tincidunt eget nullam non nisi."
				linkText="Click here"
				linkUrl="#"
			/>

			<KDCard
				img="https://picsum.photos/seed/kdcardimag/800"
				title="Lorem Ipsum"
				subtitle="Lorem Ipsum"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque. Libero id faucibus nisl tincidunt eget nullam non nisi."
				linkText="Click here"
				linkUrl="#"
			/>

			<KDCard
				img="https://picsum.photos/seed/kdcardima/800"
				title="Lorem Ipsum"
				subtitle="Lorem Ipsum"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque. Libero id faucibus nisl tincidunt eget nullam non nisi."
				linkText="Click here"
				linkUrl="#"
			/>
		</KDCardListing>
	</BaseLayout>
</template>
