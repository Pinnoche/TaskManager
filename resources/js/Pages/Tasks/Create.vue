<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { onMounted, defineProps, computed } from 'vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

const props = defineProps({
    pageName: {
        type: String,
        default: ''
    }
});

const form = useForm({
    author: '',
    title: '',
    description: ''
});

const submit = () => {
    form.post(route('tasks.store'));
};

</script>

<template>
    <Head :title="pageName" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ pageName }}</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <form class="bg-white overflow-hidden shadow-sm sm:rounded-lg sm:px-6 sm:py-2 lg:px-8 lg:py-3 mb-2" @submit.prevent="submit">
                   
                <div>
                    <InputLabel for="author" value="Author:" />

                    <TextInput
                        id="author"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.author"
                        required
                    />

                    <InputError class="mt-2" :message="form.errors.author" />
                </div>

                <div class="mt-4">
                    <InputLabel for="title" value="Title:" />

                    <TextInput
                        id="title"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.title"
                        required
                    />

                    <InputError class="mt-2" :message="form.errors.title" />
                </div>

                <div class="mt-4">
                    <InputLabel for="description" value="Desciprtion" />

                    <TextInput
                        id="description"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.description"
                        required
                    />

                    <InputError class="mt-2" :message="form.errors.description" />
                </div>

                

                <div class="flex items-center justify-end mt-4">
                    <PrimaryButton class="ms-4 bg-blue-500" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Submit
                    </PrimaryButton>
                </div>

        </form>
            </div>

            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Link :href="route('tasks.index')">
                    <button class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">View your Tasks</button>
                </Link>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
