<template>
    <div v-if="status === 'DONE'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-emerald-500 bg-emerald-100/60">
        <span class="text-sm font-normal">Concluída</span>
    </div>

    <div v-if="status === 'PENDENT'" class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="text-sm font-normal">Pendente</span>
    </div>

    <div v-if="status === 'IN_COURSE'" class="inline-flex items-center px-3 py-1 text-blue-500 rounded-xl bg-blue-100/60">
        <span class="text-sm font-normal">Em Andamento</span>
    </div>

    <div v-if="status === 'CANCELED'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="text-sm font-normal">Cancelada</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // DONE, PENDENT, CANCELED, IN_COURSE
    }
});

</script>