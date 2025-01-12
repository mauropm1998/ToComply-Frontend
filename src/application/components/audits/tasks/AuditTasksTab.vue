<template>
    <section class="my-5">
        <h2 class="text-xl font-bold text-gray-500 leading-none">Tarefas</h2>
        <span class="text-gray-500 text-sm">Feedback de funcionários e outras informações relevantes para a
            auditoria</span>

        <div class="flex justify-between items-center mt-4">
            <div class="flex gap-x-2 items-center">
                <button @click="filterProcessBy('IN_PROGRESS')"
                    :class="[filterActive === 'IN_PROGRESS' ? 'text-white bg-blue-400' : 'bg-transparent text-gray-500', 'flex first-letter:flex items-center justify-center w-1/2 px-4 py-2 text-sm tracking-wide  transition-colors duration-200 rounded-md shrink-0 sm:w-auto gap-x-2 hover:bg-blue-400 hover:text-white dark:hover:bg-blue-500']">
                    <i class="text-[1.2rem] bi bi-clipboard-pulse"></i>
                    <span class="font-semibold">Em Progresso</span>
                </button>
                <button @click="filterProcessBy('DONE')"
                    :class="[filterActive === 'DONE' ? 'text-white bg-blue-400' : 'bg-transparent text-gray-500', 'flex first-letter:flex items-center justify-center w-1/2 px-4 py-2 text-sm tracking-wide  transition-colors duration-200 rounded-md shrink-0 sm:w-auto gap-x-2 hover:bg-blue-400 hover:text-white dark:hover:bg-blue-500']">
                    <i class="text-[1.2rem] bi bi-check-circle"></i>
                    <span class="font-semibold">Concluídas</span>
                </button>

                <button @click="filterProcessBy('SUSPENSED')"
                    :class="[filterActive === 'SUSPENSED' ? 'text-white bg-blue-400' : 'bg-transparent text-gray-500', 'flex first-letter:flex items-center justify-center w-1/2 px-4 py-2 text-sm tracking-wide  transition-colors duration-200 rounded-md shrink-0 sm:w-auto gap-x-2 hover:bg-blue-400 hover:text-white dark:hover:bg-blue-500']">
                    <i class="text-[1.2rem] bi bi-slash-circle"></i>
                    <span class="font-semibold">Suspensas</span>
                </button>
            </div>
            <div class="flex justify-between items-center">
                <div class="-z-0 relative flex items-center">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                    <input v-model="searchBy" type="text" placeholder="Procurar por nome" @input="getProcessByName"
                        class="block w-[270px] py-2 pr-5 text-gray-700 bg-white border border-gray-400/60 rounded-lg placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
            </div>
        </div>

        <div class="mb-5 mt-7">
            <div class="bg-white rounded-lg shadow-md p-4 flex items-start gap-x-3 mb-5">
                <input @change="onHandleSelectTask" v-model="selected_all_complaints" type="checkbox"
                    class="text-blue-500 border-gray-300 rounded-[100%] dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-6 h-6">
                <div>
                    <div>
                        <h3 class="font-bold text-gray-500">Minha Tarefa Criada</h3>
                        <p class="text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                            repellat
                            fugit, quis quisquam aperiam adipisci ad odit illo accusamus est tempore eaque voluptatibus,
                            corporis sit Dolorum.</p>
                    </div>
                    <div class="mt-3 ms-3 flex justify-between items-center">
                        <div class="users flex items-center">
                            <img src="/src/assets/img/user.jpg" alt="Identidade Visual"
                                class="object-cover w-8 h-8 border border-white rounded-full dark:border-gray-700 shrink-0 -ms-3">
                            <img src="/src/assets/img/user.png" alt="Identidade Visual"
                                class="object-cover w-8 h-8 border border-white rounded-full dark:border-gray-700 shrink-0 -ms-3">
                            <img src="/src/assets/img/user2.jpg" alt="Identidade Visual"
                                class="object-cover w-8 h-8 border border-white rounded-full dark:border-gray-700 shrink-0 -ms-3">
                        </div>
                        <div class="flex items-center gap-x-6">
                            <p class="font-semibold text-gray-500 mb-0">Concluir em 21 Dias</p>
                            <div class="progress rounded-lg bg-gray-200 w-40 h-2">
                                <div class="bg-orange-500 rounded-lg w-[35%] h-[100%]"></div>
                            </div>
                            <div
                                class="border-2 px-3 pt-1 pb-1.5 border-yellow-500 rounded-r-full rounded-bl-full text-gray-500 font-semibold flex items-center gap-x-2">
                                <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                                <span>Em Progresso</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="relative">
                    <BaseDropdownOptions :options="['DELETE', 'PREVIEW']"
                        @preview="showDialogDelete(1)" 
                        @delete="showDialogDelete(1)" 
                        />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref } from 'vue';
import BaseDropdownOptions from "@/components/BaseDropdownOptions.vue";


const filterActive = ref("IN_PROGRESS");
const searchBy = ref("");


const filterProcessBy = (filter) => {
    filterActive.value = filter;
    // CHAMADA AXIOS PARA FILTRAR NO SERVER
} 
</script>