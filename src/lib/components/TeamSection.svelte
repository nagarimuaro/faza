<script lang="ts">
  import { teamMembers } from '$lib/data/site';
  import SectionLabel from './ui/SectionLabel.svelte';
  import TeamMemberCard from './TeamMemberCard.svelte';
</script>

<section id="tim-kami" class="section"><div class="container"><SectionLabel>07 / TIM KAMI & PERUSAHAAN</SectionLabel><h2 class="mt-6 text-5xl font-bold md:text-7xl">Di balik layar, ada orang sungguhan.</h2><p class="mt-7 max-w-2xl text-lg text-muted">Tim kami menggabungkan pemahaman produk, desain, pengembangan, hardware, finance, dan social engineering untuk membantu proyek berjalan dengan jelas.</p><div class="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">{#each teamMembers as member}<TeamMemberCard {member} />{/each}</div></div></section>
