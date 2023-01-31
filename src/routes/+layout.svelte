<script>
  import { theme } from 'sveltewind/stores';
  import { page } from '$app/stores';
  import { Pwa } from '$components';
  import '../app.postcss';

  theme.set({
    button:
      'cursor-pointer bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-600/[.3]',
    h1: 'font-semibold text-[2.5rem]',
    h2: 'font-semibold text-[2rem]',
    input:
      'bg-transparent dark:bg-transparent hover:ring-offset-primary-500 focus:ring-offset-primary-500 focus:ring-primary-500/[.3]'
  });

  $: title = [
    ...$page.url.pathname
      .substring(1)
      .split('/')
      .map((directory) => {
        const words = directory
          .split('-')
          .map((word) =>
            word.length === 3 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)
          );
        return words.join(' ');
      }),
    'ABES',
    'Allen Baily Tag & Label'
  ].join(' - ');
</script>

<Pwa>
  <link rel="icon" type="image/svg+xml" href="/favicon/icon.svg" />
  <link rel="alternate icon" href="/favicon/icon-16x16.png" />
  <link rel="apple-touch-icon" href="/favicon/icon-apple-touch.png" />
  <link rel="manifest" href="/manifest.json" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"
  />
  <meta name="theme-color" content="#FFF" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</Pwa>

<svelte:head>
  <title>{title}</title>
</svelte:head>

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
