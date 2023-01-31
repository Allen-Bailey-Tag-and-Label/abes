<script>
  import { theme } from 'sveltewind/stores';
  import { twMerge } from 'tailwind-merge';
  import { calculateFlavorClasses } from '$components/Button';

  // props (external)
  export let href = '';
  export let flavor = 'primary';

  // props (dynamic)
  $: flavorClasses = calculateFlavorClasses(flavor);
  $: classes = twMerge($theme.button, flavorClasses, $$props.class);
</script>

<a class={classes} {href} {...$$restProps}><slot /></a>
