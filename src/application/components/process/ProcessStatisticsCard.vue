<template>
    <div v-if="type === 'procedures'" class="bg-purple-300 text-purple-900 rounded-lg text-center px-4 py-8">
        <p class="text-5xl font-bold">145</p>
        <p class="font-semibold mt-3">Procedimentos Criados</p>
    </div>
    <div v-if="type === 'indicators'" class="bg-purple-300 text-purple-900 rounded-lg text-center px-4 py-8">
        <p class="text-5xl font-bold">145</p>
        <p class="font-semibold mt-3">Indicadores de Eficácia (KPIs)</p>
    </div>
    <div v-if="type === 'norms'" class="bg-emerald-300 text-emerald-900 rounded-lg text-center px-4 py-8">
        <p class="text-5xl font-bold">+450</p>
        <p class="font-semibold mt-3">Procedimentos <br> Criados</p>
    </div>
    <div v-if="type === 'oportunities'" class="bg-blue-300 text-blue-900 rounded-lg text-center px-4 py-8">
        <p class="text-5xl font-bold">22</p>
        <p class="font-semibold mt-3">Oportunidades de Melhorias</p>
    </div>
    <div v-if="type === 'risks'" class="bg-red-200 text-red-900 rounded-lg text-center px-4 py-8">
        <p class="text-5xl font-bold">19</p>
        <p class="font-semibold mt-3">Riscos <br> Encontrados</p>
    </div>
</template>

<script setup>

defineProps({
    type: {
        type: String,
        default: "conformity" // 
    },
    proceduresData: {
        type: Object,
        default: null
    }
})

</script>