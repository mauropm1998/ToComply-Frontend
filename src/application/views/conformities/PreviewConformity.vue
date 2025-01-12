<template>
    <main class="mt-7">
        <div class="container mx-auto pb-4">
            <div class="flex items-center justify-between mb-1">
                <div>
                    <h1 class="flex items-center gap-x-3">
                        <span class="font-bold text-xl">Não Conformidade nº 12 </span>
                        <UnconformityStatus status="RESOLVED" />
                    </h1>
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
                            <li class="inline-flex items-center">
                                <RouterLink :to="{ name: 'conformities' }"
                                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                        Conformidades</span>
                                </RouterLink>
                            </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                        Previsualização</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div class="options flex gap-x-2 items-center">
                    <button class="btn-primary" @click="toggleDropdown">
                        <i class="bi bi-check-circle"></i> Gerar Relatório
                    </button>

                    <button class="btn-neutral" @click="showDialogDelete">
                        <i class="bi bi-trash3"></i> Eliminar
                    </button>
                </div>
            </div>

            <section class="mt-3">
                <div class="flex justify-between items-center">
                    <div class="card w-full">
                        <div class="flex justify-between items-center">
                            <div class="flex gap-x-3 items-center">
                                <span class="text-lg font-semibold text-gray-700">RNC-20213</span>
                                <ProcessStatus status="ADJOURNED" />
                            </div>
                            <button class="btn-light">
                                <i class="bi bi-pencil text-[1rem]"></i>
                            </button>
                        </div>

                        <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Ratione ipsa exercitationem officia iure temporibus, ad vero quibusdam id soluta
                            deserunt tempora
                            velit ea explicabo illum error accusamus tenetur? Reprehenderit, fuga!</p>

                        <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 mt-7">
                            <div class="flex gap-x-3 mb-3 items-start">
                                <div class="rounded-md py-2 px-3 bg-blue-50">
                                    <i class="bi bi-person text-blue-600 text-[1.3rem]"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-600">Cliente</p>
                                    <span class="text-gray-500 leading-tight">Naor de Almeida</span>
                                </div>
                            </div>

                            <div class="flex gap-x-3 mb-3 items-start">
                                <div class="rounded-md py-2 px-3 bg-blue-50">
                                    <i class="bi bi-calendar-week text-blue-600 text-[1.3rem]"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-600">Data</p>
                                    <span class="text-gray-500 leading-tight">22 Mai 2024</span>
                                </div>
                            </div>

                            <div class="flex gap-x-3 mb-3 items-start">
                                <div class="rounded-md py-2 px-3 bg-blue-50">
                                    <i class="bi bi-graph-up-arrow text-blue-600 text-[1.3rem]"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-600">Prioridade</p>
                                    <span class="text-gray-500 leading-tight">Alta</span>
                                </div>
                            </div>

                            <div class="flex gap-x-3 mb-3 items-start">
                                <div class="rounded-md py-2 px-3 bg-blue-50">
                                    <i class="bi bi-arrow-repeat text-blue-600 text-[1.3rem]"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-600">Estado</p>
                                    <span class="text-gray-500 leading-tight">Em Andamento</span>
                                </div>
                            </div>

                            <div class="flex gap-x-3 mb-3 items-start">
                                <div class="rounded-md py-2 px-3 bg-blue-50">
                                    <i class="bi bi-escape text-blue-600 text-[1.3rem]"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-600">Ponto do Desvio</p>
                                    <span class="text-gray-500 leading-tight">Qaulquer ponto</span>
                                </div>
                            </div>

                            <div class="flex gap-x-3 mb-3 items-start">
                                <div class="rounded-md py-2 px-3 bg-blue-50">
                                    <i class="bi bi-clock text-blue-600 text-[1.3rem]"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-600">Frequência</p>
                                    <span class="text-gray-500 leading-tight">Ocorreu Anualmente</span>
                                </div>
                            </div>

                            <div class="flex gap-x-3 mb-3 items-start">
                                <div class="rounded-md py-2 px-3 bg-blue-50">
                                    <i class="bi bi-arrow-repeat text-blue-600 text-[1.3rem]"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-600">Severidade</p>
                                    <span class="text-gray-500 leading-tight">A consequência possui resultados
                                        irreversíveis</span>
                                </div>
                            </div>

                            <div class="flex gap-x-3 mb-3 items-start">
                                <div class="rounded-md py-2 px-3 bg-blue-50">
                                    <i class="bi bi-arrow-repeat text-blue-600 text-[1.3rem]"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-600">Grau de Atenção</p>
                                    <span class="text-gray-500 leading-tight">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overflow-hidden my-5">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Possíveis Consequências
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Análise da Situação
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Abrangência
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                            <tr>
                                <td class="px-4 py-4 text-sm">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusantium incidunt non dolore sapiente ad iste suscipit rem recusandae,
                                    eum
                                    assumenda. Quisquam minima, cupiditate aspernatur voluptate quo incidunt eum
                                    optio
                                    exercitationem.
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusantium incidunt non dolore sapiente ad iste suscipit rem recusandae,
                                    eum
                                    assumenda. Quisquam minima, cupiditate aspernatur voluptate quo incidunt eum
                                    optio
                                    exercitationem.
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusantium incidunt non dolore sapiente ad iste suscipit rem recusandae,
                                    eum
                                    assumenda. Quisquam minima, cupiditate aspernatur voluptate quo incidunt eum
                                    optio
                                    exercitationem.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="overflow-hidden mt-5">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Ação de Contenção
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Data Limite
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Eficaz
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <span class="sr-only">Opções</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                            <tr>
                                <td class="px-4 py-4 text-sm">
                                    Qualquer ação
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    12 Mai 2024
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    Sim
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap relative">
                                    <BaseDropdownOptions :options="['DELETE', 'UPDATE']"
                                        @update="onHandleUpdateDialog(1)" @delete="showDialogDelete(1)" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="overflow-hidden mt-5 pb-20">
                    <h2 class="font-semibold text-gray-500 text-lg my-5">Ações Corretivas</h2>

                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Causa Raíz
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Ação
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Efeito Esperado
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Responsável
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Abrangência
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Recurso $ Necessário
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Data Limite
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Implementado
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Eficaz
                                </th>
                                <th scope="col"
                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <span class="sr-only">Opções</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                            <tr>
                                <td class="px-4 py-4 text-sm">
                                    Qualquer ação
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    Minha ação
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    Reduzir conflitos
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    Alizeria Marcela
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    DTI
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    Sim
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    18 Jun 2024
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    Sim
                                </td>
                                <td class="px-4 py-4 text-sm">
                                    Sim
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap relative">
                                    <BaseDropdownOptions :options="['DELETE', 'UPDATE']"
                                        @update="onHandleUpdateDialog(1)" @delete="showDialogDelete(1)" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </main>

    <BaseModalDialog @close-modal="closeModalAlertDelete" @yes="axiosDeleteDocumentation" @no="closeModalAlertDelete"
        :open-modal="open_modal_delete" :enable-close-outside="true" title="Eliminar Não Conformidade" type="DANGER"
        buttons="YES_NO">
        Você está prestes a eliminar esta<strong> Não Conformidade e todos os dados associados.</strong> Deseja
        realmente
        prosseguir? *Essa operação não pode ser desfeita!
    </BaseModalDialog>

    <BaseModalContent @close-modal="closeModalUpdate" :open-modal="open_update_dialog" :enable-close-outside="false">

        <div class="bg-white py-4 rounded-lg max-w-[670px] w-full relative">
            <button @click="closeModalUpdate"
                class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                <i class="bi bi-x-lg text-[1rem]"></i>
            </button>
            <div class="text-center pt-4">
                <h2 class="font-semibold text-2xl text-gray-500">Atualizar Informações</h2>
                <span class="text-gray-400">Edite informações referente a Não Conformidade</span>
            </div>

            <div class="h-[70vh] overflow-y-scroll beauty-scrollbar px-8">
                <FormAudit @processing="stop" @success="stop" @error="stop" @success-update="stop" @error-update="stop"
                    @close-modal="closeModalNewAudit" />
            </div>
        </div>

    </BaseModalContent>

    <PageLoader :open="show_deletation_process" text="Processando..." />
</template>

<script setup>

import { onMounted, ref } from 'vue';
import UnconformityStatus from '@/components/conformities/UnconformityStatus.vue';
import BaseModalDialog from "@/components/BaseModalDialog.vue";
import BaseModalContent from "@/components/BaseModalContent.vue";
import PageLoader from "@/components/PageLoader.vue";
import BaseDropdownOptions from "@/components/BaseDropdownOptions.vue";


const activeTab = ref("OVERVIEW");
const open_update_dialog = ref(false);
const open_modal_delete = ref(false);

const showActiveTab = (tab) => {
    activeTab.value = tab;
};

const onHandleUpdateDialog = () => {
    open_update_dialog.value = true;
};

const showDialogDelete = () => {
    open_modal_delete.value = true;
};

const closeModalUpdate = () => {
    open_update_dialog.value = false;
};

const closeModalAlertDelete = () => {
    open_modal_delete.value = false;
};

onMounted(() => {
    document.title = "Comply 360 | Previsualização da não conformidade";
});

</script>