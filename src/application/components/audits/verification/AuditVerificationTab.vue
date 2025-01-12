<template>
    <section class="my-5">
        <div class="bg-white rounded-lg p-4 mb-7">
            <h2 class="text-lg font-bold text-gray-500 mb-2">Avaliação e Progresso</h2>
            <hr class="border-slate-200 my-3" />
            <div class="flex items-center gap-x-6 mb-7">
                <apexchart width="400" type="donut" :options="options" :series="series"></apexchart>
                <ul class="w-full space-y-5">
                    <li class="grid grid-cols-3 justify-between border-b py-5">
                        <div class="flex gap-x-3 items-center">
                            <i class="bi bi-escape text-blue-500 text-[1.3rem]"></i>
                            <span class="text-gray-500 text-xl">Não Conformidades</span>
                        </div>
                        <p class="text-gray-500 text-xl">Total: 42</p>
                        <p class="text-gray-500 text-xl">25.6%</p>
                    </li>
                    <li class="grid grid-cols-3 justify-between border-b pb-5">
                        <div class="flex gap-x-3 items-center">
                            <i class="bi bi-lightbulb text-emerald-500 text-[1.3rem]"></i>
                            <span class="text-gray-500 text-xl">Ações Preventivas</span>
                        </div>
                        <p class="text-gray-500 text-xl">Total: 55</p>
                        <p class="text-gray-500 text-xl">32.0%</p>
                    </li>
                    <li class="grid grid-cols-3 justify-between border-b pb-5">
                        <div class="flex gap-x-3 items-center">
                            <i class="bi bi-check-circle text-red-400 text-[1.3rem]"></i>
                            <span class="text-gray-500 text-xl">Ações Corretivas</span>
                        </div>
                        <p class="text-gray-500 text-xl">Total: 17</p>
                        <p class="text-gray-500 text-xl">9.9%</p>
                    </li>
                    <li class="grid grid-cols-3 justify-between border-b pb-5">
                        <div class="flex gap-x-3 items-center">
                            <i class="bi bi-pencil-square text-blue-500 text-[1.3rem]"></i>
                            <span class="text-gray-500 text-xl">Plano de Ação</span>
                        </div>
                        <p class="text-gray-500 text-xl">Total: 41</p>
                        <p class="text-gray-500 text-xl">23.8%</p>
                    </li>
                    <li class="grid grid-cols-3 justify-between pb-5">
                        <div class="flex gap-x-3 items-center">
                            <i class="bi bi-camera text-purple-500 text-[1.3rem]"></i>
                            <span class="text-gray-500 text-xl">Evidências</span>
                        </div>
                        <p class="text-gray-500 text-xl">Total: 15</p>
                        <p class="text-gray-500 text-xl">8.7%</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-white p-4 rounded-lg">
            <h2 class="text-lg font-bold text-gray-500 mb-2">Não Conformidades</h2>
            <hr class="border-slate-200 my-3" />

            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class=" dark:bg-gray-800">
                    <tr>

                        <th scope="col"
                            class="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-400">
                            <span>Não Conformidade</span>
                        </th>

                        <th scope="col"
                            class="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-400">
                            Procedimento
                        </th>

                        <th scope="col"
                            class="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-400">
                            Responsável
                        </th>

                        <th scope="col"
                            class="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-400">
                            Prazo de Resolução
                        </th>
                        <th scope="col"
                            class="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-400">
                            Prioridade
                        </th>
                        <th scope="col"
                            class="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-400">
                            Estado
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                        <td class="px-2 py-4 text-sm font-Conformidadel whitespace-nowrap table-long-text">
                            Minha Conformidade
                        </td>
                        <td class="px-2 py-4 text-sm font-Conformidadel whitespace-nowrap table-long-text">
                            Um Procedimento Qualquer
                        </td>
                        <td class="px-2 py-4 text-sm whitespace-nowrap">
                            Mauro Paulo
                        </td>
                        <td class="px-2 py-4 text-sm whitespace-nowrap">
                            18 Fev 2024
                        </td>
                        <td class="px-2 py-4 text-sm whitespace-nowrap">
                            <UnconformityPriority priority="HIGHT" />
                        </td>
                        <td class="px-2 py-4 text-sm whitespace-nowrap">
                            <UnconformityStatus status="IN_COURSE" />
                        </td>
                    </tr>
                    <tr>
                        <td class="px-2 py-4 text-sm font-Conformidadel whitespace-nowrap table-long-text">
                            Minha Conformidade
                        </td>
                        <td class="px-2 py-4 text-sm font-Conformidadel whitespace-nowrap table-long-text">
                            Um Procedimento Qualquer
                        </td>
                        <td class="px-2 py-4 text-sm whitespace-nowrap">
                            Mauro Paulo
                        </td>
                        <td class="px-2 py-4 text-sm whitespace-nowrap">
                            18 Fev 2024
                        </td>
                        <td class="px-2 py-4 text-sm whitespace-nowrap">
                            <UnconformityPriority priority="HIGHT" />
                        </td>
                        <td class="px-2 py-4 text-sm whitespace-nowrap">
                            <UnconformityStatus status="IN_COURSE" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="flex gap-x-6 my-7">
            <div class="bg-white rounded-lg p-4 w-1/2">
                <h2 class="text-lg font-bold text-gray-500 mb-2">Ações Corretivas e Preventivas</h2>
                <hr class="border-slate-200 my-3" />
                <CorrectivePreventiveAction priority="URGENT" />
                <CorrectivePreventiveAction />
                <CorrectivePreventiveAction priority="MEDIUM" />
            </div>
            <div class="bg-white rounded-lg p-4 w-1/2">
                <h2 class="text-lg font-bold text-gray-500 mb-2">Plano de Ação</h2>
                <hr class="border-slate-200 my-3" />
                <ActionPlain />
                <ActionPlain />
                <ActionPlain />
            </div>
        </div>

        <div class="mt-5 ps-4">
            <h2 class="text-lg font-bold text-gray-500 mb-2">Evidências Capturadas</h2>
            <hr class="border-slate-200 my-3" />

            <div class="grid grid-cols-3 gap-x-9 w-[90%]">
                <EvidenceImageBox />
                <EvidenceImageBox />
                <EvidenceImageBox />
            </div>

            <div class="grid grid-cols-3 gap-x-5 mb-5 mt-7">
                <EvidenceItem />
                <EvidenceItem />
                <EvidenceItem />
            </div>

        </div>

    </section>
</template>

<script setup>

import { ref } from 'vue';
import UnconformityPriority from '@/components/conformities/UnconformityPriority.vue';
import UnconformityStatus from '@/components/conformities/UnconformityStatus.vue';
import CorrectivePreventiveAction from '@/components/audits/verification/CorrectivePreventiveAction.vue';
import ActionPlain from './ActionPlain.vue';
import EvidenceImageBox from './EvidenceImageBox.vue';
import EvidenceItem from './EvidenceItem.vue';

const series = ref([44, 55, 41, 17, 15]);

const options = ref({
    legend: {
        show: false,
    }, dataLabels: {
        enabled: true,
        style: {
            fontSize: '15px',
            fontFamily: 'sans-serif',
            fontWeight: 'bolder',
        },
        dropShadow: {
            enabled: false,
        }
    }
});


</script>

<style>
circle.fg {
    transform: rotate(-90deg);
    transform-origin: 125px 125px;
}
</style>