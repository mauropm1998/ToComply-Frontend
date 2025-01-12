<template>
    <section class="mt-3 pb-10">
        <div class="card mb-4">
            <div class="flex justify-between items-center border-b pb-2 mb-3">
                <div>
                    <h2 class="text-gray-700 font-semibold text-2xl">OPR (Acompanhamento Mensal do Processo)</h2>
                    <div class="flex gap-x-4">
                        <span class="text-gray-500 font-medium border-r pr-3">Junho 2024</span>
                        <span class="text-gray-500 font-medium border-r pr-3">Revisão: 1</span>
                        <span class="text-gray-500 font-medium">Atualizado em 12 Jun 2024</span>
                    </div>
                </div>
                <div class="flex flex-col">
                    <button class="btn-primary">
                        <i class="bi bi-plus-lg"></i> Plano de Ação Próximo Mês
                    </button>
                </div>
            </div>

            <div class="resume">
                <ul class="grid grid-cols-3 gap-x-5">
                    <li class="flex flex-col my-3">
                        <p class="text-gray-700 font-semibold">Resultado Final:</p>
                        <span class="text-gray-600">Regular</span>
                    </li>
                    <li class="flex flex-col my-3">
                        <p class="text-gray-700">A Maior Parte das <span class="font-semibold">Entregas</span> Foram
                            Realizadas</p>
                    </li>
                    <li class="flex flex-col my-3">
                        <p class="text-gray-700 font-semibold">Percentual das Entregas das Atividades Proposta no Mês:
                        </p>
                        <span class="text-gray-600">51% a 86%</span>
                    </li>
                    <li class="flex flex-col my-3">
                        <p class="text-gray-700 font-semibold">1 Meta Revista:</p>
                        <span class="text-gray-600">Alcançar 300 Potenciais Clientes</span>
                    </li>
                    <li class="flex flex-col my-3">
                        <p class="text-gray-700 font-semibold">Observações Gerais:</p>
                        <span class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                            iste corrupti mollitia pariatur enim neque fuga harum! Dolorem, quisquam minima commodi
                            voluptatibus!</span>
                    </li>
                    <li>
                        <div class="flex flex-col">
                            <p class="text-gray-700 font-semibold">1 Não Conformidade Aberta:</p>
                            <span class="text-gray-600">NC-2362</span>
                        </div>
                        <div class="flex flex-col mt-3">
                            <p class="text-gray-700 font-semibold">NC Aberta em:</p>
                            <span class="text-gray-600">22 Jul 2024</span>
                        </div>
                    </li>
                </ul>
            </div>

            <h3 class="text-gray-700 font-semibold text-xl border-t pt-3 mt-4">Análise</h3>
            <table class="my-3 min-w-full overflow-auto divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Resultado do Mês
                        </th>

                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Fatores Que Influenciaram
                        </th>

                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Prioridades Para o Próximo Mês
                        </th>
                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Follow Up - Ações Necessárias
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                        <td class="px-2 py-4 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sequi quos alias id quae
                            illum eius rerum excepturi? Animi veniam nulla in optio. Ea, odio. Quos neque sequi illo
                            rem?
                        </td>
                        <td class="px-2 py-4 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sequi quos alias id quae
                            illum eius rerum excepturi? Animi veniam nulla in optio. Ea, odio. Quos neque sequi illo
                            rem?
                        </td>
                        <td class="px-2 py-4 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sequi quos alias id quae
                            illum eius rerum excepturi? Animi veniam nulla in optio. Ea, odio. Quos neque sequi illo
                            rem?
                        </td>
                        <td class="px-2 py-4 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sequi quos alias id quae
                            illum eius rerum excepturi? Animi veniam nulla in optio. Ea, odio. Quos neque sequi illo
                            rem?
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script setup>
import UnconformityStatus from '@/components/conformities/UnconformityStatus.vue';
import BaseDropdownOptions from "@/components/BaseDropdownOptions.vue";
import BaseModalDialog from "@/components/BaseModalDialog.vue";
import BaseModalContent from "@/components/BaseModalContent.vue";

</script>