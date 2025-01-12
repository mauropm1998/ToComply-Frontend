<template>
    <section class="my-5 w-[75%]">
        <h2 class="text-xl font-bold text-gray-500 leading-none">Observações</h2>
        <span class="text-gray-500 text-sm">Feedback de funcionários e outras informações relevantes para a auditoria</span>
        <form ref="formObservation" class="mt-4">
            <textarea v-model="audit.observations"
                class="block form-control w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-400/70 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100"
                placeholder="Adicionar observação..." :disabled="sendingForm" id="article" cols="10" rows="4">
            </textarea>
            <div class="flex justify-end">
                <button
                    class="flex items-center justify-center w-1/2 px-3 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 mt-4 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="font-semibold">Adicionar</span>
                </button>
            </div>

        </form>

        <div class="mb-5 mt-7">
            <AuditObservationCard :observation-data="observationOne" />
            <AuditObservationCard :observation-data="observationTwo" />
            <AuditObservationCard :observation-data="observationOne" />
        </div>
    </section>
</template>

<script setup>

import { reactive, ref } from 'vue';
import AuditObservationCard from './AuditObservationCard.vue';


const formObservation = ref(null);
const sendingForm = ref(false);


// DADOS FICTÍCIOS A SEREM SUBSTITUÍDOS
const observationOne = {
    responsable: {
        name: "Naor de Almeida",
        picture: "/src/assets/img/user.png",
    },
    date: "Há 4 dias",
}

const observationTwo = {
    responsable: {
        name: "Mauro Paulo Mateus",
        picture: "/src/assets/img/user.jpg",
    },
    date: "Há 8 minutos",
}

const audit = ref(reactive({
    auditor: null,
    description: null,
    date: null,
    object: null,
    observations: null,
    status: null,
    audit_results: null,
    audit_type: "INTERNAL_AUDIT",
    outher_audit_type: null,
    corrective_actions: null,
    evidences: null,
    more_info: null,
    action_plain: null,
    targets: null,
}));

</script>