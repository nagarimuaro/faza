<script lang="ts">
  import type { TeamMember } from '$lib/data/site';

  export let member: TeamMember;
</script>

<article class="group overflow-hidden rounded-lg border border-line bg-paper text-carbon transition duration-300 hover:-translate-y-1 hover:shadow-panel">
  <div class="relative aspect-[4/3] overflow-hidden bg-carbon text-ivory">
    {#if member.photo}
      <div aria-hidden="true" class="absolute inset-0 bg-carbon"></div>
      <img src={member.photo} alt={`Foto ${member.name}`} loading="lazy" class:photo-zoomed={member.photoZoom} class:photo-zoom-further={member.photoZoomFurther} class="photo-blend absolute inset-0 h-full w-full object-contain object-center transition duration-500" />
    {:else}
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(216,239,89,.34),transparent_35%),linear-gradient(140deg,#253730,#101b1a)] transition duration-500 group-hover:scale-105"></div>
      <div class="absolute left-6 bottom-6 grid h-24 w-24 place-items-center rounded-full border border-lime/60 bg-lime/10 font-display text-3xl font-bold text-lime backdrop-blur-sm">{member.initials}</div>
    {/if}
    <div class="absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/5 to-transparent"></div>
    {#if !member.photo}<p class="absolute bottom-6 right-6 text-[0.65rem] uppercase tracking-[0.12em] text-muted-inverse">Foto resmi segera diperbarui</p>{/if}
  </div>
  <div class="p-6">
    <p class="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{member.role}</p>
    <h3 class="mt-2 font-display text-2xl font-bold text-carbon">{member.name}</h3>
    <p class="mt-3 text-sm font-semibold text-muted">{member.field}</p>
  </div>
</article>

<style>
  .photo-blend {
    transform: scale(0.92);
    -webkit-mask-image: radial-gradient(ellipse at center, #000 58%, transparent 100%);
    mask-image: radial-gradient(ellipse at center, #000 58%, transparent 100%);
  }

  .photo-blend.photo-zoomed {
    transform: scale(1.04);
  }

  .photo-blend.photo-zoom-further {
    transform: scale(1.2);
  }

  .group:hover .photo-blend {
    transform: scale(0.95);
  }

  .group:hover .photo-blend.photo-zoomed {
    transform: scale(1.08);
  }

  .group:hover .photo-blend.photo-zoom-further {
    transform: scale(1.24);
  }
</style>
