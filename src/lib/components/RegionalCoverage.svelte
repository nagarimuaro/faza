<script lang="ts">
  import { westSumatraAreas } from '$lib/data/site';
  import SectionLabel from './ui/SectionLabel.svelte';
</script>

<section id="wilayah-layanan" class="border-t border-line bg-paper py-16">
  <div class="container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
    <div>
      <SectionLabel>WILAYAH LAYANAN / SUMATERA BARAT</SectionLabel>
      <h2 class="mt-5 text-4xl font-bold md:text-5xl">Software house untuk Sumatera dan Indonesia.</h2>
      <p class="mt-5 max-w-lg text-muted">FAZALABS melayani konsultasi website, aplikasi, cloud, AI, dan digitalisasi dari Sijunjung untuk bisnis, pemerintahan, lembaga, dan organisasi di Sumatera Barat.</p>
    </div>
    <div class="grid gap-8 text-sm md:grid-cols-2">
      <div><h3 class="font-display text-xl font-bold">Kabupaten di Sumatera Barat</h3><div class="mt-4 flex flex-wrap gap-2">{#each westSumatraAreas.regencies as area}<span class="rounded border border-line px-3 py-2 text-muted">{area}</span>{/each}</div></div>
      <div><h3 class="font-display text-xl font-bold">Kota di Sumatera Barat</h3><div class="mt-4 flex flex-wrap gap-2">{#each westSumatraAreas.cities as area}<span class="rounded border border-line px-3 py-2 text-muted">{area}</span>{/each}</div></div>
    </div>
  </div>
</section>
