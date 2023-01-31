<script>
  import { Form } from 'sveltewind/components';
  import { enhance } from '$app/forms';

  // handlers
  const enhanceHandler = () => {
    submitted = true;
    return async ({ result, update }) => {
      submitted = false;
      update();
    };
  };

  // props (external)
  export let submitted = false;
  export let use = [[enhance, enhanceHandler]];
</script>

<Form {use} {...$$restProps}>
  <slot />
</Form>
