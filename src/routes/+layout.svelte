<script>
  import { theme } from 'sveltewind/stores';
  import '../app.postcss';

  theme.set({
    button: 'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-600/[.3]',
    h1: 'text-[2.5rem]',
    input:
      'bg-transparent dark:bg-transparent hover:ring-offset-primary-500 focus:ring-offset-primary-500 focus:ring-primary-500/[.3]'
  });
</script>

<slot />

<style>
  :global(::-webkit-scrollbar) {
    height: 0.5rem;
    width: 0.5rem;
  }
  :global(::-webkit-scrollbar-thumb) {
    background: rgb(49, 56, 185);
    border-radius: 0.5rem;
  }
</style>
