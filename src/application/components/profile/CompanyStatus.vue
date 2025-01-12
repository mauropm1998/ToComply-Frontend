<template>
    <div v-if="status === 'ACTIVE'"
        class="inline-flex items-center px-3 py-1 rounded-xl text-emerald-500 bg-emerald-100/60">
        <span class="font-normal">Ativa</span>
    </div>

    <div v-if="status === 'TRIAL'" class="inline-flex items-center px-3 py-1 text-yellow-500 rounded-xl bg-yellow-100/60">
        <span class="font-normal">Em Teste</span>
    </div>

    <div v-if="status === 'SUSPENSE'" class="inline-flex items-center px-3 py-1 text-orange-500 rounded-xl bg-orange-100/60">
        <span class="font-normal">Suspensa</span>
    </div>

    <div v-if="status === 'PENDENT'" class="inline-flex items-center px-3 py-1 text-blue-500 rounded-xl bg-blue-100/60">
        <span class="font-normal">Pendente</span>
    </div>

    <div v-if="status === 'INACTIVE'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-pink-100">
        <span class="font-normal">Inativa</span>
    </div>

    <div v-if="status === 'CLOSED'" class="inline-flex items-center px-3 py-1 text-red-500 rounded-xl bg-red-100">
        <span class="font-normal">Encerrada</span>
    </div>
</template>

<script setup>

defineProps({
    status: {
        type: String, // ACTIVE, SUSPENSE, INACTIVE, PENDENT, CLOSED, TRIAL
    }
});

</script>