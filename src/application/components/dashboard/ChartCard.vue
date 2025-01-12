<template>
    <div class="card border">
        <div class="flex items-center justify-between">
            <div v-if="type === 'norms'" class="flex items-center gap-x-4">
                <div class="rounded-md py-1.5 px-2.5 bg-blue-100">
                    <i class="bi bi-book text-[1.2rem] text-blue-500"></i>
                </div>
                <div>
                    <h3 class="font-semibold leading-none">Normas</h3>
                    <span class="text-gray-400 text-sm">Todas as Normas no Sistema</span>
                </div>
            </div>

            <div v-if="type === 'documentation'" class="flex items-center gap-x-4">
                <div class="rounded-md py-1.5 px-2.5 bg-emerald-100">
                    <i class="bi bi-card-heading text-[1.2rem] text-emerald-500"></i>
                </div>
                <div>
                    <h3 class="font-semibold leading-none">Documentação</h3>
                    <span class="text-gray-400 text-sm">Todos as documentações no Sistema</span>
                </div>
            </div>

            <div v-if="type === 'audits'" class="flex items-center gap-x-4">
                <div class="rounded-md py-1.5 px-2.5 bg-purple-100">
                    <i class="bi bi-clipboard-check text-[1.2rem] text-purple-500"></i>
                </div>
                <div>
                    <h3 class="font-semibold leading-none">Auditorias</h3>
                    <span class="text-gray-400 text-sm">Todas as Auditorias no Sistema</span>
                </div>
            </div>

            <div v-if="type === 'trainings'" class="flex items-center gap-x-4">
                <div class="rounded-md py-1.5 px-2.5 bg-red-100">
                    <i class="bi bi-person-video3 text-[1.2rem] text-red-500"></i>
                </div>
                <div>
                    <h3 class="font-semibold leading-none">Treinamentos</h3>
                    <span class="text-gray-400 text-sm">Todas os Treinamentos no Sistema</span>
                </div>
            </div>


            <div class="relative">
                <RouterLink :to="{ name: followRoute }" class="btn-neutral">
                    <i class="bi bi-eye"></i>
                </RouterLink>
            </div>
        </div>

        <div class="grid grid-cols-2 mt-5 items-center">
            <div class="info">
                <p class="text-[26px] font-semibold leading-none text-gray-600">{{ currentValue }}</p>
                <span class="text-gray-500 text-sm">Atualmente Registrada(s)</span>
            </div>
            <apexchart type="area" height="75" class="-mb-[30px]" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>


<script setup>

import { ref } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'norm'
    },
    currentValue: {
        type: String,
        default: 0
    },
    followRoute: {
        type: String,
        default: 'dashboard'
    },
    getData: {
        type: Array,
        default: function () {
            return [0,0,0,0]
        } 
    },
})

const series = ref([
    {
        name: 'Dados',
        data: props.getData,
    },
]);

const chartOptions = ref({
    chart: {
        type: 'area',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    yaxis: {
        show: false
    },
    legend: {
        show: false
    },
    tollbar: {
        show: false
    }, 
    dropShadow: {
        enabled: false,
    },
    grid: {
        borderColor: "rgba(0, 0, 0, 0)",
        padding: {
            top: -30,
            right: 0,
            bottom: -8,
            left: 12,
        },
    },
    xaxis: {
        labels: {
            show: false,
            floating: true,
        },
        categories: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    },
    tooltip: {
        enabled: false,
    },
});

</script>


<style>
.card .apexcharts-toolbar {
    display: none !important;
}
</style>