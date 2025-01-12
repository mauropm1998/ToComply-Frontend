<template>
    <div class="card border">
        <div class="flex justify-between border-b pb-2">
            <div class="flex items-center gap-x-4">
                <div>
                    <h3 class="font-semibold leading-none">Gerenciamento de Processos</h3>
                    <span class="text-gray-400 text-sm">Todos os Itens dos Processos no Sistema</span>
                </div>
            </div>

            <div class="relative">
                <RouterLink :to="{ name: 'process' }"
                    class="text-sm text-gray-500 hover:text-blue-500 hover:font-semibold">
                    Ver Tudo <i class="bi bi-chevron-right"></i>
                </RouterLink>
            </div>
        </div>

        <div class="flex items-center gap-x-3 mt-4">
            <p class="text-gray-500 text-4xl leading-none font-bold">+243</p>
            <p class="text-gray-500/90 text-sm leading-tight">
                Itens adicionados <br> aos Processos no Sistema
            </p>
        </div>
        <div class="-mt-4">
            <apexchart type="bar" height="70" class="-ms-2" :options="chartOptions" :series="series"></apexchart>
        </div>

        <ul class="space-y-5 px-4">
            <li class="flex justify-between">
                <p class="text-gray-600 flex items-center gap-x-2">
                    <span class="block h-2 w-2 bg-[#845ADF] rounded-full"></span>
                    Riscos Potenciais
                </p>
                <p class="text-gray-600">80 Registrados</p>
            </li>
            <li class="flex justify-between">
                <p class="text-gray-600 flex items-center gap-x-2">
                    <span class="block h-2 w-2 bg-[#49B6F5] rounded-full"></span>
                    Oportunidades de Melhoria
                </p>
                <p class="text-gray-600">80 Registrados</p>
            </li>
            <li class="flex justify-between">
                <p class="text-gray-600 flex items-center gap-x-2">
                    <span class="block h-2 w-2 bg-[#F5B849] rounded-full"></span>
                    Indicadores de Performance (KPIs)
                </p>
                <p class="text-gray-600">120 Registrados</p>
            </li>
            <li class="flex justify-between">
                <p class="text-gray-600 flex items-center gap-x-2">
                    <span class="block h-2 w-2 bg-[#26BF94] rounded-full"></span>
                    Procedimentos 
                </p>
                <p class="text-gray-600">209 Registrados</p>
            </li>
            <li class="flex justify-between">
                <p class="text-gray-600 flex items-center gap-x-2">
                    <span class="block h-2 w-2 bg-[#2563eb] rounded-full"></span>
                    Planos de Ação 
                </p>
                <p class="text-gray-600">134 Registrados</p>
            </li>
            <li class="flex justify-between">
                <p class="text-gray-600 flex items-center gap-x-2">
                    <span class="block h-2 w-2 bg-[#BFDBFE] rounded-full"></span>
                    Mudanças
                </p>
                <p class="text-gray-600">80 Registrados</p>
            </li>
        </ul>
    </div>
</template>


<script setup>

import { ref } from 'vue';

const props = defineProps({
    getData: {
        type: Array,
        default: function () {
            return [0, 0, 0, 0]
        }
    },
})

const series = ref([
    {
        name: 'Riscos Potenciais',
        data: [44]
    },
    {
        name: 'Oportunidades de Melhoria',
        data: [32]
    },
    {
        name: 'Indicadores de Performance (KPIs)',
        data: [34]
    },
    {
        name: 'Procedimentos',
        data: [21]
    },
    {
        name: 'Planos de Ação',
        data: [38]
    },
    {
        name: 'Mudanças',
        data: [3]
    },
]);

const chartOptions = ref({
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%'
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    yaxis: {
        show: false
    },
    xaxis: {
        labels: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        colors: ['#845ADF', '#49B6F5','#F5B849', '#26BF94','#2563eb', '#BFDBFE']
    },
    legend: {
        show: false
    },
    grid: {
        borderColor: "rgba(0, 0, 0, 0)",
    },
    tooltip: {
        x: {
            show: false
        }
    }
});

</script>


<style>
.card .apexcharts-toolbar {
    display: none !important;
}
</style>