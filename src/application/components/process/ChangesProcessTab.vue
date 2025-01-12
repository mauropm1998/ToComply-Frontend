<template>
    <section class="mt-3">
        <h2 class="text-gray-700 font-semibold text-xl mb-3">Mudanças</h2>

        <div class="pb-20">
            <table class="min-w-full overflow-auto divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th
                            class="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <span>Solicitante</span>
                        </th>
                        <th scope="col"
                            class="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <span>Data</span>
                        </th>

                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Mudança Proposta
                        </th>
                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Extensão
                        </th>

                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Motivo
                        </th>

                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                           Consequências
                        </th>

                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Recursos Necessário
                        </th>

                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Mudança A ceita?
                        </th>

                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Responsável Aprovação
                        </th>

                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Data Aprovação
                        </th>
                        <th scope="col"
                            class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Atualização Plano de Ação?
                        </th>

                        <th scope="col">
                            <span class="sr-only">Opções</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 ">
                            <span># 12</span>
                        </td>
                        <td class="px-2 py-4 text-sm table-long-text">
                            Minha Conformidade
                        </td>
                        <td class="px-2 py-4 text-sm table-long-text">
                            Minha Conformidade
                        </td>
                        <td class="px-2 py-4 text-sm table-long-text">
                            Minha Conformidade
                        </td>
                        <td class="px-2 py-4 text-sm table-long-text">
                            Um Processo Qualquer
                        </td>
                        <td class="px-2 py-4 text-sm">
                            Mauro Paulo
                        </td>
                        <td class="px-2 py-4 text-sm">
                            1
                        </td>
                        <td class="px-2 py-4 text-sm">
                            18 Fev 2024
                        </td>
                        <td class="px-2 py-4 text-sm">
                            18 Fev 2024
                        </td>
                        <td class="px-2 py-4 text-sm">
                            <UnconformityStatus status="IN_COURSE" />
                        </td>
                        <td class="px-2 py-4 text-sm relative">
                            <BaseDropdownOptions :options="['DELETE', 'PREVIEW_ROUTER_LINK']"
                                :preview_route_object="{ name: 'conformity-preview', params: { id: 2 } }"
                                @delete="showDialogDelete(1)" />
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