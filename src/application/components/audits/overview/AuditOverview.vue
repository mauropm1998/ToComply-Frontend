<template>
    <section class="my-5">
        <h2 class="text-lg font-semibold text-gray-600">Dados Gerais da Auditoria</h2>
        <hr class="border-slate-300 my-3" />

        <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-x-4 mt-4">
            <div class="rounded-lg p-4 flex gap-x-3">
                <div class="rounded-full h-10 w-10 bg-blue-100 leading-10">
                    <i class="block bi bi-reception-4 text-blue-400 text-[1.7rem] text-center"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-3xl font-semibold text-gray-600">100%</span>
                    <span class="text-sm text-gray-600">Progresso da auditoria</span>
                </div>
            </div>
            <div class="rounded-lg p-4 flex gap-x-3">
                <div class="rounded-full h-10 w-10 bg-red-100 leading-10">
                    <i class="block bi bi-escape text-red-400 text-[1.7rem] text-center"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-3xl font-semibold text-gray-600">123</span>
                    <span class="text-sm text-gray-600">Não conformidades encontradas</span>
                </div>
            </div>
            <div class="rounded-lg p-4 flex gap-x-3">
                <div class="rounded-full h-10 w-10 bg-orange-100 leading-10">
                    <i class="block bi bi-binoculars-fill text-orange-400 text-[1.7rem] text-center"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-3xl font-semibold text-gray-600">13</span>
                    <span class="text-sm text-gray-500">Evidências capturadas</span>
                </div>
            </div>

            <div class="rounded-lg p-4 flex gap-x-3">
                <div class="rounded-full h-10 w-10 bg-green-100 leading-10">
                    <i class="block bi bi-check-circle-fill text-green-400 text-[1.7rem] text-center"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-3xl font-semibold text-gray-600">45</span>
                    <span class="text-sm text-gray-600">Ações Corretivas</span>
                </div>
            </div>

            <div class="rounded-lg p-4 flex gap-x-3">
                <div class="rounded-full h-10 w-10 bg-yellow-100 leading-10">
                    <i class="block bi bi-lightbulb-fill text-yellow-500 text-[1.7rem] text-center"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-3xl font-semibold">60</span>
                    <span class="text-sm text-gray-600">Ações Preventivas</span>
                </div>

            </div>
            <div class="rounded-lg p-4 flex gap-x-3">
                <div class="rounded-full h-10 w-10 bg-purple-200 leading-10">
                    <i class="block bi bi-easel2-fill text-purple-400 text-[1.7rem] text-center"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-3xl font-semibold">100</span>
                    <span class="text-sm text-gray-500">Observações</span>
                </div>
            </div>
            <div class="rounded-lg p-4 flex gap-x-3">
                <div class="rounded-full h-10 w-10 bg-pink-100 leading-10">
                    <i class="block bi bi-people-fill text-pink-400 text-[1.7rem] text-center"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-3xl font-semibold">76</span>
                    <span class="text-sm text-gray-500">Entrevistas Realizadas</span>
                </div>
            </div>
        </div>

    </section>
</template>


<script setup>


</script>