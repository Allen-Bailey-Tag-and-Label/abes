<script>
  import { Button } from 'sveltewind/components';
  import { theme } from 'sveltewind/stores';
  import { calculateFlavorClasses } from './index';

  // props (external)
  export let flavor = 'primary';

  // props (dynamic)
  $: flavorClasses = calculateFlavorClasses(flavor);
  $: classes = twMerge($theme.button, flavorClasses, $$props.class);
</script>

<Button class={classes} {...$$restProps}><slot /></Button>
