<template>
    <div class="card border">
        <div class="flex justify-between border-b pb-2">
            <div class="flex items-center gap-x-4">
                <div>
                    <h3 class="font-semibold leading-none">Programas de Compliance</h3>
                    <span class="text-gray-400 text-sm">Todos os Programas no Sistema</span>
                </div>
            </div>

            <div class="relative">
                <RouterLink :to="{ name: 'programs' }"
                    class="text-sm text-gray-500 hover:text-blue-500 hover:font-semibold">
                    Ver Tudo <i class="bi bi-chevron-right"></i>
                </RouterLink>
            </div>
        </div>

        <div class="mt-5">
            <apexchart type="pie" width="380" class="flex justify-center" :options="chartOptions" :series="series">
            </apexchart>
        </div>

        <div class="grid grid-cols-4 gap-x-4 mb-2 mt-4 border-t pt-4">
            <div class="ms-4">
                <p class="text-gray-500">
                    Todos
                </p>
                <p class="text-gray-600 text-3xl font-bold">243</p>
            </div>
            <div>
                <p class="text-gray-500 flex items-center gap-x-2">
                    <span class="block h-3 w-3 bg-[#2563EB] rounded-full"></span>
                    Planejado
                </p>
                <p class="text-gray-600 text-3xl font-bold ms-4">43</p>
            </div>
            <div>
                <p class="text-gray-500 flex items-center gap-x-2">
                    <span class="block h-3 w-3 bg-[#BFDBFE] rounded-full"></span>
                    Em Vigor
                </p>
                <p class="text-gray-600 text-3xl font-bold ms-4">120</p>
            </div>
            <div>
                <p class="text-gray-500 flex items-center gap-x-2">
                    <span class="block h-3 w-3 bg-[#EAB308] rounded-full"></span>
                    Suspenso
                </p>
                <p class="text-gray-600 text-3xl font-bold ms-4">80</p>
            </div>
        </div>
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

const series = ref(props.getData);

const chartOptions = ref({
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['Planejado', 'Em Vigor', 'Suspenso'],
    legend: {
        show: false,
    },
    fill: {
        colors: ['#2563EB', '#BFDBFE', '#EAB308']
    },
    dataLabels: {
        style: {
            colors: ['#FFF'],
            fontFamily: 'Arial, sans-serif',
        },
    },
});

</script>


<style>
.card .apexcharts-toolbar {
    display: none !important;
}
</style>