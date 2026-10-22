<script lang="ts">
  export let items: [string, string][] = [];
  let openIndex = -1;
</script>

<div class="divide-y divide-line">
  {#each items as item, index}
    <div>
      <button class="flex w-full items-center justify-between gap-5 py-5 text-left font-display text-lg font-semibold tracking-[-0.02em]" aria-expanded={openIndex === index} on:click={() => (openIndex = openIndex === index ? -1 : index)}>
        <span>{item[0]}</span>
        <span class="text-2xl font-normal text-muted">{openIndex === index ? '−' : '+'}</span>
      </button>
      {#if openIndex === index}
        <p class="max-w-2xl pb-6 pr-10 text-muted">{item[1]}</p>
      {/if}
    </div>
  {/each}
</div>
