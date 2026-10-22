<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { cn } from '$lib/utils';

  export let variant: 'lime' | 'dark' | 'outline' | 'ghost' = 'lime';
  export let className = '';
  export let type: 'button' | 'submit' | 'reset' = 'button';
  const dispatch = createEventDispatcher<{ click: MouseEvent }>();

  const variants = { lime: 'bg-lime text-carbon hover:bg-[#e4f585]', dark: 'bg-carbon text-ivory hover:bg-soft', outline: 'border border-[#708577] bg-transparent text-ivory hover:bg-soft', ghost: 'bg-transparent text-carbon hover:bg-panel' };
</script>

<button {type} on:click={(event) => dispatch('click', event)} class={cn('inline-flex min-h-[52px] items-center justify-between gap-8 rounded-md border-0 px-6 py-4 text-left text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#94a900]', variants[variant], className)}>
  <slot />
</button>
