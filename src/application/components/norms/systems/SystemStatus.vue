<template>
    <div v-if="status === 'DEVELOPMENT'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-emerald-500 bg-emerald-100/60">
        <span class="text-sm font-normal">Em Desenvolvimento</span>
    </div>

    <div v-if="status === 'IMPLEMENTED'" class="inline-flex items-center px-3 py-1 text-blue-500 rounded-xl bg-blue-100/60">
        <span class="text-sm font-normal">Implementado</span>
    </div>

    <div v-if="status === 'MAINTENANCE'" class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="text-sm font-normal">Em Manutenção</span>
    </div>

    <div v-if="status === 'TORNED_OFF'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="text-sm font-normal">Descontinuado</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // ACTIVE, EVALUATION, INACTIVE
    }
});

</script>