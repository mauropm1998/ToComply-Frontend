<template>
    <div v-if="status === 'ACTIVE'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-emerald-500 bg-emerald-100/60">
        <span class="font-normal">Ativo</span>
    </div>

    <div v-if="status === 'SUSPENSE'" class="inline-flex items-center px-3 py-1 text-orange-500 rounded-xl bg-orange-100/60">
        <span class="font-normal">Suspenso</span>
    </div>

    <div v-if="status === 'PENDENT'" class="inline-flex items-center px-3 py-1 text-blue-500 rounded-xl bg-blue-100/60">
        <span class="font-normal">Pendente</span>
    </div>

    <div v-if="status === 'INACTIVE'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-pink-100">
        <span class="font-normal">Inativo</span>
    </div>

    <div v-if="status === 'CLOSED'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="font-normal">Encerrado</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // ACTIVE, SUSPENSE, INACTIVE, PENDENT, CLOSED
    }
});

</script>