<template>
    <article class="card border">
        <div class="flex justify-between items-start">
            <h2 class="text-gray-600 font-semibold text-lg mb-1.5">{{ process }}</h2>
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
                            class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                            <i class="bi bi-info-circle w-5 h-5 mx-1 text-[1.1rem]"></i>
                            <span class="mx-1">
                                Detalhes
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

        <p class="text-gray-600 mb-4 mt-1">
            <slot />
        </p>

        <div class="flex justify-between">
            <div>
                <div v-if="status === 'PLANNED'"
                    class="inline-flex items-center px-2 py-1 rounded-xl text-green-500 bg-green-100">
                    <span class="text-sm font-semibold">Planejado</span>
                </div>
                <div v-if="status === 'IN_COURSE'"
                    class="inline-flex items-center px-2 py-1 text-orange-500 rounded-xl bg-orange-100/80">
                    <span class="text-sm font-semibold">Em Vigor</span>
                </div>
                <div v-if="status === 'SUSPENDED'"
                    class="inline-flex items-center px-2 py-1 text-red-500 rounded-xl bg-red-100/80">
                    <span class="text-sm font-semibold">Suspenso</span>
                </div>
            </div>

            <div class="flex gap-x-7 items-center">
                <div class="flex gap-x-2 items-center text-gray-600 text-[1.1rem]">
                    <i class="bi bi-book"></i>
                    <span>32</span>
                </div>
                <div class="flex gap-x-2 items-center text-gray-600 text-[1.1rem]">
                    <i class="bi bi-collection"></i>
                    <span>21</span>
                </div>
            </div>


        </div>

    </article>
</template>

<script setup>

import { ref } from 'vue';

defineProps({
    process: {
        type: String,
    },
    norm: {
        type: String,
    },
    status: {
        type: String,
        default: null
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

