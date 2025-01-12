<template>
    <div class="w-[500px] card">
        <div class="flex justify-between items-center">
            <h2 class="text-gray-600 mb-3 font-semibold text-xl">Informações Pessoais</h2>

            <div class="relative">
                <BaseDropdownOptions :options="['DELETE', 'PREVIEW']" @preview="showDialogPreviewNorm(1)"
                    @delete="showDialogDelete(1)" />
            </div>
        </div>

        <div class="flex flex-col items-center pb-10">
            <div class="relative mb-4">
                <img class="w-28 h-28 shadow-md mt-5 rounded-full" src="/src/assets/img/user.jpg"
                    alt="Identidade Visual do Usuário" />
                <button @click="open_modal_update_picture = true"
                    class="absolute bottom-0 right-0 w-10 h-10 bg-blue-500 border-2 border-white text-white rounded-full hover:bg-blue-700 duration-200 transition-colors"
                    data-tippy-content="Alterar Identidade" data-tippy-placement="bottom">
                    <i class="bi bi-camera-fill text-[1.3rem]"></i>
                </button>
            </div>

            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Naor de Almeida</h5>
            <span class="text-sm text-blue-500 font-semibold">Administrador</span>

            <ul class="space-y-3 w-full my-4">
                <li class="flex items-center justify-between">
                    <span class="text-gray-600 font-semibold">Telefone</span>
                    <span class="text-gray-600">+244 912 345 678</span>
                </li>
                <li class="flex items-center justify-between">
                    <span class="text-gray-600 font-semibold">E-mail</span>
                    <span class="text-gray-600">email@mail.com</span>
                </li>
                <li class="flex items-center justify-between">
                    <span class="text-gray-600 font-semibold">Cargo / Função</span>
                    <span class="text-gray-600">Diretor Geral</span>
                </li>
            </ul>

            <div class="grid grid-cols-2 gap-4 w-full mb-3 mt-5">
                <div class="flex flex-col items-center">
                    <div class="rounded-full h-12 w-12 bg-orange-100/80 leading-12">
                        <i class="block bi bi-person-check text-orange-400 text-[1.9rem] text-center"></i>
                    </div>
                    <span class="text-xl font-bold text-gray-700 mt-2">231</span>
                    <span class="text-gray-600">Responsabilidades</span>
                </div>
                <div class="flex flex-col items-center">
                    <div class="rounded-full h-12 w-12 bg-emerald-100/80 leading-12">
                        <i class="block bi bi-clipboard-check text-emerald-400 text-[1.9rem] text-center"></i>
                    </div>
                    <span class="text-xl font-bold text-gray-700 mt-2">231</span>
                    <span class="text-gray-600">Auditorias Agendadas</span>
                </div>
                <div class="flex flex-col items-center">
                    <div class="rounded-full h-12 w-12 bg-blue-100/80 leading-12">
                        <i class="block bi bi-list-task text-blue-400 text-[1.9rem] text-center"></i>
                    </div>
                    <span class="text-xl font-bold text-gray-700 mt-2">435</span>
                    <span class="text-gray-600">Tarefas Concluídas</span>
                </div>
                <div class="flex flex-col items-center">
                    <div class="rounded-full h-12 w-12 bg-purple-100/80 leading-12">
                        <i class="block bi bi-mortarboard text-purple-400 text-[1.9rem] text-center"></i>
                    </div>
                    <span class="text-xl font-bold text-gray-700 mt-2">435</span>
                    <span class="text-gray-600 text-center">Treinamentos Concluídos</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>