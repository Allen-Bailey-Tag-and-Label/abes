<script>
  import { Fieldset, Form, H1, Icon, Input, LinkButton, SubmitButton } from '$components';
  import { Tag } from '$icons';

  // props (internal)
  let password = '';
  let submitted;
  let username = '';

  // props (external)
  export let form;
</script>

<div class="flex flex-grow overflow-hidden items-center justify-center">
  <Form bind:submitted class="w-full max-w-[375px] overflow-auto max-h-full p-[2rem]">
    <Icon
      class="min-w-[5rem] min-h-[5rem] text-primary-500 self-center mb-[2rem]"
      theme="solid"
      src={Tag}
    />
    <H1>Sign In</H1>
    <div class="min-h-[1.5rem] text-red-500">
      {#if form?.error}
        {form?.error}
      {/if}
    </div>
    <Fieldset legend="Username">
      <Input bind:value={username} name="username" required={true} />
    </Fieldset>
    <Fieldset legend="Password">
      <Input bind:value={password} name="password" required={true} type="password" />
    </Fieldset>
    <SubmitButton bind:submitted type="submit">Sign In</SubmitButton>
    <LinkButton flavor="transparent" href="/register">Register</LinkButton>
  </Form>
</div>
