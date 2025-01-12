<template>
    <article class="bg-white rounded-lg border">
        <div class="p-4">
            <div class="flex justify-between items-start">
                <div class="flex gap-x-3 items-center mb-5">
                    <div v-if="status === 'DONE'" class="rounded-full h-10 w-10 bg-green-100 leading-10">
                        <i class="block bi bi-check-circle-fill text-green-400 text-[1.7rem] text-center"></i>
                    </div>
                    <div v-if="status === 'EVALUATION'" class="rounded-full h-10 w-10 bg-yellow-100 leading-10">
                        <i class="block bi bi-eye-fill text-yellow-400 text-[1.7rem] text-center"></i>
                    </div>
                    <div v-if="status === 'IN_PROGRESS'" class="rounded-full h-10 w-10 bg-blue-100 leading-10">
                        <i class="block bi bi-building-fill-add text-blue-400 text-[1.7rem] text-center"></i>
                    </div>
                    <div class="">
                        <h2 class="text-gray-600 font-semibold text-lg leading-tight">{{ process }}</h2>
                        <span class="text-gray-500">{{ norm }}</span>
                    </div>
                </div>
                <div class="flex justify-end relative">
                    <!-- Dropdown toggle button -->
                    <button
                        class="px-1 py-1 text-blue-700 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-blue-50"
                        @click="toggleDropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <Transition name="dropdown" mode="in-out">
                        <div v-show="openDropdown"
                            class="dropdown absolute top-[2.2rem] right-0 w-48 py-2 mt-2 z-30 bg-white rounded-md shadow-xl border border-solid border-gray-200 dark:bg-gray-800">
                            <a @click.prevent="$emit('preview')" href="#"
                                class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                                <i class="bi bi-eye w-5 h-5 mx-1 text-[1.1rem]"></i>
                                <span class="mx-1">
                                    Previsualizar
                                </span>
                            </a>
                            <a @click="$emit('delete')" @click.prevent href="#"
                                class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                                <i class="bi bi-trash w-5 h-5 mx-1 text-[1.05rem]"></i>
                                <span class="mx-1">
                                    Eliminar
                                </span>
                            </a>
                        </div>
                    </Transition>
                </div>
            </div>

            <div class="mb-5 bg-slate-100 p-4 rounded-lg">
                <div class="flex justify-between">
                    <span class="font-semibold text-gray-700">Data de Criação:</span>
                    <span class="text-gray-600">13 Mar 2024</span>
                </div>
                <div class="flex justify-between">
                    <span class="font-semibold text-gray-700">Responsável pelo Processo:</span>
                    <span class="text-gray-600">Naor de Almeida</span>
                </div>
            </div>

            <p class="text-gray-600">
                <slot />
            </p>
        </div>
        <hr class="border border-gray-200">
        <div class="p-4">
            <div class="flex justify-between">
                <span class="">Oportunidades (13)</span>

                <div v-if="status === 'DONE'"
                    class="inline-flex items-center px-3 py-1 rounded-xl text-green-500 bg-green-100">
                    <span class="text-sm font-semibold">Concluído</span>
                </div>
                <div v-if="status === 'EVALUATION'"
                    class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/80">
                    <span class="text-sm font-semibold">Em Revisão</span>
                </div>

                <div v-if="status === 'IN_PROGRESS'"
                    class="inline-flex items-center px-3 py-1 text-blue-500 rounded-xl bg-blue-100/80">
                    <span class="text-sm font-semibold">Em Andamento</span>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>

import { ref } from 'vue';

const props = defineProps({
    process: {
        type: String,
    },
    norm: {
        type: String,
    },
    status: {
        type: String,
        default: "DONE"
    }
});

const openDropdown = ref(false);

const closeDropdownOnClickOutside = (event) => {
    if (!event.target.classList.contains("dropdown")) {
        openDropdown.value = false;
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
};

const toggleDropdown = () => {
    openDropdown.value = !openDropdown.value;

    if (openDropdown.value) {
        setTimeout(() => {
            document.addEventListener("click", closeDropdownOnClickOutside)
        }, 100)
    }
};

</script>

