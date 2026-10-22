<script lang="ts">
  import Button from './ui/Button.svelte';
  import SectionLabel from './ui/SectionLabel.svelte';
  export let onConsult: () => void;
</script>

<section id="brief" class="bg-lime py-16"><div class="container grid gap-10 lg:grid-cols-2 lg:items-end"><div><SectionLabel>09 / SMART PROJECT BRIEF</SectionLabel><h2 class="mt-5 max-w-2xl text-5xl font-bold md:text-6xl">Tidak perlu menulis proposal panjang.</h2><p class="mt-5 max-w-lg text-lg">Pilih jenis proyek, tentukan kebutuhan, lalu buat ringkasan untuk memulai konsultasi.</p></div><div><SectionLabel>HANYA 3 LANGKAH</SectionLabel><h3 class="mt-4 text-3xl font-bold">Mulai dari masalah, bukan daftar fitur.</h3><Button variant="dark" className="mt-7" on:click={onConsult}>Susun brief proyek <span class="text-xl leading-none">↗</span></Button></div></div></section>
