<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import KDHero from '@/components/KDHero/KDHero.vue'
import KDSideBySide from '@/components/KDSideBySide/KDSideBySide.vue'
import KDCard from '@/components/KDCards/KDCard.vue'
import KDCardListing from '@/components/KDCards/KDCardListing.vue'
import KDContainer from '@/components/Utility/KDContainer.vue'
import KDCTA from '@/components/KDCTA/KDCTA.vue'
</script>

<template>
	<BaseLayout>
		<!-- hero -->
		<KDContainer :hasPadding="false" :fullWidth="true">
			<KDHero
				color="bg-orange"
				img="https://picsum.photos/seed/avocadoguy/1920/1080"
				title="Lorem Ipsum"
			/>
		</KDContainer>

		<!-- side by side feature -->
		<KDContainer>
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
				:marginBottom="true"
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
		</KDContainer>

		<!-- card and card listing -->
		<KDContainer>
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
		</KDContainer>

		<KDContainer>
			<KDCTA
				title="Lorem Ipsum"
				text="Aliqua esse cupidatat sunt dolore mollit non sint aliqua consectetur ipsum amet officia aliquip. Excepteur ad amet cupidatat sunt proident ad adipisicing."
				linkText="Click here"
				linkUrl="#"
			/>
		</KDContainer>
	</BaseLayout>
</template>
