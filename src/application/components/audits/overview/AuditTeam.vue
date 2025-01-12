<template>
    <section class="my-5">
        <h2 class="text-lg font-semibold text-gray-600">Equipa de Auditores</h2>
        <hr class="border-slate-300 my-3" />
        <div class="bg-white rounded-lg p-4">
            <div class="bg-slate-100 rounded-lg p-4 flex justify-between items-center">
                <div class="flex gap-x-4 items-center">
                    <img src="/src/assets/img/user.jpg" alt="Identidade Visual"
                        class="object-cover w-10 h-10 rounded-full dark:border-gray-700 shrink-0">
                    <div>
                        <h2 class="font-medium text-gray-800 dark:text-white">Naor de Almeida</h2>
                        <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                            Auditor Sénior - Responsável</p>
                    </div>
                </div>
                <div class="flex gap-x-3">
                    <div class="flex flex-col justify-center">
                        <span class="font-semibold text-gray-600 text-2xl leading-none">14</span>
                        <span class="font-semibold text-gray-600 text-sm">Membros</span>
                    </div>
                    <button
                        class="bg-gray-100 text-gray-500 w-1/2 px-4 py-2 text-sm tracking-wide transition-colors duration-200 rounded-md shrink-0 sm:w-auto hover:bg-gray-200"
                        @click="$emit('open_update_dialog')">
                        <i class="bi bi-pencil"></i>
                        <span class="sr-only">Atualizar</span>
                    </button>
                </div>
            </div>

            <div class="flex gap-x-5 mt-6">
                <button class="rounded-lg border bg-blue-500 text-center px-4 py-6 w-[150px]">
                    <img src="/src/assets/img/user2.jpg" alt="Identidade Visual"
                        class="object-cover w-14 h-14 rounded-full mx-auto dark:border-gray-700 shrink-0">
                    <div>
                        <h2 class="font-semibold text-white dark:text-white mt-2 team-long-text">Jezael Guilherme</h2>
                        <small class="team-long-text text-white dark:text-gray-400">
                            Auditor Sénior </small>
                    </div>
                </button>
                <button class="rounded-lg border bg-gray-50 text-center px-4 py-6 w-[150px]">
                    <img src="/src/assets/img/user.png" alt="Identidade Visual"
                        class="object-cover w-14 h-14 rounded-full mx-auto dark:border-gray-700 shrink-0">
                    <div>
                        <h2 class="font-semibold text-gray-800 dark:text-white mt-2 team-long-text">Mauro Paulo</h2>
                        <small class="team-long-text text-gray-500 dark:text-gray-400">
                            Auditor Sénior </small>
                    </div>
                </button>
                <button class="rounded-lg border bg-gray-50 text-center px-4 py-6 w-[150px]">
                    <img src="/src/assets/img/user.jpg" alt="Identidade Visual"
                        class="object-cover w-14 h-14 rounded-full mx-auto dark:border-gray-700 shrink-0">
                    <div>
                        <h2 class="font-semibold text-gray-800 dark:text-white mt-2 team-long-text">Naor António</h2>
                        <small class="team-long-text text-gray-500 dark:text-gray-400">
                            Gerente de Projectos </small>
                    </div>
                </button>
                <button class="rounded-lg border bg-gray-50 text-center px-4 py-6 w-[150px]">
                    <img src="/src/assets/img/user2.jpg" alt="Identidade Visual"
                        class="object-cover w-14 h-14 rounded-full mx-auto dark:border-gray-700 shrink-0">
                    <div>
                        <h2 class="font-semibold text-gray-800 dark:text-white mt-2 team-long-text">Líria Lito</h2>
                        <small class="team-long-text text-gray-500 dark:text-gray-400">
                            Auditora de DTI </small>
                    </div>
                </button>
                <button class="rounded-lg border bg-gray-50 text-center px-4 py-6 w-[150px]">
                    <img src="/src/assets/img/user.png" alt="Identidade Visual"
                        class="object-cover w-14 h-14 rounded-full mx-auto dark:border-gray-700 shrink-0">
                    <div>
                        <h2 class="font-semibold text-gray-800 dark:text-white mt-2 team-long-text">Érica Vanusa</h2>
                        <small class="team-long-text text-gray-500 dark:text-gray-400">
                            Auditora Sénior </small>
                    </div>
                </button>
            </div>

            <div class="grid grid-cols-3 justify-between rounded-lg border border-gray-300 px-5 py-3 mt-6">
                <div>
                    <h2 class="font-semibold text-gray-800 dark:text-white mt-2">Jezael Guilherme</h2>
                    <p class="text-gray-600 text-sm mb-1 dark:text-gray-400">
                        Administrador | Auditor Sénior </p>
                    <p class="text-gray-600 text-sm mb-1">Adicionado em 03 Abr 2024</p>
                </div>
                <div>
                    <h2 class="font-semibold text-gray-800 dark:text-white mt-2">Actividades</h2>
                    <p class="text-gray-600 text-sm mb-1">4 Observações</p>
                    <p class="text-gray-600 text-sm mb-1">8 Evidências anexadas</p>
                    <p class="text-gray-600 text-sm mb-1">12 Correções feitas</p>
                </div>
                <div>
                    <h2 class="font-semibold text-gray-800 dark:text-white mt-2">12 Responsabilidades Atribuídas</h2>
                    <p class="text-gray-600 text-sm mb-1 flex items-center gap-x-2"><span class="inline-block w-2 h-2 rounded-full bg-green-400"></span> 4 Concluídas</p>
                    <p class="text-gray-600 text-sm mb-1 flex items-center gap-x-2"><span class="inline-block w-2 h-2 rounded-full bg-orange-400"></span> 8 Por concluir</p>
                    <p class="text-gray-600 text-sm mb-1">Concluir até 20 Abr 2024 (15 dias restantes)</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.team-long-text {
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>