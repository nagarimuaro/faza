<script lang="ts">
  import Button from './ui/Button.svelte';
  import SectionLabel from './ui/SectionLabel.svelte';
  export let onConsult: () => void;
</script>

<section class="bg-carbon py-24 text-ivory"><div class="container grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><SectionLabel tone="lime">10 / DISKUSIKAN PROYEK</SectionLabel><h2 class="mt-6 text-5xl font-bold md:text-7xl">Ceritakan masalahnya.<br />Kita pikirkan sistemnya.</h2><p class="mt-6 max-w-xl text-muted-inverse">FAZALABS siap membahas kebutuhan software, website, cloud, dan AI melalui konsultasi awal.</p></div><div class="flex flex-col items-start gap-5"><Button on:click={onConsult}>Mulai konsultasi <span class="text-xl leading-none">↗</span></Button><a class="border-b border-line-dark pb-1 text-sm text-muted-inverse hover:text-lime" href="https://wa.me/6285181315119" target="_blank" rel="noreferrer">WhatsApp: 0851-8131-5119 ↗</a><a class="border-b border-line-dark pb-1 text-sm text-muted-inverse hover:text-lime" href="mailto:info@fazalabs.id">info@fazalabs.id ↗</a></div></div></section>
