<template>
    <div>
        <div class="flex gap-x-2 items-center mt-5">
            <h3 class="font-bold text-xl text-gray-500">OP 2024-001</h3>
            <OportunityPriority priority="MIDDLE" />
        </div>
        <h4 class="font-medium text-xl text-gray-500">Melhoria na Gestão de Segurança da Informação</h4>
        <p class="text-gray-500 my-2">Esta oportunidade especifica os requisitos para estabelecer, implementar, manter e
            melhorar
            continuamente um sistema de gestão de segurança da informação. Esta norma especifica os requisitos, manter e
            melhorar continuamente um sistema de gestão de segurança da informação
        </p>

        <div class="grid grid-cols-3 my-5">
            <div class="flex gap-x-3 mb-3">
                <div class="rounded-md py-2 px-3 bg-blue-50">
                    <i class="bi bi-list-ul text-blue-600 text-[1.3rem]"></i>
                </div>
                <div>
                    <span class="text-sm font-semibold text-gray-600">Categoria</span>
                    <p class="text-gray-500 leading-tight">Tecnologia</p>
                </div>
            </div>

            <div class="flex gap-x-3 mb-3">
                <div class="rounded-md py-2 px-3 bg-blue-50">
                    <i class="bi bi-calendar-week text-blue-600 text-[1.3rem]"></i>
                </div>
                <div>
                    <span class="text-sm font-semibold text-gray-600">Data de Identificação</span>
                    <p class="text-gray-500 leading-tight">22 Mai 2024</p>
                </div>
            </div>

            <div class="flex gap-x-3 mb-3">
                <div class="rounded-md py-2 px-3 bg-blue-50">
                    <i class="bi bi-arrow-repeat text-blue-600 text-[1.3rem]"></i>
                </div>
                <div>
                    <span class="text-sm font-semibold text-gray-600">Estado de Certificação</span>
                    <p class="text-gray-500 leading-tight">Pendente</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 mb-5">
            <div class="mb-3">
                <div class="bg-gray-50 px-4 py-3.5 border-b rounded-l-lg border-gray-200">
                    <span class="text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Impacto Potencial
                    </span>
                </div>
                <p class="px-4 pt-2 text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eveniet amet facere odio eius
                    dignissimos ipsum ratione quam excepturi! Quod nam cum maiores odio non temporibus ipsam
                    veritatis sed reprehenderit.
                </p>
            </div>
            <div class="mb-3">
                <div class="bg-gray-50 px-4 py-3.5 border-b rounded-r-lg border-gray-200">
                    <span class="text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Benefícios Esperados
                    </span>
                </div>
                <p class="px-4 pt-2 text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eveniet amet facere odio eius
                    dignissimos ipsum ratione quam excepturi! Quod nam cum maiores odio non temporibus ipsam
                    veritatis sed reprehenderit.
                </p>
            </div>
            <div class="mb-3">
                <div class="bg-gray-50 px-4 py-3.5 border-b rounded-l-lg border-gray-200">
                    <span class="text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Recursos Necessários
                    </span>
                </div>
                <p class="px-4 pt-2 text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eveniet amet facere odio eius
                    dignissimos ipsum ratione quam excepturi! Quod nam cum maiores odio non temporibus ipsam
                    veritatis sed reprehenderit.
                </p>
            </div>
            <div class="mb-3">
                <div class="bg-gray-50 px-4 py-3.5 border-b rounded-r-lg border-gray-200">
                    <span class="text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Plano de Ação
                    </span>
                </div>
                <p class="px-4 pt-2 text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eveniet amet facere odio eius
                    dignissimos ipsum ratione quam excepturi! Quod nam cum maiores odio non temporibus ipsam
                    veritatis sed reprehenderit.
                </p>
            </div>
        </div>

        <div class="mb-5 grid grid-cols-2 gap-x-5">
            <div class="text-gray-600">
                <h3 class="info-title">Processo</h3>
                <div class="border-s-4 bg-gray-50 border-y ps-3 pb-2 pt-1 border-s-blue-500">
                    <p class="mb-1">Processo de Segurança de Informação</p>
                    <div v-if="status === 'CERTIFIABLE'"
                        class="inline-flex items-center px-2 py-1 rounded-xl text-blue-500 bg-blue-100">
                        <span class="text-xs font-semibold">Certificável</span>
                    </div>
                    <div v-if="status === 'NOT_CERTIFIABLE'"
                        class="inline-flex items-center px-2 py-1 text-orange-500 rounded-xl bg-orange-100/80">
                        <span class="text-sm font-semibold">Não Certificável</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="info-title">Responsável</h3>
                <div class="bg-gray-50 p-3 rounded-lg border">
                    <p class="font-medium text-gray-800 dark:text-white leading-none">Naor de
                        Almeida</p>
                    <span class="text-sm font-normal text-blue-600">Administrador
                    </span>
                </div>
            </div>
        </div>


        <h3 class="info-title">Riscos Associados </h3>
        <div class="mb-10 mt-3 text-gray-600 grid grid-cols-2 gap-x-5">
            <div class="border-s-4 border-y ps-3 bg-gray-50 pb-2 pt-1 border-s-blue-500">
                <p class="mb-1">Norma de Segurança de Informação</p>
                <div v-if="status === 'CERTIFIABLE'"
                    class="inline-flex items-center px-2 py-1 rounded-xl text-blue-500 bg-blue-100">
                    <span class="text-xs font-semibold">Certificável</span>
                </div>
                <div v-if="status === 'NOT_CERTIFIABLE'"
                    class="inline-flex items-center px-2 py-1 text-orange-500 rounded-xl bg-orange-100/80">
                    <span class="text-sm font-semibold">Não Certificável</span>
                </div>
            </div>

            <div class="border-s-4 border-y ps-3 bg-gray-50 pb-2 pt-1 border-s-blue-500">
                <p class="mb-1">Norma de Segurança de Informação</p>
                <div v-if="status === 'CERTIFIABLE'"
                    class="inline-flex items-center px-2 py-1 rounded-xl text-blue-500 bg-blue-100">
                    <span class="text-xs font-semibold">Certificável</span>
                </div>
                <div v-if="status === 'NOT_CERTIFIABLE'"
                    class="inline-flex items-center px-2 py-1 text-orange-500 rounded-xl bg-orange-100/80">
                    <span class="text-sm font-semibold">Não Certificável</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import OportunityPriority from '@/components/process/oportunities/OportunityPriority.vue';


const status = ref("CERTIFIABLE");

</script>