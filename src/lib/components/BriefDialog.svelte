<script lang="ts">
  import Button from './ui/Button.svelte';
  import SectionLabel from './ui/SectionLabel.svelte';

  export let open = false;
  export let onClose: () => void;
  let step = 1;
  let category = 'Aplikasi kustom';
  let challenge = 'Input data berulang';
  let notes = '';
  const phone = '6285181315119';
  const categories = ['Aplikasi kustom', 'Website & web app', 'Cloud & infrastruktur', 'AI & otomasi', 'Digitalisasi pemerintahan', 'Belum yakin'];
  const challenges = ['Input data berulang', 'Proses layanan lambat', 'Sistem terpisah', 'Butuh layanan digital', 'Infrastruktur perlu ditingkatkan', 'Perlu konsultasi awal'];

  $: message = `Halo FAZALABS, saya ingin konsultasi proyek.\n\nJenis proyek: ${category}\nKebutuhan utama: ${challenge}${notes.trim() ? `\nKonteks tambahan: ${notes.trim()}` : ''}\n\nMohon informasi tahapan konsultasinya.`;
  $: whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  function reset() { step = 1; }
  function close() { reset(); onClose(); }
</script>

{#if open}
  <div class="fixed inset-0 z-50 grid place-items-center bg-carbon/75 p-4" role="presentation" on:click={(event) => event.target === event.currentTarget && close()}>
    <div role="dialog" aria-modal="true" aria-labelledby="brief-title" class="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-ivory text-carbon shadow-panel">
      <div class="flex items-start justify-between gap-6 bg-carbon p-7 text-ivory"><div><SectionLabel tone="lime">FAZALABS / PROJECT INTAKE</SectionLabel><h2 id="brief-title" class="mt-3 text-4xl font-bold">Bicarakan proyek Anda.</h2></div><button aria-label="Tutup formulir" class="text-3xl text-muted-inverse hover:text-lime" on:click={close}>×</button></div>
      <div class="p-7 md:p-9"><div class="mb-8 grid grid-cols-3 gap-2" aria-label="Progres 3 langkah">{#each [1, 2, 3] as item}<div class:current={item <= step} class="h-1 rounded-full bg-line"></div>{/each}</div>
        {#if step === 1}<fieldset><legend class="font-display text-3xl font-bold">Apa yang ingin Anda buat?</legend><p class="mt-3 text-muted">Pilih jenis solusi yang paling mendekati kebutuhan Anda.</p><div class="mt-6 grid gap-2 sm:grid-cols-2">{#each categories as item}<label class:chosen={category === item} class="cursor-pointer rounded border border-line p-3 text-sm font-semibold transition hover:border-carbon"><input class="sr-only" type="radio" name="category" bind:group={category} value={item} />{item}</label>{/each}</div></fieldset>{:else if step === 2}<fieldset><legend class="font-display text-3xl font-bold">Apa kendala utamanya?</legend><p class="mt-3 text-muted">Kami akan memulai diskusi dari masalah, bukan menjual paket.</p><div class="mt-6 grid gap-2 sm:grid-cols-2">{#each challenges as item}<label class:chosen={challenge === item} class="cursor-pointer rounded border border-line p-3 text-sm font-semibold transition hover:border-carbon"><input class="sr-only" type="radio" name="challenge" bind:group={challenge} value={item} />{item}</label>{/each}</div></fieldset>{:else}<fieldset><legend class="font-display text-3xl font-bold">Ringkasan untuk tim kami.</legend><p class="mt-3 text-muted">Tambahkan konteks singkat bila perlu.</p><label for="brief-notes" class="mt-7 block text-xs font-semibold uppercase tracking-[0.12em]">Catatan tambahan / opsional</label><textarea id="brief-notes" bind:value={notes} maxlength="600" class="mt-3 min-h-32 w-full resize-y rounded border border-line bg-paper p-4 outline-none focus:border-carbon" placeholder="Contoh: saat ini kami memakai Excel, ada beberapa bagian yang perlu terhubung..."></textarea><div class="mt-5 whitespace-pre-line rounded bg-panel p-4 text-sm text-muted">{message}</div></fieldset>{/if}
        <div class="mt-9 flex items-center justify-between gap-4"><button class="text-sm font-semibold text-muted disabled:opacity-40" disabled={step === 1} on:click={() => (step -= 1)}>← Kembali</button>{#if step < 3}<Button on:click={() => (step += 1)}>Lanjut <span>→</span></Button>{:else}<a class="inline-flex min-h-[52px] items-center gap-8 rounded-md bg-lime px-6 py-4 text-sm font-semibold text-carbon hover:bg-[#e4f585]" href={whatsapp} target="_blank" rel="noreferrer">Buka WhatsApp <span>↗</span></a>{/if}</div><p class="mt-7 text-xs leading-relaxed text-muted">Ini adalah prototipe. Pilihan Anda tidak disimpan ke server. Jangan masukkan data pribadi warga atau informasi rahasia.</p>
      </div>
    </div>
  </div>
{/if}

<style>
  div.current { background: #d8ef59; }
  label.chosen { background: #101b1a; color: #f4f1e8; border-color: #101b1a; }
</style>
