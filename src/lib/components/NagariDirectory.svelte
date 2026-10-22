<script lang="ts">
  import { westSumatraNagari } from '$lib/data/nagari';
  import SectionLabel from './ui/SectionLabel.svelte';
</script>

<section id="daftar-nagari" class="border-t border-line bg-paper py-16">
  <div class="container">
    <div class="max-w-3xl">
      <SectionLabel>REFERENSI WILAYAH / SISTEM INFORMASI NAGARI TERPADU</SectionLabel>
      <h2 class="mt-5 text-4xl font-bold md:text-5xl">Cakupan nagari di kabupaten Sumatera Barat.</h2>
      <p class="mt-5 text-muted">SINTA (Sistem Informasi Nagari Terpadu) dirancang untuk mendukung pengelolaan data, administrasi, dan pelayanan nagari. Daftar berikut membantu menjelaskan cakupan wilayah yang kami layani; data administratif dapat berubah mengikuti pembaruan pemerintah.</p>
    </div>
    <div class="mt-10 grid gap-3 lg:grid-cols-2">
      {#each westSumatraNagari as group}
        <details class="rounded border border-line bg-ivory p-5">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
            <span>{group.district}</span>
            <span class="text-sm font-body font-semibold text-muted">{group.names.length} {group.kind}</span>
          </summary>
          <p class="mt-4 text-xs uppercase tracking-[0.12em] text-muted">{group.kind === 'desa' ? 'Wilayah desa di Sumatera Barat' : 'Daftar nagari di Sumatera Barat'}</p>
          <ul class="mt-4 grid gap-x-5 gap-y-2 text-sm text-muted sm:grid-cols-2">
            {#each group.names as name}
              <li>{name}</li>
            {/each}
          </ul>
        </details>
      {/each}
    </div>
    <p class="mt-7 text-xs leading-relaxed text-muted">Sumber data administratif: API wilayah BPS melalui Sipedas, data tahun 2026. Kabupaten Kepulauan Mentawai dicatat sebagai desa karena wilayah administratifnya bukan nagari.</p>
  </div>
</section>

