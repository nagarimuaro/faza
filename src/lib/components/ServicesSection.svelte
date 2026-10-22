<script lang="ts">
  import { services } from '$lib/data/site';
  import SectionLabel from './ui/SectionLabel.svelte';
</script>

<section id="layanan" class="section bg-paper"><div class="container">
  <div class="mb-12"><SectionLabel>02 / LAYANAN TEKNOLOGI FAZALABS</SectionLabel><div class="mt-6 grid gap-8 lg:grid-cols-[1.22fr_.78fr] lg:items-end"><h2 class="text-5xl font-bold md:text-7xl">Satu tim untuk berbagai kebutuhan digital.</h2><p class="max-w-lg text-lg text-muted">Kami menawarkan pengembangan sesuai ruang lingkup proyek. Anda bisa memulai dari website, sistem internal, mobile, infrastruktur, atau kebutuhan integrasi yang lebih kompleks.</p></div></div>
  <div class="border-t border-line">{#each services as service}<article class="grid gap-4 border-b border-line py-6 md:grid-cols-[100px_minmax(260px,.9fr)_1fr] md:gap-7"><span class="text-lg font-semibold text-muted">{service[0]}</span><h3 class="text-2xl font-bold">{service[1]}</h3><p class="text-muted">{service[2]}</p></article>{/each}</div>
</div></section>
