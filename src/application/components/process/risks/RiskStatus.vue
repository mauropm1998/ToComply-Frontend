<template>
    <div v-if="status === 'MITIGATED'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-emerald-500 bg-emerald-100/60">
        <span class="text-sm font-normal">Mitigado</span>
    </div>

    <div v-if="status === 'IN_MITIGATION'" class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/50">
        <span class="text-sm font-normal">Em Mitigação</span>
    </div>

    <div v-if="status === 'IDENTIFIED'" class="inline-flex items-center px-3 py-1 text-blue-500 rounded-xl bg-blue-100/60">
        <span class="text-sm font-normal">Identificado</span>
    </div>

    <div v-if="status === 'CANCELED'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="text-sm font-normal">Cancelada</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // IDENTIFIED, MITIGATED, CANCELED, IN_MITIGATION
    }
});

</script>