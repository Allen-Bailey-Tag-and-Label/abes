<script>
  import '../app.postcss';
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
