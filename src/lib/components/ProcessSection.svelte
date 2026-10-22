<script lang="ts">
  import { processSteps } from '$lib/data/site';
  import SectionLabel from './ui/SectionLabel.svelte';
</script>

<section id="studio" class="section"><div class="container"><SectionLabel>05 / PROSES PENGEMBANGAN</SectionLabel><div class="mt-6 grid gap-8 lg:grid-cols-[1.22fr_.78fr]"><h2 class="text-5xl font-bold md:text-7xl">Dari kebutuhan sampai siap digunakan.</h2><p class="max-w-lg text-lg text-muted">Anda terlibat sejak diskusi awal: kami memetakan kebutuhan, menyusun prototipe, mengembangkan fitur, lalu menyiapkan implementasi dan pendampingan sesuai kesepakatan.</p></div><div class="mt-14 grid gap-0 border-t border-line md:grid-cols-4">{#each processSteps as step}<div class="border-b border-line py-7 md:border-r md:px-6 md:first:pl-0 md:last:border-0"><span class="text-sm font-semibold text-muted">{step[0]}</span><h3 class="mt-5 text-2xl font-bold">{step[1]}</h3><p class="mt-4 text-sm text-muted">{step[2]}</p></div>{/each}</div></div></section>
