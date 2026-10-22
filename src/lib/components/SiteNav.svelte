<script lang="ts">
  import { Menu, X } from 'lucide-svelte';
  import Button from './ui/Button.svelte';

  export let onConsult: () => void;
  let mobileOpen = false;
  const links = [
    ['Perusahaan', '#perusahaan'], ['Layanan', '#layanan'], ['Solusi', '#industri'],
    ['Portofolio', '#produk'], ['Cara Kerja', '#studio'], ['Tim kami', '#tim-kami'], ['FAQ', '#faq']
  ];

  function closeMenu() { mobileOpen = false; }
</script>

<header class="sticky top-0 z-40 border-b border-[#2e3b35] bg-carbon text-ivory">
  <div class="container flex h-[86px] items-center gap-10">
    <a aria-label="FAZALABS kembali ke beranda" href="#beranda" class="flex shrink-0 items-center gap-3 font-display text-2xl font-extrabold tracking-[-0.05em]">
      <span class="grid h-10 w-10 place-items-center bg-lime text-carbon [clip-path:polygon(0_0,100%_0,100%_74%,74%_100%,0_100%)]">F</span>FAZALABS
    </a>
    <nav class:open={mobileOpen} aria-label="Navigasi utama" class="nav-links ml-auto flex items-center gap-7 text-sm font-medium text-[#d2dbd5]">
      {#each links as link}
        <a href={link[1]} on:click={closeMenu} class="transition hover:text-lime">{link[0]}</a>
      {/each}
    </nav>
    <div class="hidden sm:block">
      <Button className="ml-0" on:click={onConsult}>Mulai konsultasi <span class="text-xl leading-none">↗</span></Button>
    </div>
    <button aria-label={mobileOpen ? 'Tutup navigasi' : 'Buka navigasi'} aria-expanded={mobileOpen} class="ml-auto block text-ivory sm:hidden" on:click={() => (mobileOpen = !mobileOpen)}>
      {#if mobileOpen}<X size={26} />{:else}<Menu size={26} />{/if}
    </button>
  </div>
</header>

<style>
  @media (max-width: 639px) {
    .nav-links { position: absolute; left: 0; right: 0; top: 86px; display: none; flex-direction: column; align-items: stretch; gap: 0; border-top: 1px solid #2e3b35; background: #101b1a; padding: 0 1rem 1rem; }
    .nav-links.open { display: flex; }
    .nav-links a { border-bottom: 1px solid #2e3b35; padding: 1rem 0; }
  }
</style>
