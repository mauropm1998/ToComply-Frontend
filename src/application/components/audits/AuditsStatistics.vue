<template>
    <div class="grid grid-cols-4 gap-x-4 mt-4">
        <div class="bg-white rounded-lg p-4 flex gap-x-3">
            <div class="rounded-full h-10 w-10 bg-green-100 leading-10">
                <i class="block bi bi-check-circle-fill text-green-400 text-[1.7rem] text-center"></i>
            </div>
            <div class="flex flex-col">
                <span class="text-3xl font-semibold text-gray-600">123</span>
                <span class="text-sm text-gray-500">Auditorias Realizadas</span>
            </div>

        </div>
        <div class="bg-white rounded-lg p-4 flex gap-x-3">
            <div class="rounded-full h-10 w-10 bg-orange-100 leading-10">
                <i class="block bi bi-back text-orange-400 text-[1.7rem] text-center"></i>
            </div>
            <div class="flex flex-col">
                <span class="text-3xl font-semibold text-gray-600">345</span>
                <span class="text-sm text-gray-500">Ações Corretivas</span>
            </div>

        </div>
        <div class="bg-white rounded-lg p-4 flex gap-x-3">
            <div class="rounded-full h-10 w-10 bg-red-100 leading-10">
                <i class="block bi bi-lightbulb-fill text-red-400 text-[1.7rem] text-center"></i>
            </div>
            <div class="flex flex-col">
                <span class="text-3xl font-semibold">123</span>
                <span class="text-sm text-gray-500">Ações Preventivas</span>
            </div>

        </div>
        <div class="bg-white rounded-lg p-4 flex gap-x-3">
            <div class="rounded-full h-10 w-10 bg-blue-100 leading-10">
                <i class="block bi bi-archive-fill text-blue-400 text-[1.7rem] text-center"></i>
            </div>
            <div class="flex flex-col">
                <span class="text-3xl font-semibold">100</span>
                <span class="text-sm text-gray-500">Relatórios de Auditoria</span>
            </div>

        </div>
    </div>
</template>

<script setup>

defineProps({
    auditsData: {
        type: Object,
        default: null,
    },
})

</script>