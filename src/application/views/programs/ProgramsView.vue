<template>
    <main class="container mx-auto my-8">
        <h1 class="font-bold text-xl">Programas de Compliance</h1>

        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <RouterLink :to="{ name: 'dashboard' }"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Painel
                    </RouterLink>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Programas</span>
                    </div>
                </li>
            </ol>
        </nav>

        <div class="mt-4 md:flex md:items-center md:justify-between">
            <button @click="showDialogNewProgram" class="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-semibold">Novo Programa</span>
            </button>

            <div class="flex gap-x-3 relative">
                <button class="text-sm btn-light w-[155px]" @click="toggleDropdown">
                    {{ programStatus }} <i class="bi bi-chevron-down"></i>
                </button>
                <Transition name="dropdown" mode="out-in">
                    <div v-if="open_dropdown"
                        class="absolute dropdown bg-white shadow-xl py-1 top-[45px] left-0 z-[2] rounded-lg w-[155px]">
                        <ul class="flex flex-col">
                            <li class="px-4 text-sm cursor-pointer hover:bg-blue-50 py-3" @click="setProgramStatus('ALL')">
                                Todos os estados</li>
                            <hr class="border-slate-300 my-0" />
                            <li class="px-4 text-sm cursor-pointer hover:bg-blue-50 py-3" @click="setProgramStatus('ACTIVE')">
                                Ativas</li>
                            <hr class="border-slate-300 my-0" />
                            <li @click="setProgramStatus('INACTIVE')"
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

        <div class="grid grid-cols-3 gap-4 my-7">
            <ProgramCard process="Meu Programa Qualquer" @delete="showDialogDelete(2)" @preview="showDialogPreviewProgram(4)" status="SUSPENDED">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni debitis quis, ipsam, veritatis blanditiis
                aliquam
                pariatur odio quos nobis dolore ipsum eum neque! Minima ea repellendus nisi numquam tempore quae.
            </ProgramCard>
            <ProgramCard process="Meu Programa" @delete="showDialogDelete(2)" @preview="showDialogPreviewProgram(4)" status="IN_COURSE">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur odio quos nobis dolore ipsum eum neque! Minima ea repellendus nisi numquam tempore quae.
            </ProgramCard>
            <ProgramCard process="Programa Qualquer" @delete="showDialogDelete(2)" @preview="showDialogPreviewProgram(4)" status="PLANNED">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni debitis quis, ipsam, veritatis blanditiis
                aliquam
                pariatur odio quos nobis dolore ipsum eum neque!
            </ProgramCard>
        </div>
    </main>

    <BaseModalDialog @close-modal="closeModalAlertDelete" @yes="axiosDeleteNorm" @no="closeModalAlertDelete"
        :open-modal="open_modal_delete" :enable-close-outside="true" title="Eliminar Programa" type="DANGER" buttons="YES_NO">
        Você está prestes a eliminar este<strong> Programa.</strong> Deseja realmente
        prosseguir? *Essa operação não pode ser desfeita.
    </BaseModalDialog>

    <!-- Modal New Program -->
    <BaseModalContent @close-modal="closeModalNewProgram" :open-modal="open_modal_new_program" :enable-close-outside="false">

        <div class="relative max-w-[800px] w-[90%]">
            <div class="bg-white w-full rounded-s-lg overflow-hidden">
                <div class="bg-gray-50 border-b pb-2 px-8">
                    <button @click="closeModalNewProgram" :desabled="processing"
                        class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                        <i class="bi bi-x-lg text-[1rem]"></i>
                    </button>
                    <div class="text-center pt-4 pb-2">
                        <h2 class="font-semibold text-2xl text-gray-500">Programa  de Compliance</h2>
                        <span class="text-gray-400">Cadastre e gerencie Programas e anexe a Processos e Normas</span>
                    </div>
                </div>

                <div class="px-6 overflow-y-auto h-[70vh] beauty-scrollbar">
                    <FormProgram @processing="processing = true" @success="stop" @error="stop" @success-update="stop"
                        @error-update="stop" @close-modal="closeModalNewProgram" />
                </div>
            </div>

            <div class="bg-gray-50 border-t rounded-b-lg p-4">
                <div class="flex items-center justify-end gap-x-3">
                    <button @click="saveProgram" :desabled="processing" class="btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="font-semibold">Salvar Programa</span>
                    </button>

                    <button type="button" @click="closeModalNewProgram" :desabled="processing"
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-gray-200 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-300">
                        <i class="bi bi-x-circle"></i>
                        <span class="font-semibold">Cancelar</span>
                    </button>
                </div>
            </div>
        </div>

    </BaseModalContent>

    
    <!-- Modal Preview System -->  
    <BaseModalContent @close-modal="closeModalPreviewProgram" :open-modal="open_modal_preview_program"
        :enable-close-outside="false">

        <div class="relative max-w-[700px] w-full">
            <div class="bg-white w-full rounded-t-lg">
                <div class="bg-gray-50 border-b rounded-t-lg pb-2 px-8">
                    <button @click="closeModalPreviewProgram" :desabled="processing"
                        class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                        <i class="bi bi-x-lg text-[1rem]"></i>
                    </button>
                    <div class="text-center pt-4 pb-2">
                        <h2 class="font-semibold text-2xl text-gray-500">Porgrama de Compliance</h2>
                        <span class="text-gray-400">Informação detalhada sobre o Porgrama.</span>
                    </div>
                </div>

                <div class="px-6 overflow-y-auto h-[70vh] beauty-scrollbar">
                    <PreviewProgramBox />
                </div>
            </div>

            <div class="bg-gray-50 border-t rounded-b-lg p-4">
                <div class="flex items-center justify-end gap-x-3">
                    <button @click="updateSystem" :desabled="processing" class="btn-primary">
                        <i class="bi bi-pencil text-[1rem]"></i>
                        <span class="font-semibold">Atualizar Informações</span>
                    </button>

                    <button type="button" @click="closeModalPreviewProgram" :desabled="processing"
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
import ProgramCard from '@/components/programs/ProgramCard.vue';
import BaseModalDialog from "@/components/BaseModalDialog.vue";
import BaseModalContent from "@/components/BaseModalContent.vue";
import FormProgram from "@/components/programs/FormProgram.vue";
import PreviewProgramBox from "@/components/programs/PreviewProgramBox.vue";

