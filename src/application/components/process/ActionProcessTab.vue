<template>

    <div class="mt-3">
        <div class="flex justify-between items-center">
            <h2 class="text-gray-700 font-semibold text-xl mb-7">Plano de Ação</h2>

            <button @click="showDialogNewActionPlan" class="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-semibold">Adicionar</span>
            </button>

        </div>
        <div class="overflow-hidden pb-20">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th scope="col" class="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Origem
                        </th>
                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            O que
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Gravidade
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Urgência
                        </th>
                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Ação Sobre o Item
                        </th>
                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Responsável
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Data Limite
                        </th>

                        <th scope="col">
                            <span class="sr-only">Opções</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 text-gray-500">
                    <tr>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                            Oportunidade
                        </td>
                        <td class="px-4 py-4 text-sm table-long-text whitespace-nowrap">
                            Muito tempo gasto em atividades não lucrativas
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                            1
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                            3
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                            Monitorar
                        </td>
                        <td class="px-4 py-4 text-sm table-long-text whitespace-nowrap">
                            Naor de Almeida
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                            22 Jul 2024
                        </td>
                        <td class="relative px-4 py-4 text-sm whitespace-nowrap">
                            <BaseDropdownOptions :options="['DELETE', 'PREVIEW']" @preview="showDialogUpdate(1)"
                                @delete="showDialogDelete(1)" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Modais  -->
    <BaseModalDialog @close-modal="closeModalAlertDelete" @yes="axiosDeleteItem" @no="closeModalAlertDelete"
        :open-modal="open_modal_delete" :enable-close-outside="true" title="Eliminar Norma" type="DANGER"
        buttons="YES_NO">
        Você está prestes a eliminar este item do Plano de ação. Deseja realmente
        prosseguir? *Essa operação não pode ser desfeita.
    </BaseModalDialog>

    <BaseModalContent @close-modal="closeModalAlertNewActionPlan" :open-modal="open_modal_new_item"
        :enable-close-outside="false">

        <div class="relative max-w-[800px] w-[90%]">
            <div class="bg-white w-full rounded-t-lg overflow-hidden">
                <div class="bg-gray-50 border-b pb-2 px-8">
                    <button @click="closeModalAlertNewActionPlan" :desabled="processing"
                        class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                        <i class="bi bi-x-lg text-[1rem]"></i>
                    </button>
                    <div class="text-center pt-4 pb-2">
                        <h2 class="font-semibold text-2xl text-gray-500">Plano de Ação</h2>
                        <span class="text-gray-400">Registre ações a serem implementadas para mitigação de riscos e
                            aproveitamento de oportunidades.</span>
                    </div>
                </div>

                <div class="h-[70vh] overflow-y-scroll beauty-scrollbar px-8">
                    <FormProcessActionPlan @processing="processing = true" @success="stop" @error="stop"
                        @success-update="stop" @error-update="stop" @close-modal="closeModalAlertNewActionPlan" />
                </div>
            </div>

            <div class="bg-gray-50 border-t rounded-b-lg p-4">
                <div class="flex items-center justify-end gap-x-3">
                    <button @click="saveNorm" :desabled="processing" class="btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="font-semibold">Adicionar</span>
                    </button>

                    <button type="button" @click="closeModalAlertNewActionPlan" :desabled="processing"
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
import { ref } from "vue";
import BaseDropdownOptions from '@/components/BaseDropdownOptions.vue';
import BaseModalDialog from "@/components/BaseModalDialog.vue";
import BaseModalContent from "@/components/BaseModalContent.vue";
import FormFunnil from "./FormFunnil.vue";
import FormProcessActionPlan from "./FormProcessActionPlan.vue";


const open_modal_delete = ref(false);
const id_process_to_delete = ref(null);
const open_modal_new_item = ref(null);


const showDialogDelete = (process_id) => {
    open_modal_delete.value = true;
    id_process_to_delete.value = process_id;
    document.body.style.overflow = "hidden";
};

const closeModalAlertDelete = () => {
    open_modal_delete.value = false;
    document.body.style.overflow = "auto";
};

const showDialogNewActionPlan = () => {
    open_modal_new_item.value = true;
    document.body.style.overflow = "hidden";
};

const closeModalAlertNewActionPlan = () => {
    open_modal_new_item.value = false;
    document.body.style.overflow = "auto";
};

</script>