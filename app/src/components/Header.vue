<script setup lang="ts">
import KDLogo from './KDLogo.vue'
import KDLogoSmall from './KDLogoSmall.vue';
</script>

<template>
   <header class="relative w-full">
      <div class="bg-white w-full h-full absolute opacity-90"></div> <!-- desktop header bg -->

      <nav class="relative px-4 py-2 flex justify-between items-center"> <!-- desktop nav -->
         <a href="#" class="hidden text-3xl font-bold leading-none w-[175px] lg:block">
            <KDLogo />
         </a>

         <a href="#" class="text-3xl font-bold leading-none w-[50px] lg:hidden">
            <KDLogoSmall />
         </a>

         <div class="lg:hidden">
            <button class="navbar-burger flex items-center text-navy p-3">
               <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
               </svg>
            </button>
         </div>

         <ul
            class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
               <a href="#" class="text-lg font-semibold text-navy hover:text-gray-500">Our Experience</a>
            </li>
            <li>
               <a href="#" class="text-lg font-semibold text-navy hover:text-gray-500">Your Business</a>
            </li>
            <li>
               <a href="#" class="text-lg font-semibold text-navy hover:text-gray-500">What We Offer</a>
            </li>
            <li>
               <a href="#" class="text-lg font-semibold text-navy hover:text-gray-500">Inspiration</a>
            </li>
            <li>
               <a href="#" class="text-lg font-semibold text-navy hover:text-gray-500">About</a>
            </li>
         </ul>

         <a href="#"
            class="hidden lg:inline-block py-2 px-6 bg-navy text-sm text-white font-bold rounded-xl transition duration-200">Contact
            Us</a>
      </nav>

      <div class="navbar-menu relative z-50 hidden"> <!-- mobile nav -->
         <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
         <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
               <a href="#" class="mr-auto text-3xl font-bold leading-none w-[175px]">
                  <KDLogo />
               </a>
               <button class="navbar-close">
                  <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
               </button>
            </div>

            <div>
               <ul>
                  <li class="mb-1">
                     <a href="" class="block p-4 text-sm font-semibold text-navy hover:text-gray-500 rounded">
                        Home
                     </a>
                  </li>
                  <li class="mb-1">
                     <a href="" class="block p-4 text-sm font-semibold text-navy hover:text-gray-500 rounded">
                        Our Experience
                     </a>
                  </li>
                  <li class="mb-1">
                     <a href="" class="block p-4 text-sm font-semibold text-navy hover:text-gray-500 rounded">
                        Your Business
                     </a>
                  </li>
                  <li class="mb-1">
                     <a href="" class="block p-4 text-sm font-semibold text-navy hover:text-gray-500 rounded">
                        What We Offer
                     </a>
                  </li>
                  <li class="mb-1">
                     <a href="" class="block p-4 text-sm font-semibold text-navy hover:text-gray-500 rounded">
                        Inspiration
                     </a>
                  </li>
                  <li class="mb-1">
                     <a href="" class="block p-4 text-sm font-semibold text-navy hover:text-gray-500 rounded">
                        About
                     </a>
                  </li>
               </ul>
            </div>

            <div class="mt-auto">
               <div class="pt-6">
                  <a href="#"
                     class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-navy rounded-xl">Contact
                     us</a>
                  <p class="my-4 text-xs text-center text-gray-400">
                     <span>Copyright © 2023</span>
                  </p>
               </div>
            </div>
         </nav>
      </div>

   </header>
</template>