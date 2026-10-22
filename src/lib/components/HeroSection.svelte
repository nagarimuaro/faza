<script lang="ts">
  import { scenarios } from '$lib/data/site';
  import Button from './ui/Button.svelte';
  import SectionLabel from './ui/SectionLabel.svelte';

  export let onConsult: () => void;
  let selected = 'government';
  $: scenario = scenarios[selected];
</script>

<section id="beranda" class="py-24 md:py-28">
  <div class="container grid items-start gap-14 lg:grid-cols-[.94fr_1.06fr]">
    <div class="pt-3">
      <SectionLabel>PT FAZALABS SOLUSI TEKNOLOGI / SOFTWARE HOUSE</SectionLabel>
      <h1 class="mt-7 max-w-[640px] text-[clamp(3.6rem,7vw,6.9rem)] font-extrabold">Website, aplikasi, cloud, dan AI <span class="text-muted">untuk Anda.</span></h1>
      <div class="my-8 h-1.5 w-[92px] bg-carbon"></div>
      <p class="max-w-xl text-lg text-muted">Kami membantu perusahaan, pelaku usaha, lembaga, dan pemerintah membangun sistem digital sesuai alur kerja—dari ide awal hingga implementasi dan pengembangan.</p>
      <div class="mt-8 flex flex-wrap items-center gap-7">
        <Button on:click={onConsult}>Ceritakan proyek Anda <span class="text-xl leading-none">↗</span></Button>
        <a class="inline-arrow" href="#layanan">Lihat seluruh layanan <span>↗</span></a>
      </div>
      <p class="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.11em] text-muted">SIJUNJUNG, SUMATERA BARAT / KONSULTASI PROYEK DI SELURUH INDONESIA</p>
    </div>

    <div class="overflow-hidden rounded-[10px] bg-carbon p-7 text-ivory shadow-panel md:p-8">
      <div class="flex items-center justify-between gap-3 border-b border-line-dark pb-5">
        <SectionLabel tone="lime">FAZALABS / LIVE LAB</SectionLabel>
        <span class="text-[0.7rem] uppercase tracking-[0.12em] text-muted-inverse before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:border before:border-lime before:animate-[pulse_2s_ease_infinite]">Pilih solusi</span>
      </div>
      <h2 class="mt-6 max-w-lg text-4xl font-bold md:text-5xl">Apa yang ingin Anda bangun?</h2>
      <p class="mt-3 max-w-lg text-sm text-muted-inverse">Pilih kebutuhan Anda. Lihat pendekatan solusi yang sesuai sebelum menghubungi kami.</p>
      <div class="mt-6 flex flex-wrap gap-2" aria-label="Jenis kebutuhan" role="group">
        {#each Object.keys(scenarios) as key}
          {@const item = scenarios[key]}
          <button aria-pressed={selected === key} class:active={selected === key} class="rounded-md border border-[#3e4d44] bg-raised px-3 py-3 text-sm font-semibold transition hover:border-lime" on:click={() => (selected = key)}>{item.tag.split(' / ')[1].replace('APPLIED AI', '& AI')}</button>
        {/each}
      </div>
      {#key selected}
        <div class="mt-4 min-h-[250px] rounded-md bg-raised p-6 transition">
          <SectionLabel tone="lime">{scenario.tag}</SectionLabel>
          <h3 class="mt-3 max-w-lg text-2xl font-bold">{scenario.title}</h3>
          <p class="mt-3 text-sm text-muted-inverse">{scenario.description}</p>
          <div class="mt-5 grid grid-cols-3 gap-3 border-t border-line-dark pt-4">
            {#each scenario.flow as step, index}
              <div><span class="block text-xs text-lime">0{index + 1}</span><span class="mt-1 block text-sm font-semibold">{step}</span></div>
            {/each}
          </div>
        </div>
      {/key}
      <p class="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-lime">GANTI KATEGORI UNTUK MENCOBA ↑</p>
    </div>
  </div>
</section>

<style>
  button.active { background: #d8ef59; border-color: #d8ef59; color: #101b1a; }
</style>
