<script lang="ts">
  import SectionLabel from './ui/SectionLabel.svelte';
  const items = [['PERUSAHAAN', 'PT FAZALABS Solusi Teknologi'], ['PRODUK', 'SINTA — Digitalisasi Nagari'], ['CAKUPAN', 'Software · Web · Cloud · AI']];
</script>

<div class="bg-lime py-5"><div class="container grid gap-5 md:grid-cols-3">
  {#each items as item}<div><SectionLabel>{item[0]}</SectionLabel><strong class="mt-1 block font-display text-lg">{item[1]}</strong></div>{/each}
</div></div>
