<template>
    <section>
        <div class="flex gap-x-5">
            <div class="w-[70%] bg-white py-6 px-4 rounded-lg">
                <div class="intro">
                    <div class="flex items-center justify-between">
                        <h2 class="font-semibold text-xl text-gray-600">Curso de Conformidade Regulatória
                        </h2>
                        <button type="button" @click="closeModalAlertNewTraining" class="btn-light">
                            <i class="bi bi-pencil"></i>
                            <span class="sr-only">Editar</span>
                        </button>
                    </div>

                    <div class="inline-flex items-center px-3 py-1 mt-2 rounded-xl text-blue-500 bg-blue-100/60">
                        <span class="text-sm font-normal">Categoria</span>
                    </div>
                    <p class="text-gray-500 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam et nihil hic
                        consequuntur
                        reprehenderit non repellendus dignissimos asperiores quis recusandae, ratione
                        accusantium nulla
                        labore?
                        In unde expedita maxime voluptate?
                    </p>
                </div>

                <div class="grid grid-cols-4 gap-x-4 my-5">
                    <div class="flex gap-x-3">
                        <div class="rounded-md py-2 px-3 bg-blue-50">
                            <i class="bi bi-calendar-week text-blue-600 text-[1.3rem]"></i>
                        </div>
                        <div>
                            <span class="text-sm font-medium text-gray-600">Data</span>
                            <p class="text-gray-500 leading-tight">12 Mai 2024</p>
                        </div>
                    </div>

                    <div class="flex gap-x-3">
                        <div class="rounded-md py-2 px-3 bg-blue-50">
                            <i class="bi bi-clock-history text-blue-600 text-[1.3rem]"></i>
                        </div>
                        <div>
                            <span class="text-sm font-medium text-gray-600">Duração</span>
                            <p class="text-gray-500 leading-tight">36 Horas</p>
                        </div>
                    </div>

                    <div class="flex gap-x-3">
                        <div class="rounded-md py-2 px-3 bg-blue-50">
                            <i class="bi bi-person-video3 text-blue-600 text-[1.3rem]"></i>
                        </div>
                        <div>
                            <span class="text-sm font-medium text-gray-600">Tipo de Treinamento</span>
                            <p class="text-gray-500 leading-tight">Online</p>
                        </div>
                    </div>

                    <div class="flex gap-x-3">
                        <div class="rounded-md py-2 px-3 bg-blue-50">
                            <i class="bi bi-people text-blue-600 text-[1.3rem]"></i>
                        </div>
                        <div>
                            <span class="text-sm font-medium text-gray-600">Participantes</span>
                            <p class="text-gray-500 leading-tight">20 inscritos</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-[30%] bg-white pb-8 pt-3 px-2 rounded-lg flex items-center flex-col">
                <div class="relative ms-auto">
                    <BaseDropdownOptions :options="['ADD_INSTRUCTOR', 'REMOVE_INSTRUCTOR', 'CHANGE_INSTRUCTOR']"
                        @add-instructor="showDialogDelete(1)" @remove="showDialogDelete(1)" @change="showDialogDelete(1)" />
                </div>

                <img class="object-cover w-24 h-24 rounded-full" src="/src/assets/img/user.jpg"
                    alt="Identidade Visual do instrutor">
                <div class="text-center mt-2">
                    <h2 class="font-medium text-gray-800 text-xl">Arthur Melo</h2>
                    <p class="text-sm font-normal mb-1 text-gray-600">Instrutor
                    </p>
                    <div class="outher-info mt-3">
                        <ul>
                            <li class="flex gap-x-3">
                                <p class="font-semibold text-gray-600">E-mail:</p>
                                <p class="text-gray-500">instrutor@formacao.info</p>
                            </li>
                            <li class="flex gap-x-3">
                                <p class="font-semibold text-gray-600">Telefone:</p>
                                <p class="text-gray-500">244 912 345 678</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-5 mt-7">
            <div class="bg-white p-4 rounded-lg">
                <div class="flex justify-between">
                    <h2 class="font-bold text-xl text-gray-600 mb-2">Conteúdo do Treinamento</h2>
                    <span class="text-gray-600 ">0% Concluído</span>
                </div>
                <ul class="mb-4">
                    <li class="border-b py-1 text-gray-500 flex justify-between items-center">
                        <label class="flex items-center gap-x-2">
                            <input @change="onChangeSelectedAllTrainings" v-model="selected_all_trainings" type="checkbox"
                                class="text-blue-500 w-4 h-4 border-blue-300 rounded-lg dark:bg-blue-900 dark:ring-offset-blue-900 dark:border-blue-700">
                            <p>Material de Início ao Curso</p>
                        </label>
                        <div class="options flex gap-x-3">
                            <button class="btn-light text-[1rem]"><i class="bi bi-pencil"></i></button>
                            <button class="btn-danger text-[1rem]"><i class="bi bi-trash3"></i></button>
                        </div>
                    </li>
                    <li class="border-b py-1 text-gray-500 flex justify-between items-center">
                        <label class="flex items-center gap-x-2">
                            <input @change="onChangeSelectedAllTrainings" v-model="selected_all_trainings" type="checkbox"
                                class="text-blue-500 w-4 h-4 border-blue-300 rounded-lg dark:bg-blue-900 dark:ring-offset-blue-900 dark:border-blue-700">
                            <p>Lista de Assuntos a serem aprendidos</p>
                        </label>
                        <div class="options flex gap-x-3">
                            <button class="btn-light text-[1rem]"><i class="bi bi-pencil"></i></button>
                            <button class="btn-danger text-[1rem]"><i class="bi bi-trash3"></i></button>
                        </div>
                    </li>
                    <li class="border-b py-1 text-gray-500 flex justify-between items-center">
                        <label class="flex items-center gap-x-2">
                            <input @change="onChangeSelectedAllTrainings" v-model="selected_all_trainings" type="checkbox"
                                class="text-blue-500 w-4 h-4 border-blue-300 rounded-lg dark:bg-blue-900 dark:ring-offset-blue-900 dark:border-blue-700">
                            <p>Alguma coisa que aprenderemos</p>
                        </label>
                        <div class="options flex gap-x-3">
                            <button class="btn-light text-[1rem]"><i class="bi bi-pencil"></i></button>
                            <button class="btn-danger text-[1rem]"><i class="bi bi-trash3"></i></button>
                        </div>
                    </li>
                    <li class="border-b py-1 text-gray-500 flex justify-between items-center">
                        <label class="flex items-center gap-x-2">
                            <input @change="onChangeSelectedAllTrainings" v-model="selected_all_trainings" type="checkbox"
                                class="text-blue-500 w-4 h-4 border-blue-300 rounded-lg dark:bg-blue-900 dark:ring-offset-blue-900 dark:border-blue-700">
                            <p>Material de Início ao Curso</p>
                        </label>
                        <div class="options flex gap-x-3">
                            <button class="btn-light text-[1rem]"><i class="bi bi-pencil"></i></button>
                            <button class="btn-danger text-[1rem]"><i class="bi bi-trash3"></i></button>
                        </div>
                    </li>
                </ul>
                <div>
                    <button class="btn-outline-primary" @click="toggleDropdown">
                        <i class="bi bi-plus-lg"></i> Adicionar Mais
                    </button>
                </div>
            </div>

            <div class="bg-white p-4 rounded-lg">
                <h2 class="font-bold text-xl text-gray-600 mb-2">Acompanhamento de Conscientização</h2>
                <div class="flex items-center gap-x-4 my-1">
                    <div class="inline-flex items-center px-3 py-1 rounded-xl text-blue-500 bg-blue-100/60">
                        <span class="text-sm font-normal">Categoria</span>
                    </div>
                    <div class="text-gray-500 text-sm"><i class="bi bi-calendar-week"></i> 17 Mai 2024</div>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-700 mb-1">Conteúdo do Treinamento</h3>
                    <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil
                        cumque fugiat ipsa incidunt provident quasi ad reiciendis id iure ullam veritatis
                        dolorum qui architecto nisi, odio illum unde saepe.</p>
                    <div class="flex items-center gap-x-3">
                        <img src="/src/assets/img/user.jpg"
                            class="w-10 h-10 border-2 border-solid border-blue-100 rounded-full object-cover"
                            alt="Identidade Visual">
                        <div>
                            <h3 class="font-medium text-gray-600 leading-none">Naor de Almeida</h3>
                            <span class="text-sm text-blue-600">Adminstrador</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5 mb-12">
            <h3 class="font-bold text-xl text-gray-600 mb-2">Material de Apoio</h3>

            <div class="flex items-center justify-between rounded-lg p-3 border bg-gray-50 border-gray-200 mt-4">
                <div class="flex items-center gap-x-3">
                    <i class="bi bi-file-earmark-pdf-fill text-[1.9rem] text-red-600"></i>
                    <div>
                        <p class="text-gray-500 text-lg font-medium">
                            Documento_de_verificacao.pdf
                        </p>
                        <div class="text-gray-600">
                            234.7KB | <span class="text-blue-600 font-medium">Mauro Mateus</span> | 22 Abr 2024
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <BaseDropdownOptions :options="['DELETE', 'DOWNLOAD']" @download="showDialogUpdateDocumentation(1)"
                        @delete="showDialogDelete(1)" />
                </div>

            </div>
        </div>
    </section>
</template>


<script setup>
import BaseDropdownOptions from "@/components/BaseDropdownOptions.vue";


</script>