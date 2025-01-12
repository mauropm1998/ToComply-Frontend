<template>
    <div class="card border">
        <div class="flex justify-between border-b pb-2">
            <div class="flex items-center gap-x-4">
                <div>
                    <h3 class="font-semibold leading-none">Registo de Atividades</h3>
                    <span class="text-gray-400 text-sm">Atividades Recentes no Sistema</span>
                </div>
            </div>

            <div class="relative">
                <RouterLink :to="{ name: 'process' }"
                    class="text-sm text-gray-500 hover:text-blue-500 hover:font-semibold">
                    Ver Tudo <i class="bi bi-chevron-right"></i>
                </RouterLink>
            </div>
        </div>

        <div class="relative px-4 pt-4 space-y-6">
            <ul
                class="col-span-12 space-y-7 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                <li
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                    <h3 class="text-xl font-semibold tracking-wide text-gray-600">Donec porta enim vel </h3>
                    <time class="text-xs tracking-wide uppercase text-gray-400">Dec 2020</time>
                    <p class="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui.</p>
                </li>
                <li
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                    <h3 class="text-xl font-semibold tracking-wide text-gray-600">Aliquam sit amet nunc ut</h3>
                    <time class="text-xs tracking-wide uppercase text-gray-400">Jul 2019</time>
                    <p class="mt-3">Morbi vulputate aliquam libero non dictum. Donec mollis turpis eget egestas sodales.</p>
                </li>
                <li
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                    <h3 class="text-xl font-semibold tracking-wide text-gray-600">Pellentesque habitant morbi</h3>
                    <time class="text-xs tracking-wide uppercase text-gray-400">Jan 2016</time>
                    <p class="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit
                        consectetur nisl, sit amet condimentum lacus orci nec purus...</p>
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup>

import { ref } from 'vue';

const props = defineProps({
    getData: {
        type: Array,
        default: function () {
            return [0, 0, 0, 0]
        }
    },
})

</script>


<style>
.card .apexcharts-toolbar {
    display: none !important;
}
</style>