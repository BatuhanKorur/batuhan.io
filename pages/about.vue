<script setup lang="ts">
</script>

<template>
  <AppLayout>
    <div>
      <Label class="pt-10">About Me</Label>
      <div class="space-y-3">
        <p class="text-sm text-pretty">
          {{ $t('about.1') }}
        </p>
        <p class="text-sm text-pretty">
          {{ $t('about.2') }}
        </p>
        <p class="text-sm text-pretty">
          {{ $t('about.3') }}
        </p>
      </div>
    </div>
    <div>
      <Label class="pt-10">Work Experience</Label>
      <WorkExperienceCard company="Brickhunter" job="Full-stack Developer" date="2022-2024">
        Developed a completely new UI for the brickhunter customer facing e-commerce platform, and business management
        CRM.
        <ul>
          <li>Redesigned UI/UX for a more modern and effective look.</li>
          <li>Created new features and modules using Laravel, Livewire and Vue.</li>
          <li>Implemented full website control for the business managers with Storybook.</li>
          <li>
            Improved the business management CRM front-end experience and effeciency working with MySQL databases and
            various external API tools.
          </li>
        </ul>
      </WorkExperienceCard>
    </div>
  </AppLayout>
</template>

<style scoped>

</style>
