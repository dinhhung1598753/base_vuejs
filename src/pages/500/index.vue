<script setup>
import Layout from '@/layout/index.vue';
import { useI18n } from 'vue-i18n-lite';

const { t } = useI18n();
</script>

<template>
  <Layout>
    <h1>{{ t('common.500Page.text') }}</h1>
  </Layout>
</template>

<style lang="scss" scoped>
@import '@/scss/pages/500';
</style>
