<script setup lang="ts">
import KDLogoLongFooter from './Logos/KDLogoLongFooter.vue'
import KDSquareSplash from './KDSquareSplash.vue'
</script>

<template>
	<footer class="mt-5">
		<div class="relative container-fluid flex flex-wrap px-8 py-24 bg-navy">
			<div class="w-full md:w-[60%]">
				<div class="w-[400px] mb-3">
					<KDLogoLongFooter />
				</div>
				<nav class="flex justify-start gap-5">
					<a href="#" class="uppercase text-white text-xl">Subscribe</a>
					<a href="#" class="uppercase text-white text-xl">Contact</a>
					<a href="#" class="uppercase text-white text-xl">Privacy Policy</a>
				</nav>
			</div>

			<div class="w-full md:w-[40%]">
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
