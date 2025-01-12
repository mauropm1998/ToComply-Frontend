<template>
    <main class="container mx-auto mt-8">
        <h1 class="font-bold text-xl">Oportunidades de Melhoria</h1>

        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <RouterLink to="/"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Painel
                    </RouterLink>
                </li>
                <li class="inline-flex items-center">
                    <RouterLink :to="{ name: 'process' }"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        Processos
                    </RouterLink>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span
                            class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Oportunidades</span>
                    </div>
                </li>
            </ol>
        </nav>

        <div class="mt-4 md:flex md:items-center md:justify-between">
            <button @click="showDialogNewOportunity" class="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-semibold">Nova Oportunidade</span>
            </button>

            <div class="flex gap-x-3 relative">
                <button class="text-sm btn-light w-[155px]" @click="toggleDropdown">
                    {{ oportunitiesStatus }} <i class="bi bi-chevron-down"></i>
                </button>
                <Transition name="dropdown" mode="out-in">
                    <div v-if="open_dropdown"
                        class="absolute dropdown bg-white shadow-xl py-1 top-[45px] left-0 z-[2] rounded-lg w-[155px]">
                        <ul class="flex flex-col">
                            <li class="px-4 text-sm cursor-pointer hover:bg-blue-50 py-3"
                                @click="setOportunitiesStatus('ALL')">
                                Todos os estados</li>
                            <hr class="border-slate-300 my-0" />
                            <li class="px-4 text-sm cursor-pointer hover:bg-blue-50 py-3"
                                @click="setOportunitiesStatus('ACTIVE')">
                                Ativas</li>
                            <hr class="border-slate-300 my-0" />
                            <li @click="setOportunitiesStatus('INACTIVE')"
                                class="px-4 text-sm cursor-pointer hover:bg-blue-50 py-3">Não ativas
                            </li>
                        </ul>
                    </div>
                </Transition>

                <div class="-z-0 relative flex items-center">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                    <input v-model="searchBy" type="text" placeholder="Procurar por assunto"
                        @input="getOportunityActivitiesBySubject"
                        class="block w-[250px] py-1.5 pr-5 text-gray-700 bg-white border border-gray-400/70 rounded-lg placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
            </div>
        </div>

        <div class="flex flex-col mt-8">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden pb-20">

                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th
                                        class="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <span>ID</span>
                                    </th>
                                    <th scope="col"
                                        class="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <button class="flex items-center gap-x-3 focus:outline-none">
                                            <span>Oportunidade</span>

                                            <svg class="h-3" viewBox="0 0 10 11" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                                    fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path
                                                    d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                                    fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path
                                                    d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                                    fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                            </svg>
                                        </button>
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                       Processo
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Responsável
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Categoria
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Data de Identificação
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Estado
                                    </th>

                                    <th scope="col">
                                        <span class="sr-only">Opções</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                                <tr>
                                    <td
                                        class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                        <span>NR-001</span>
                                    </td>

                                    <td class="px-4 py-4 text-sm font-Oportunidadel table-long-text">
                                        Sistemas de Gestão de Segurança da Informação
                                    </td>

                                    <td class="px-4 py-4 text-sm font-Oportunidadel">
                                        Oportunidade Internacional
                                    </td>

                                    <td class="px-4 py-4 text-sm font-Oportunidadel table-long-text">
                                        ISO
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        2024
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        22 Mai 2028
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <OportunityStatus status="DONE" />
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap relative">
                                        <BaseDropdownOptions :options="['DELETE', 'PREVIEW']"
                                            @preview="showDialogPreviewOportunity(1)" @delete="showDialogDelete(1)" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-6 sm:flex sm:items-center sm:justify-between ">
            <div class="text-sm text-gray-500 dark:text-gray-400">
                P]agina <span class="font-Oportunidadel text-gray-700 dark:text-gray-100">1 of 10</span>
            </div>

            <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
                <a href="#"
                    class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        Anterior
                    </span>
                </a>

                <a href="#"
                    class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <span>
                        Próximo
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>
    </main>

    <BaseModalDialog @close-modal="closeModalAlertDelete" @yes="axiosDeleteNorm" @no="closeModalAlertDelete"
        :open-modal="open_modal_delete" :enable-close-outside="true" title="Eliminar Oportunidade" type="DANGER"
        buttons="YES_NO">
        Você está prestes a eliminar esta<strong> Oportunidade.</strong> Deseja realmente
        prosseguir? *Essa operação não pode ser desfeita.
    </BaseModalDialog>

    <BaseModalContent @close-modal="closeModalPreviewOportunity" :open-modal="open_modal_preview_oportrunity"
        :enable-close-outside="false">

        <div class="relative max-w-[750px] w-full">
            <div class="bg-white w-full rounded-t-lg">
                <div class="bg-gray-50 border-b rounded-t-lg pb-2 px-8">
                    <button @click="closeModalPreviewOportunity" :desabled="processing"
                        class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                        <i class="bi bi-x-lg text-[1rem]"></i>
                    </button>
                    <div class="text-center pt-4 pb-2">
                        <h2 class="font-semibold text-2xl text-gray-500">Oportunidade de Melhoria</h2>
                        <span class="text-gray-400">Informação detalhada sobre a Oportunidade.</span>
                    </div>
                </div>

                <div class="px-6 overflow-y-auto h-[70vh] beauty-scrollbar">
                    <PreviewOportunityBox />
                </div>
            </div>

            <div class="bg-gray-50 border-t rounded-b-lg p-4">
                <div class="flex items-center justify-end gap-x-3">
                    <button @click="updateNorm" :desabled="processing" class="btn-primary">
                        <i class="bi bi-pencil text-[1rem]"></i>
                        <span class="font-semibold">Atualizar Informações</span>
                    </button>

                    <button type="button" @click="closeModalPreviewOportunity" :desabled="processing"
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-gray-200 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-300">
                        <i class="bi bi-x-circle"></i>
                        <span class="font-semibold">Cancelar</span>
                    </button>
                </div>
            </div>
        </div>

    </BaseModalContent>

    <BaseModalContent @close-modal="closeModalNewOportunity" :open-modal="open_modal_new_oportunity" :enable-close-outside="false">

        <div class="relative max-w-[800px] w-[90%]">
            <div class="bg-white w-full rounded-t-lg overflow-hidden">
                <div class="bg-gray-50 border-b pb-2 px-8">
                    <button @click="closeModalNewOportunity" :desabled="processing"
                        class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                        <i class="bi bi-x-lg text-[1rem]"></i>
                    </button>
                    <div class="text-center pt-4 pb-2">
                        <h2 class="font-semibold text-2xl text-gray-500"> Oportunidade de Melhoria</h2>
                        <span class="text-gray-400">Cadastre Oportunidades de melhoria e alcance seus objetivos de compliance de forma mais eficiente.</span>
                    </div>
                </div>

                <div class="px-6 overflow-y-auto h-[70vh] beauty-scrollbar">
                    <FormOportunity @processing="processing = true" @success="stop" @error="stop" @success-update="stop"
                        @error-update="stop" @close-modal="closeModalNewOportunity" />
                </div>
            </div>

            <div class="bg-gray-50 border-t rounded-b-lg p-4">
                <div class="flex items-center justify-end gap-x-3">
                    <button @click="saveOportunity" :desabled="processing" class="btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="font-semibold">Salvar Oportunidade</span>
                    </button>

                    <button type="button" @click="closeModalNewOportunity" :desabled="processing"
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-gray-200 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-300">
                        <i class="bi bi-x-circle"></i>
                        <span class="font-semibold">Cancelar</span>
                    </button>
                </div>
            </div>
        </div>

    </BaseModalContent>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import OportunityStatus from '@/components/process/oportunities/OportunityStatus.vue';
