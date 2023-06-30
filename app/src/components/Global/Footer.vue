<script setup lang="ts">
import KDLogoLongFooter from '../Logos/KDLogoLongFooter.vue'
import KDSquareSplashV2 from '../KDSquareSplashV2/KDSquareSplashV2.vue'
</script>

<template>
	<footer class="mt-5 relative bg-navy">
		<div class="absolute top-0 left-0 w-full h-full">
			<KDSquareSplashV2 componentBackgroundColor="navy" />
		</div>

		<div class="relative container-fluid flex flex-wrap px-8 py-24">
			<div class="w-full lg:w-[60%]">
				<div class="w-full md:w-[30em] mb-3 mx-auto lg:mx-0">
					<KDLogoLongFooter />
				</div>
				<nav class="flex justify-center lg:justify-start gap-5">
					<a
						href="#"
						class="uppercase text-white text-center text-lg lg:text-xl"
						>Subscribe</a
					>
					<a
						href="#"
						class="uppercase text-white text-center text-lg lg:text-xl"
						>Contact</a
					>
					<a
						href="#"
						class="uppercase text-white text-center text-lg lg:text-xl"
						>Privacy Policy</a
					>
				</nav>
			</div>

			<div class="w-full lg:w-[40%] mt-8 lg:mt-0">
				<div class="socials">
					<ul class="flex justify-center gap-5">
						<li class="bg-sky p-2 rounded-lg">
							<a href="#">
								<font-awesome-icon
									icon="fa-brands fa-twitter"
									size="3x"
									class="text-navy"
								/>
							</a>
						</li>

						<li class="bg-sky p-2 rounded-lg">
							<a href="#">
								<font-awesome-icon
									icon="fa-brands fa-facebook"
									size="3x"
									class="text-navy"
								/>
							</a>
						</li>

						<li class="bg-sky p-2 rounded-lg">
							<a href="#">
								<font-awesome-icon
									icon="fa-brands fa-instagram"
									size="3x"
									class="text-navy"
								/>
							</a>
						</li>

						<li class="bg-sky p-2 rounded-lg">
							<a href="#" class="w-[25px]">
								<font-awesome-icon
									icon="fa-brands fa-linkedin"
									size="3x"
									class="text-navy"
								/>
							</a>
						</li>
					</ul>
				</div>
				<div class="flex justify-center text-white uppercase mt-3 text-sm">
					Kehren Development © 2023
				</div>
			</div>
		</div>
	</footer>
</template>
