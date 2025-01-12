<template>
    <form ref="formAudit" @submit.prevent="processing" class="overflow-hidden">

        <h2 class="form-title">Informações Gerais</h2>
        <div>
            <div class="flex gap-x-5 mb-4">
                <div class="w-1/2">
                    <label for="auditor" class="font-semibold text-gray-500">Auditor *</label>
                    <input v-model="audit.auditor" id="auditor" class="form-input py-2" type="text"
                        placeholder="Responsável pela auditoria" required :disabled="sendingForm" />
                </div>
                <div class="w-1/2">
                    <label for="audit_type" class="font-semibold text-gray-500">Tipo de Auditoria *</label>
                    <select v-model="audit.audit_type" :disabled="sendingForm" id="audit_type" class="form-select">
                        <option value="INTERNAL_AUDIT">Auditoria Interna</option>
                        <option value="EXTERNAL_AUDIT">Auditoria Externa</option>
                        <option value="COMFORMITY_AUDIT">Auditoria de Conformidade</option>
                        <option value="SECURITY_AUDIT">Auditoria de Segurança</option>
                        <option value="OUTHER">Outra</option>
                    </select>
                    <input v-model="audit.outher_audit_type" id="audit_type" v-if="audit.audit_type === 'OUTHER'"
                        class="form-input py-2" type="text" placeholder="Escrever o tipo da auditoria..." required
                        :disabled="sendingForm" />
                </div>
            </div>
            <div class="flex gap-x-5 mb-4">
                <div class="w-1/2">
                    <label for="object" class="font-semibold text-gray-500">Objeto da Auditoria *</label>
                    <input v-model="audit.object" id="object" class="form-input py-2" type="text" required
                        :disabled="sendingForm" placeholder="Indique o que está a ser auditado" />
                </div>
                <div class="w-1/2">
                    <label for="date" class="font-semibold text-gray-500"> Data de Resolução *</label>
                    <input v-model="audit.date" id="date" class="form-input py-[7px]" type="date" required
                        :disabled="sendingForm" />
                </div>
            </div>
            <div class="flex gap-x-5 mb-6">
                <div class="w-1/2">
                    <label for="description" class="font-semibold text-gray-500">Descrição</label>
                    <textarea id="description" cols="4" rows="4" v-model="audit.description" class="form-input py-2"
                        placeholder="Descreva a auditoria..." :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label class="font-semibold text-gray-500 mb-3">Evidências</label>
                    <label for="dropzone-file"
                        class="flex flex-col items-center w-full p-4 mx-auto mt-2 text-center bg-white border-2 border-gray-400 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                        <h3 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Carregar Ficheiro
                        </h3>
                        <p class="mt-1 text-xs tracking-wide text-gray-500 dark:text-gray-400">Escolha um Ficheiro ou
                            arraste e solte aqui.</p>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
            </div>
            <div class="flex gap-x-5 mb-6">
                <div class="w-1/2">
                    <label for="more_info" class="font-semibold text-gray-500">Observações Adicionais</label>
                    <textarea id="more_info" cols="4" rows="4" v-model="audit.more_info" class="form-input py-2"
                        placeholder="Comentários pertinentes relacionados à auditoria"
                        :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="more_info" class="font-semibold text-gray-500">Ações Corretivas</label>
                    <textarea id="more_info" cols="4" rows="4" v-model="audit.more_info" class="form-input py-2"
                        placeholder="Ações corretivas tomadas para resolver os problemas"
                        :disabled="sendingForm"></textarea>
                </div>
            </div>
        </div>


        <h2 class="form-title">Outras Informações</h2>
        <div class="mb-5">
            <label for="action_plain" class="font-semibold text-gray-500">Plano de Ação</label>
            <textarea id="action_plain" cols="4" rows="4" v-model="audit.action_plain" class="form-input py-2"
                placeholder="Descreva seu plano de ação para implementar na auditoria"
                :disabled="sendingForm"></textarea>
        </div>
        <div class="mb-5">
            <label for="targets" class="font-semibold text-gray-500 mb-2 block">Metas a atingir</label>
            <div class="flex gap-x-2">
                <input v-model="getTarget" id="targets"
                    class="form-input m-0 py-2"
                    type="text" placeholder="Metas para melhor realizar o plano de ação." required
                    :disabled="sendingForm" />
                <button type="button" @click="addAuditActionTarget(getTarget)"
                    class="btn-light mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="whitespace-nowrap">Adicionar Meta</span>
                </button>
            </div>
            <div v-if="allActionTagets !== ''" class="mt-5 bg-blue-50 px-3 rounded-md">

                <div v-for="(target, index) in allActionTagets" :key="index"
                    class="flex items-center gap-x-3 border-b py-2 text-sm">
                    <button type="button" @click="RemoveAuditActionTarget(index)"
                        class="transition-colors duration-200 text-red-500 hover:text-red-600">
                        <i class="bi bi-trash3 text-[1.1rem]"></i>
                        <span class="sr-only">Remover Meta</span>
                    </button>
                    <span class="text-gray-600">{{ target }}</span>
                </div>
            </div>

        </div>
    </form>
</template>

<script setup>

import { onMounted, reactive, ref } from 'vue';
// import axios from 'axios';
// import mitt from 'mitt';

// axios.defaults.withCredentials = true;
// const emitter = mitt();


const emit = defineEmits(
    [
        "processing",
        "success",
        "error",
    ]
);

const formAudit = ref(null);
const sendingForm = ref(false);
const allActionTagets = ref([]);
const getTarget = ref("");

const audit = ref(reactive({
    auditor: null,
    description: null,
    date: null,
    object: null,
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


const resetForm = () => {
    formAudit.value.classList.remove("was-validated");
    formAudit.value.reset();

    audit.value = {
        auditor: null,
        description: null,
        date: null,
        object: null,
        status: null,
        audit_results: null,
        audit_type: "INTERNAL_AUDIT",
        outher_audit_type: null,
        corrective_actions: null,
        evidences: null,
        more_info: null,
    };
}

const addAuditActionTarget = (target) => {
    if (target !== "") {
        allActionTagets.value.push(target);
        getTarget.value = "";
    }
};

const RemoveAuditActionTarget = (index) => {
    let newTargetsList = [];
    if (index !== null && index !== undefined) {

        allActionTagets.value.map((target, position) => {
            if (position !== index) {
                newTargetsList.push(target);
            }
        });

        allActionTagets.value = newTargetsList;
    }
};

const processing = () => {
    sendingForm.value = true;
    if (formAudit.value.checkValidity() === true) {
        formAudit.value.classList.remove("was-validated");
        emit("processing");

        axiosSaveAudit();
    }
    else {
        formAudit.value.classList.add("was-validated");
    }
};

const axiosSaveAudit = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(audit.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    // axios.post(`/api/audits/save`, jsonObject, config)
    //     .then((response) => {
    //         sendingForm.value = false;
    //         if (response.data === "OK") {
    //             resetForm();
    //             emit("success");
    //         }
    //         else {
    //             emit("error");
    //         }
    //     })
    //     .catch((error) => {
    //         sendingForm.value = false;
    //         emit("error");
    //     }); 

};

onMounted(() => {

});

</script>