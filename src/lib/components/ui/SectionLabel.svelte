<script lang="ts">
  export let tone: 'dark' | 'light' | 'lime' = 'dark';
</script>

<p class:text-ivory={tone === 'light'} class:text-lime={tone === 'lime'} class:text-muted={tone === 'dark'} class="text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
  <slot />
</p>
