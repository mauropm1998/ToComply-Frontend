<template>
    <div class="grid grid-cols-6 gap-x-3 mb-6 items-center">
        <div class="flex flex-col justify-center items-center gap-2">
            <span :class="[step === 1 ? 'bg-sky-600 text-white border-sky-400': 'bg-slate-200 border-slate-500 text-slate-500', 'w-7 h-7 rounded-full text-center border-2']">1</span>
            <span :class="[step === 1 ? 'text-sky-600 font-bold' : 'text-slate-500', 'text-sm text-center']">Entradas e Fornecedores</span>
        </div>
        <div class="flex flex-col justify-center items-center gap-2">
            <span :class="[step === 2 ? 'bg-sky-600 text-white border-white': 'bg-slate-200 border-slate-500 text-slate-500', 'w-7 h-7 rounded-full text-center border-2']">2</span>
            <span :class="[step === 2 ? 'text-sky-600 font-bold' : 'text-slate-500', 'text-sm text-center']">Identificação dos Clientes</span>
        </div>
        <div class="flex flex-col justify-center items-center gap-2">
            <span :class="[step === 3 ? 'bg-sky-600 text-white border-white': 'bg-slate-200 border-slate-500 text-slate-500', 'w-7 h-7 rounded-full text-center border-2']">3</span>
            <span :class="[step === 3 ? 'text-sky-600 font-bold' : 'text-slate-500', 'text-sm text-center']">Identificação dos Recursos</span>
        </div>
        <div class="flex flex-col justify-center items-center gap-2">
            <span :class="[step === 4 ? 'bg-sky-600 text-white border-white': 'bg-slate-200 border-slate-500 text-slate-500', 'w-7 h-7 rounded-full text-center border-2']">4</span>
            <span :class="[step === 4 ? 'text-sky-600 font-bold' : 'text-slate-500', 'text-sm text-center']">Planejamento das Atividades</span>
        </div>
        <div class="flex flex-col justify-center items-center gap-2">
            <span :class="[step === 5 ? 'bg-sky-600 text-white border-white': 'bg-slate-200 border-slate-500 text-slate-500', 'w-7 h-7 rounded-full text-center border-2']">5</span>
            <span :class="[step === 5 ? 'text-sky-600 font-bold' : 'text-slate-500', 'text-sm text-center']">Identificação das Saídas (Outputs)</span>
        </div>
        <div class="flex flex-col justify-center items-center gap-2">
            <span :class="[step === 6 ? 'bg-sky-600 text-white border-white': 'bg-slate-200 border-slate-500 text-slate-500', 'w-7 h-7 rounded-full text-center border-2']">6</span>
            <span :class="[step === 6 ? 'text-sky-600 font-bold' : 'text-slate-500', 'text-sm text-center']">Implementação do Diagrama</span>
        </div>
    </div>
</template>

<script setup>

defineProps({
    step: {
        type: Number,
        default: 1 // 1-6
    }
});

</script>