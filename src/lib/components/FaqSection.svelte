<script lang="ts">
  import { faqs } from '$lib/data/site';
  import Accordion from './ui/Accordion.svelte';
  import SectionLabel from './ui/SectionLabel.svelte';
</script>

<section id="faq" class="section"><div class="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionLabel>08 / PERTANYAAN YANG SERING MUNCUL</SectionLabel><h2 class="mt-6 text-5xl font-bold md:text-6xl">Sebelum mulai proyek.</h2><p class="mt-6 max-w-md text-muted">Informasi awal untuk membantu Anda menyiapkan diskusi. Detail komersial dan teknis akan disepakati sesuai proyek.</p></div><Accordion items={faqs} /></div></section>
