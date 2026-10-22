<script lang="ts">
  import { companyFocus } from '$lib/data/site';
  import SectionLabel from './ui/SectionLabel.svelte';
  let selected = companyFocus[0];
</script>

<section id="perusahaan" class="section">
  <div class="container grid gap-14 lg:grid-cols-[1.1fr_.9fr]">
    <div>
      <SectionLabel>01 / PROFIL PERUSAHAAN</SectionLabel>
      <h2 class="mt-6 max-w-3xl text-5xl font-bold md:text-7xl">FAZALABS membantu menerjemahkan kebutuhan menjadi sistem.</h2>
      <p class="mt-8 max-w-2xl text-lg text-muted">PT FAZALABS Solusi Teknologi adalah software house yang mengembangkan produk digital dan solusi teknologi untuk organisasi yang ingin bekerja lebih tertata.</p>
      <a class="inline-arrow mt-8" href="#layanan">Lihat kemampuan pengembangan <span>↗</span></a>
    </div>
    <div class="border-t border-line pt-6">
      <SectionLabel tone="light">MENGENAL CARA KAMI BERPIKIR</SectionLabel>
      <div class="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Profil dan pendekatan FAZALABS">
        {#each companyFocus as item}
          <button role="tab" aria-selected={selected.id === item.id} class:active={selected.id === item.id} class="rounded border border-line px-3 py-2 text-sm font-semibold transition hover:border-carbon" on:click={() => (selected = item)}>{item.label}</button>
        {/each}
      </div>
      <div class="mt-7 border-t border-line pt-7" aria-live="polite">
        <SectionLabel>{selected.number}</SectionLabel>
        <h3 class="mt-4 text-3xl font-bold md:text-4xl">{selected.title}</h3>
        <p class="mt-5 text-muted">{selected.copy}</p>
      </div>
      <p class="mt-10 text-xs leading-relaxed text-muted">Narasi nilai perusahaan ini merupakan rancangan konten, bukan pernyataan visi–misi formal yang sudah disahkan.</p>
    </div>
  </div>
</section>

<style>
  section { background: #fbfaf5; }
  button.active { background: #101b1a; color: #f4f1e8; border-color: #101b1a; }
</style>
