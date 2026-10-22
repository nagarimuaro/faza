<script lang="ts">
  import { industries } from '$lib/data/site';
  import Button from './ui/Button.svelte';
  import SectionLabel from './ui/SectionLabel.svelte';

  export let onConsult: () => void;
  let selected = 'government';
  $: industry = industries[selected];
  const options = [['government', 'Pemerintahan'], ['business', 'Perusahaan'], ['umkm', 'UMKM'], ['organization', 'Organisasi']];
</script>

<section id="industri" class="section"><div class="container">
  <div class="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><SectionLabel>03 / UNTUK SIAPA SOLUSI KAMI</SectionLabel><h2 class="mt-6 text-5xl font-bold md:text-7xl">Berbeda organisasi.<br />Berbeda kebutuhan.</h2></div><div class="rounded-lg bg-carbon p-7 text-ivory md:p-10">
    <div class="flex flex-wrap gap-2" role="group" aria-label="Jenis organisasi">{#each options as option}<button aria-pressed={selected === option[0]} class:active={selected === option[0]} class="rounded border border-[#46584e] px-3 py-2 text-sm font-semibold transition hover:border-lime" on:click={() => (selected = option[0])}>{option[1]}</button>{/each}</div>
    <div class="mt-8 border-t border-line-dark pt-7" aria-live="polite"><SectionLabel tone="lime">{industry.tag}</SectionLabel><h3 class="mt-4 text-3xl font-bold md:text-4xl">{industry.title}</h3><p class="mt-4 text-muted-inverse">{industry.description}</p><p class="mt-7 text-sm font-semibold text-lime">Contoh solusi yang relevan:</p><ul class="mt-3 space-y-2 text-sm text-ivory">{#each industry.items as item}<li class="before:mr-3 before:text-lime before:content-['↗']">{item}</li>{/each}</ul><Button className="mt-8" on:click={onConsult}>Diskusikan kebutuhan ini <span class="text-xl leading-none">↗</span></Button><p class="mt-4 text-xs text-muted-inverse">Contoh kebutuhan, bukan paket tetap atau janji fitur otomatis.</p></div>
  </div></div>
</div></section>

<style>
  button.active { background: #d8ef59; border-color: #d8ef59; color: #101b1a; }
</style>
