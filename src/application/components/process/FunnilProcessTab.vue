<template>

    <div class="mt-3">
        <div class="flex justify-between items-center">
            <h2 class="text-gray-700 font-semibold text-xl mb-7">Análise de Gargalos</h2>

            <button @click="showDialogNewAnalisys" class="btn-primary">
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
                            Problema
                        </th>
                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Tem?
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Porque?
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Resolvido?
                        </th>

                        <th scope="col">
                            <span class="sr-only">Opções</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                        <td class="px-4 py-4 text-sm whitespace-nowrap text-gray-500 table-long-text">
                           Falta de Planeamento
                        </td>
                        <td class="px-4 text-gray-500 py-4 text-sm whitespace-nowrap">
                           Não
                        </td>
                        <td class="px-4 text-gray-500 table-long-text py-4 text-sm whitespace-nowrap">
                           Sem motivo aparente
                        </td>
                        <td class="px-4 text-gray-500 py-4 text-sm whitespace-nowrap">
                           Não
                        </td>
                        <td class="relative px-4 py-4 text-sm whitespace-nowrap">
                            <BaseDropdownOptions :options="['DELETE', 'UPDATE']" @update="showDialogUpdate(1)"
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
        Você está prestes a eliminar este<strong> item de análise.</strong> Deseja realmente
        prosseguir? *Essa operação não pode ser desfeita.
    </BaseModalDialog>

    <BaseModalContent @close-modal="closeModalAlertNewAnalisys" :open-modal="open_modal_new_item"
        :enable-close-outside="false">

        <div class="relative max-w-[600px] w-[90%]">
            <div class="bg-white w-full rounded-t-lg overflow-hidden">
                <div class="bg-gray-50 border-b pb-2 px-8">
                    <button @click="closeModalAlertNewAnalisys" :desabled="processing"
                        class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                        <i class="bi bi-x-lg text-[1rem]"></i>
                    </button>
                    <div class="text-center pt-4 pb-2">
                        <h2 class="font-semibold text-2xl text-gray-500">Análise de Gargalo</h2>
                        <span class="text-gray-400">Adicione itens à lista de análise, melhorando a eficiência dos
                            processos.</span>
                    </div>
                </div>
                <div class="px-5">
                    <FormFunnil @processing="processing = true" @success="stop" @error="stop" @success-update="stop"
                        @error-update="stop" @close-modal="closeModalAlertNewAnalisys" />
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

                    <button type="button" @click="closeModalAlertNewAnalisys" :desabled="processing"
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

const showDialogNewAnalisys = () => {
    open_modal_new_item.value = true;
    document.body.style.overflow = "hidden";
};

const closeModalAlertNewAnalisys = () => {
    open_modal_new_item.value = false;
    document.body.style.overflow = "auto";
};

</script>