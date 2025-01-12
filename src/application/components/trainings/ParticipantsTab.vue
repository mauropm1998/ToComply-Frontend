<template>
    <section>
        <h2 class="font-semibold text-gray-600 mb-5">Participantes e Avaliações</h2>
        <div class="overflow-hidden">
            <table class="w-full divide-y mb-28 divide-gray-200 dark:divide-gray-700">
                <thead class="bg-white dark:bg-gray-800">
                    <tr>
                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Participante
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Estado do Treinamento
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Data da Avaliação
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Tipo da Avaliação
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Feedback
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500">
                            Resultado
                        </th>
                        <th scope="col">
                            <span class="sr-only">Opções</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <div class="flex items-center gap-x-2">
                                <img class="object-cover w-8 h-8 rounded-full" src="/src/assets/img/user.jpg"
                                    alt="Identidade Visual do instrutor">
                                <div>
                                    <h2 class="font-medium text-gray-800 dark:text-white leading-tight">Arthur Melo</h2>
                                    <p class="text-sm font-normal text-gray-600">@authurmelo
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <TrainingStatus status="NOT_CONCLUDED" />
                        </td>
                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            20 Mai 2024
                        </td>
                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            Avaliação Oral
                        </td>
                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap table-long-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nostrum natus explicabo maxime
                            iusto porro libero recusandae, illo, officia reprehenderit est nisi, ea doloremque fugit.
                            Tenetur qui harum voluptate impedit.
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <TrainingEvaluation evaluation="IN_EVALUATION" />
                        </td>

                        <td class="relative px-4 py-4 text-sm whitespace-nowrap">
                            <BaseDropdownOptions :options="['REMOVE_PARTICIPANT', 'EVALUATE_PARTICIPANT']"
                                @remove-participant="showDialogRemoveParticipant(1)"
                                @evaluate="showDialogEvaluatePaticipante(1)" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>


    <BaseModalDialog @close-modal="hideDialogRemoveParticipant" @yes="axiosRemoveParticipant"
        @no="hideDialogRemoveParticipant" :open-modal="open_modal_remove_participante" :enable-close-outside="true"
        title="Remover Participante" type="INFO" buttons="YES_NO">
        Você está prestes a remover este<strong> participante dos integrados para o treinamento.</strong> Deseja realmente
        prosseguir?
    </BaseModalDialog>

    <BaseModalContent @close-modal="hideDialogEvaluatePaticipante" :open-modal="open_modal_evluate_participante"
        :enable-close-outside="false">

        <div class="bg-white pt-4 rounded-lg max-w-[550px] w-full relative">
            <button @click="hideDialogEvaluatePaticipante"
                class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                <i class="bi bi-x-lg text-[1rem]"></i>
            </button>
            <div class="text-center pt-4">
                <h2 class="font-semibold text-2xl text-gray-500">Avaliar Participante</h2>
                <span class="text-gray-400">Realize avaliações eficazes para cada participante</span>
            </div>

            <div class="h-[64vh] overflow-y-auto beauty-scrollbar px-6">

                <div class="flex items-center gap-x-2 my-4 bg-blue-50 p-4 rounded-lg">
                    <img class="object-cover w-8 h-8 rounded-full" src="/src/assets/img/user.jpg"
                        alt="Identidade Visual do instrutor">
                    <div>
                        <h2 class="font-medium text-gray-800 dark:text-white leading-tight">Arthur Melo</h2>
                        <p class="text-sm font-normal text-gray-600">@authurmelo
                        </p>
                    </div>
                </div>

                <FormEvaluation @processing="stop" @success="stop" @error="stop"
                    @close-modal="hideDialogEvaluatePaticipante" />
            </div>

            <div class="bg-gray-50 border-t rounded-b-lg p-4">
                <div class="flex items-center justify-end gap-x-3">
                    <button @click="saveEvaluation" :desabled="processing" class="btn-primary">
                        <i class="bi bi-check-circle text-[1rem]"></i>
                        <span class="font-semibold">Salvar Avaliação</span>
                    </button>
                    <button type="button" @click="hideDialogEvaluatePaticipante" :desabled="processing"
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-gray-200 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-300">
                        <i class="bi bi-x-circle text-[1rem]"></i>
                        <span class="font-semibold">Cancelar</span>
                    </button>
                </div>
            </div>
        </div>

    </BaseModalContent>
</template>

<script setup>

import { ref } from "vue";
import BaseDropdownOptions from "@/components/BaseDropdownOptions.vue";
import BaseModalDialog from "@/components/BaseModalDialog.vue";
import BaseModalContent from "@/components/BaseModalContent.vue";
import TrainingStatus from "@/components/trainings/TrainingStatus.vue";
import TrainingEvaluation from "@/components/trainings/TrainingEvaluation.vue";
import FormEvaluation from "./FormEvaluation.vue";

const open_modal_evluate_participante = ref(false);
const open_modal_remove_participante = ref(false);

const showDialogRemoveParticipant = () => {
    open_modal_remove_participante.value = true;
};

const hideDialogRemoveParticipant = () => {
    open_modal_remove_participante.value = false;
};

const showDialogEvaluatePaticipante = () => {
    open_modal_evluate_participante.value = true;
};

const hideDialogEvaluatePaticipante = () => {
    open_modal_evluate_participante.value = false;
};

</script>