<template>
    <div v-if="status === 'VALID'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-emerald-500 bg-emerald-100/60">
        <span class="text-sm font-normal">Válida</span>
    </div>

    <div v-if="status === 'PENDENT'" class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="text-sm font-normal">Pendente</span>
    </div>

    <div v-if="status === 'INVALID'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="text-sm font-normal">Inválida</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // VALID, PENDENT, INVALID
    }
});

</script>