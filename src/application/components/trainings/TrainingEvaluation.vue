<template>
    <div v-if="evaluation === 'YES'" class="inline-flex justify-center items-center gap-x-2">
        <i class="bi bi-check-circle-fill text-[1.2rem] text-green-500"></i>
        <span class="text-green-500"> Sim</span>
    </div>
    <div v-if="evaluation === 'IN_EVALUATION'" class="inline-flex justify-center items-center gap-x-2">
        <i class="bi bi-clock-fill text-[1.2rem] text-orange-500"></i>
        <span class="text-orange-500"> Em Avaliação</span>
    </div>
    <div v-if="evaluation === 'APPROVED'" class="inline-flex justify-center items-center gap-x-2">
        <i class="bi bi-check-circle-fill text-[1rem] text-green-500"></i>
        <span class="text-green-500"> Aprovado</span>
    </div>
    <div v-if="evaluation === 'DESAPPROVED'" class="inline-flex justify-center items-center gap-x-2">
        <i class="bi bi-x-circle-fill text-[1.2rem] text-red-500"></i>
        <span class="text-red-500"> Reprovado</span>
    </div>
    <div v-if="evaluation === 'NO'" class="inline-flex justify-center items-center gap-x-2">
        <i class="bi bi-x-circle-fill text-[1rem] text-red-500"></i>
        <span class="text-red-500"> Não</span>
    </div>
</template>

<script setup>

defineProps({
    evaluation: {
        type: String, // YES, NO, IN_EVALUATION, APPROVED, DESAPPROVED
    }
});

</script>