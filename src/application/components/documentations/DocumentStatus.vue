<template>
    <div v-if="status === 'APPROVED'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-emerald-500 bg-emerald-100/60">
        <span class="text-sm font-normal">Aprovado</span>
    </div>

    <div v-if="status === 'PENDENT'" class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="text-sm font-normal">Pendente</span>
    </div>

    <div v-if="status === 'NOT_APPROVED'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="text-sm font-normal">Não Aprovado</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // APPROVED, NOT_APPROVED, PENDENT
    }
});

</script>