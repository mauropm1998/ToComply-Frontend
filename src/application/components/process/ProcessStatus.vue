<template>
    <div v-if="status === 'IN_COURSE'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-blue-500 bg-blue-100/60">
        <span class="text-sm font-normal">A decorrer</span>
    </div>

    <div v-if="status === 'DONE'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-emerald-500 bg-emerald-100/60">
        <span class="text-sm font-normal">Concluído</span>
    </div>

    <div v-if="status === 'ADJOURNED'" class="inline-flex items-center px-3 py-1 text-orange-500 rounded-xl bg-orange-100/60">
        <span class="text-sm font-normal">Adiado</span>
    </div>

    <div v-if="status === 'NOT_CONCLUDED'" class="inline-flex items-center px-3 py-1 text-orange-500 rounded-xl bg-orange-100/60">
        <span class="text-sm font-normal">Não Concluído</span>
    </div>

    <div v-if="status === 'REVISION'" class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="text-sm font-normal">Em Revisão</span>
    </div>

    <div v-if="status === 'CANCELED'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="text-sm font-normal">Cancelado</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // IN_COURSE, CANCELED, REVISION, DONE, ADJOURNED, NOT_CONCLUDED
    }
});

</script>