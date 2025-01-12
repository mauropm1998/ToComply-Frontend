<template>
    <main class="mt-7">
        <div class="container mx-auto pb-4">
            <div class="flex items-center justify-between mb-1">
                <div>
                    <h1 class="flex items-center gap-x-3">
                        <span class="font-bold text-xl">Auditoria nº 12 </span>
                        <AuditStatus status="DONE" />
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
                                <RouterLink :to="{ name: 'audits' }"
                                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                        Auditorias e inspeções</span>
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
                                        Previsualização da auditoria</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div class="options flex gap-x-2 items-center">
                    <button
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                        @click="toggleDropdown">
                        <i class="bi bi-check-circle"></i> Gerar Relatório
                    </button>

                    <button
                        class="bg-gray-100 text-gray-500 flex first-letter:flex items-center justify-center w-1/2 px-4 py-2 text-sm tracking-wide  transition-colors duration-200 rounded-md shrink-0 sm:w-auto gap-x-2 hover:bg-gray-200"
                        @click="showDialogDelete">
                        <i class="bi bi-trash3"></i> Eliminar
                    </button>
                </div>
            </div>
        </div>

        <section class="h-[70vh] overflow-y-scroll mt-3">
            <div class="flex gap-x-4 pb-10 container mx-auto">
                <div class="max-w-[285px] pe-4 h-[68vh] overflow-y-auto overflow-x-hidden beauty-scrollbar fixed">
                    <nav>
                        <ul class="mt-3">
                            <li class="rounded-md p-2.5 border-b">
                                <button @click="showActiveTab('OVERVIEW')"
                                    :class="[activeTab === 'OVERVIEW' ? 'text-blue-600' : 'text-gray-600', 'flex items-center text-start gap-x-3']">
                                    <div
                                        :class="[activeTab === 'OVERVIEW' ? 'bg-blue-500' : 'bg-slate-200', 'rounded-lg py-2 px-2']">
                                        <i
                                            :class="[activeTab === 'OVERVIEW' ? 'text-white' : 'text-gray-400', 'bi bi-eye-fill text-[1.4rem] leading-none']"></i>
                                    </div>
                                    <div class="w-full">
                                        <h4 class="font-semibold leading-none">Visão Geral</h4>
                                        <small class="text-gray-500">Informações gerais da auditoria</small>
                                    </div>
                                </button>
                            </li>
                            <li class="rounded-md p-2.5 border-b">
                                <button @click="showActiveTab('TASKS')"
                                    :class="[activeTab === 'TASKS' ? 'text-blue-600' : 'text-gray-600', 'flex items-center text-start gap-x-3']">
                                    <div
                                        :class="[activeTab === 'TASKS' ? 'bg-blue-500' : 'bg-slate-200', 'rounded-lg py-2 px-2']">
                                        <i
                                            :class="[activeTab === 'TASKS' ? 'text-white' : 'text-gray-500', 'bi bi-list-check text-blue-500 text-[1.6rem] leading-none']"></i>
                                    </div>
                                    <div class="w-full">
                                        <h4 class="font-semibold leading-none">Tarefas</h4>
                                        <small class="text-gray-500">Objectivos a serem alcançados</small>
                                    </div>
                                </button>
                            </li>
                            <li class="rounded-md p-2.5 border-b">
                                <button @click="showActiveTab('VERIFICATION')"
                                    :class="[activeTab === 'VERIFICATION' ? 'text-blue-600' : 'text-gray-600', 'flex items-center text-start gap-x-3']">
                                    <div
                                        :class="[activeTab === 'VERIFICATION' ? 'bg-blue-500' : 'bg-slate-200', 'rounded-lg py-2 px-2']">
                                        <i
                                            :class="[activeTab === 'VERIFICATION' ? 'text-white' : 'text-gray-400', 'bi bi-check-circle-fill text-blue-500 text-[1.5rem] leading-none']"></i>
                                    </div>
                                    <div class="w-full">
                                        <h4 class="font-semibold leading-none">Seguimento e Verificação</h4>
                                        <small class="text-gray-500">Progresso e avaliação da auditoria</small>
                                    </div>
                                </button>
                            </li>
                            <li class="rounded-md p-2.5">
                                <button @click="showActiveTab('OBSERVATION')"
                                    :class="[activeTab === 'OBSERVATION' ? 'text-blue-600' : 'text-gray-600', 'flex items-center text-start gap-x-3']">
                                    <div
                                        :class="[activeTab === 'OBSERVATION' ? 'bg-blue-500' : 'bg-slate-200', 'rounded-lg py-2 px-2']">
                                        <i
                                            :class="[activeTab === 'OBSERVATION' ? 'text-white' : 'text-gray-400', 'bi bi-easel2-fill text-[1.5rem] leading-none']"></i>
                                    </div>
                                    <div class="w-full">
                                        <h4 class="font-semibold leading-none">Observações</h4>
                                        <small class="text-gray-500">Outras informações relevantes</small>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="ms-[290px] w-full">
                    <AuditOverviewTab v-if="activeTab === 'OVERVIEW'" />
                    <AuditTasksTab v-if="activeTab === 'TASKS'" />
                    <AuditVerificationTab v-if="activeTab === 'VERIFICATION'" />
                    <AuditObservationTab v-if="activeTab === 'OBSERVATION'" />
                </div>
            </div>
        </section>
    </main>

    <BaseModalDialog @close-modal="closeModalAlertDelete" @yes="axiosDeleteDocumentation" @no="closeModalAlertDelete"
        :open-modal="open_modal_delete" :enable-close-outside="true" title="Eliminar Auditoria" type="DANGER"
        buttons="YES_NO">
        Você está prestes a eliminar esta<strong> Auditoria e todos os dados associados.</strong> Deseja realmente
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
                <span class="text-gray-400">Edite informações referente a auditoria</span>
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
import AuditStatus from "@/components/audits/AuditStatus.vue";
import AuditOverviewTab from "@/components/audits/overview/AuditOverviewTab.vue";
import AuditTasksTab from "@/components/audits/tasks/AuditTasksTab.vue";
import AuditObservationTab from "@/components/audits/observations/AuditObservationTab.vue";
import AuditVerificationTab from "@/components/audits/verification/AuditVerificationTab.vue";
import BaseModalDialog from "@/components/BaseModalDialog.vue";
import BaseModalContent from "@/components/BaseModalContent.vue";
import FormAudit from "@/components/audits/FormAudit.vue";
import PageLoader from "@/components/PageLoader.vue";



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
    document.title = "Comply 360 | Previsualização da auditoria";
    document.body.style.overflow = "hidden";

});

</script>