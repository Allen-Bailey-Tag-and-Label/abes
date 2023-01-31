<script>
  import { Button, ProgressIndicator } from 'sveltewind/components';
  import { theme } from 'sveltewind/stores';
  import { twMerge } from 'tailwind-merge';
  import { calculateFlavorClasses } from '$components/Button';

  // props (external)
  export let flavor = 'primary';
  export let submitted;
  export let type = 'submit';

  // props (dynamic)
  $: flavorClasses = calculateFlavorClasses(flavor);
  $: classes = twMerge($theme.button, flavorClasses, $$props.class);
</script>

<Button class={classes} {type} {...$$restProps}>
  {#if submitted}
    <ProgressIndicator class="w-[1.5rem] h-[1.5rem]" />
  {/if}
  {#if !submitted}
    <slot />
  {/if}
</Button>
