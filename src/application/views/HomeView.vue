<template>
  <main class="my-12 mx-auto container">

    <div class="flex items-center justify-between">
      <div>
        <h1 class="font-bold text-xl text-gray-700 leading-none">Painel e Estatísticas</h1>
        <span class="text-sm text-gray-500">Acompanhe suas ativiades e estáticas por aqui!</span>
      </div>
      <RouterLink :to="{ name: 'reports' }" class="btn-primary">
        <i class="bi bi-calendar-plus text-[1rem]"></i>
        <span class="font-semibold">Relatórios</span>
      </RouterLink>
    </div>

    <section class="grid grid-cols-4 gap-x-4 my-5">
      <ChartCard type="norms" :get-data="normData" follow-route="norms" current-value="432" />
      <ChartCard type="documentation" :get-data="programsData" follow-route="documentations" current-value="168" />
      <ChartCard type="audits" :get-data="normData" follow-route="audits" current-value="1.790" />
      <ChartCard type="trainings" :get-data="programsData" follow-route="trainings" current-value="55" />
    </section>

    <section class="grid grid-cols-3 gap-x-4 my-5">
      <ProcessBarCard :get-data="programData" />
      <ProgramPieCard :get-data="programData" />
      <ActivityLogCard :get-data="programData" />
    </section>

    <section class="flex gap-x-4 my-5">
      <div class="rounded-lg bg-white border w-full">
        <div class="flex justify-between border-b pb-2 px-4 pt-4">
          <div class="flex items-center gap-x-4">
            <div>
              <h3 class="font-semibold leading-none">Não Conformidades</h3>
              <span class="text-gray-400 text-sm">Conformidades e Não Conformidades no Sistema</span>
            </div>
          </div>

          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li class="me-2">
              <button class="inline-block px-4 py-2 text-blue-500 bg-blue-100 rounded-lg active"
                aria-current="page">Todas</button>
            </li>
            <li class="me-2">
              <button
                class="inline-block px-4 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100">Conformidades</button>
            </li>        
            <li class="me-2">
              <button
                class="inline-block px-4 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100">Não Conformidades</button>
            </li>        
          </ul>
        </div>
        
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <span>RNC</span>
              </th>
              <th scope="col"
                class="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <span>Origem</span>
              </th>

              <th scope="col"
                class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Descrição
              </th>
              <th scope="col"
                class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Cliente
              </th>

              <th scope="col"
                class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Frequência
              </th>

              <th scope="col"
                class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Data de implementação
              </th>

              <th scope="col"
                class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Prazo de Resolução
              </th>

              <th scope="col"
                class="px-2 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Estado
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
                <BaseDropdownOptions :options="['PREVIEW_ROUTER_LINK']"
                  :preview_route_object="{ name: 'conformity-preview', params: { id: 2 } }" />
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 ">
                <span># 12</span>
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
                <BaseDropdownOptions :options="['PREVIEW_ROUTER_LINK']"
                  :preview_route_object="{ name: 'conformity-preview', params: { id: 2 } }" />
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 ">
                <span># 12</span>
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
                <BaseDropdownOptions :options="['PREVIEW_ROUTER_LINK']"
                  :preview_route_object="{ name: 'conformity-preview', params: { id: 2 } }" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import ChartCard from '@/application/components/dashboard/ChartCard.vue';
import ProgramPieCard from '@/application/components/dashboard/ProgramPieCard.vue';
import ProcessBarCard from '@/application/components/dashboard/ProcessBarCard.vue';
import ActivityLogCard from '@/application/components/dashboard/ActivityLogCard.vue';
import UnconformityStatus from '@/application/components/conformities/UnconformityStatus.vue';
import instance from '@/util/Axios';


const normData = ref([12, 34, 5, 49]);
const programsData = ref([26, 14, 35, 55]);
const programData = ref([27, 55, 13]);




onMounted(() => {
  document.title = 'Comply 360 | Painel de Estatísticas'

  instance.get('/standards').then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  });
})

</script>