import FormOportunity from '@/components/process/oportunities/FormOportunity.vue';
import BaseDropdownOptions from "@/components/BaseDropdownOptions.vue";
import BaseModalDialog from "@/components/BaseModalDialog.vue";
import BaseModalContent from "@/components/BaseModalContent.vue";
import PreviewOportunityBox from '@/components/process/oportunities/PreviewOportunityBox.vue';
//import PageLoader from "@/components/PageLoader.vue";


const searchBy = ref("");
const oportunity_id_to_actiion = ref(null);
const open_dropdown = ref(false);
const open_modal_delete = ref(false);
const open_modal_new_oportunity = ref(false);
const open_modal_preview_oportrunity = ref(false);
const oportunitiesStatus = ref('Todos os estados');


const setOportunitiesStatus = (state) => {
    searchBy.value = '';

    if (state === 'ACTIVE') {
        oportunitiesStatus.value = 'Ativas';
    } else if (state === 'INACTIVE') {
        oportunitiesStatus.value = 'Não Ativas';
    } else if (state === 'REVISION') {
        oportunitiesStatus.value = 'Revisão';
    } else {
        oportunitiesStatus.value = 'Todos os estados';
    }

    if (state === 'ALL') {
        //getOportunityActivities();
    } else {
        //getOportunityActivitiesByStatus(state);
    }

};

const toggleDropdown = () => {
    open_dropdown.value = !open_dropdown.value;

    if (open_dropdown.value) {
        setTimeout(() => {
            document.addEventListener("click", closeDropdownOnClickOutside)
        }, 100)
    }
};

const showDialogNewOportunity = () => {
    open_modal_new_oportunity.value = true;
    document.body.style.overflow = "hidden";
};

const showDialogPreviewOportunity = (oportunity) => {
    oportunity_id_to_actiion.value = oportunity;
    open_modal_preview_oportrunity.value = true;
    document.body.style.overflow = "hidden";
};

const showDialogDelete = (id) => {
    open_modal_delete.value = true;
    oportunity_id_to_actiion.value = id;
    document.body.style.overflow = "hidden";
};

const closeModalAlertDelete = () => {
    open_modal_delete.value = false;
    document.body.style.overflow = "auto";
};

const closeModalNewOportunity = () => {
    open_modal_new_oportunity.value = false;
    document.body.style.overflow = "auto";
};

const closeModalPreviewOportunity = () => {
    open_modal_preview_oportrunity.value = false;
    document.body.style.overflow = "auto";
};

const closeDropdownOnClickOutside = (event) => {
    if (!event.target.classList.contains("dropdown")) {
        open_dropdown.value = false;
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
};

onMounted(() => {
    document.title = "Comply 360 | Oportunidades de Melhorias";
});

</script>

<style scoped></style>