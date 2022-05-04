<script setup>
import Layout from '@/layout/index.vue';
import { notify } from '@kyvg/vue3-notification';
import { useI18n } from 'vue-i18n-lite';
import { notifyTypes } from '@/utils/constants';

const { t } = useI18n();

const handleClick = () => {
  notify({
    type: notifyTypes.SUCCESS,
    title: 'Helle my notify',
    text: 'vue 3 notifications',
  });
};
</script>

<template>
  <Layout>
    <h1>{{ t('home.title') }}</h1>
    <button @click="handleClick">click me</button>
  </Layout>
</template>

<style lang="scss" scoped>
@import '@/scss/pages/home';
</style>
