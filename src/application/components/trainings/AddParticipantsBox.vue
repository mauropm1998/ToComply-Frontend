<template>
    <div class="flex justify-end">
        <!-- Participants toggle button -->
        <input id="participants" v-model="getTotalParticipants" @click="toogleBox"
            class="block form-control cursor-pointer w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-400/70 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100"
            type="text" placeholder="Clique para adicionar" required readonly />

        <!-- Participants content -->
        <Transition name="box" mode="in-out">
            <form ref="formParticipants" v-show="openBox" @submit.prevent="processing" novalidate
                class="box absolute top-[3rem] left-0 w-[350px] py-2 px-3 mt-2 z-30 bg-white rounded-md shadow-2xl border-2 border-solid border-gray-200 dark:bg-gray-800 needs-validation">
               
                <input v-model="participantsData.name"
                    class="block box form-control w-full px-4 py-2 my-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-400/70 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100"
                    type="text" placeholder="Nome do Participante *" required />

                <input v-model="participantsData.email"
                    class="block box form-control w-full px-4 py-2 my-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-400/50 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100"
                    type="text" placeholder="E-mail do Participante *" required />

                <div class="flex items-center mt-3 mb-1 w-full pe-2 gap-x-3">
                    <button
                        class="box flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                        <span class="font-semibold">Adicionar</span>
                    </button>
                    <button type="button" @click="toogleBox"
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-gray-200 rounded-lg shrink-0 gap-x-2 hover:bg-gray-300">
                        <span class="font-semibold">Fechar</span>
                    </button>
                </div>
            </form>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits("send-participants-data");

const openBox = ref(false);
const countParticipants = ref(0);
const formParticipants = ref("");
const getTotalParticipants = ref(null);

const participantsData = ref({
    name: null,
    email: null,
});

const toogleBox = () => {
    openBox.value = !openBox.value;
    formParticipants.value.classList.remove("was-validated");
};

const processing = () => {
    if (formParticipants.value.checkValidity() === true) {
        formParticipants.value.classList.remove("was-validated");
        emit('send-participants-data', participantsData.value);

        countParticipants.value++;

        getTotalParticipants.value = countParticipants.value === 1 ? `${countParticipants.value} Participante Adicionado` : `${countParticipants.value} Participantes Adicionados`;

        toogleBox();

    } else {
        formParticipants.value.classList.add("was-validated");
    }
}

</script>

<style scoped>
.box-enter-active {
    transition: all .3s ease;
}

.box-leave-active {
    transition: all .2s ease;
}

.box-enter-from {
    opacity: 0;
    transform: translateY(20%);
}

.box-leave-to {
    opacity: 0;
}
</style>