const searchBy = ref("");
const program_id_to_actiion = ref(null);
const open_dropdown = ref(false);
const open_modal_delete = ref(false);
const open_modal_new_program = ref(false);
const open_modal_preview_program = ref(false);
const programStatus = ref('Todos os estados');


const setProgramStatus = (state) => {
    searchBy.value = '';

    if (state === 'ACTIVE') {
        programStatus.value = 'Ativas';
    } else if (state === 'INACTIVE') {
        programStatus.value = 'Não Ativas';
    } else {
        programStatus.value = 'Todos os estados';
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

const showDialogNewProgram = () => {
    open_modal_new_program.value = true;
    document.body.style.overflow = "hidden";
};

const closeModalNewProgram = () => {
    open_modal_new_program.value = false;
    document.body.style.overflow = "auto";
};

const showDialogPreviewProgram = () => {
    open_modal_preview_program.value = true;
    document.body.style.overflow = "hidden";
};

const closeModalPreviewProgram = () => {
    open_modal_preview_program.value = false;
    document.body.style.overflow = "auto";
};

const showDialogDelete = (program_id) => {
    open_modal_delete.value = true;
    program_id_to_actiion.value = program_id;
    document.body.style.overflow = "hidden";
};

const closeModalAlertDelete = () => {
    open_modal_delete.value = false;
    document.body.style.overflow = "auto";
};

const closeDropdownOnClickOutside = (event) => {
    if (!event.target.classList.contains("dropdown")) {
        open_dropdown.value = false;
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
};

onMounted(() =>  {
    document.title = "Comply360 | Programas de Compliance"
});

</script>