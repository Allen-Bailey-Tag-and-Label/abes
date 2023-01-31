<script>
  import { Fieldset, Form, H1, Icon, Input, LinkButton, SubmitButton } from '$components';
  import { Tag } from '$icons';

  // props (internal)
  let firstName = '';
  let lastName = '';
  let submitted;

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
    <H1>Register</H1>
    <div class="min-h-[1.5rem]">
      {#if form?.error}
        <div class="text-red-500">
          {form?.error}
        </div>
      {/if}
      {#if form?.success}
        <div class="text-green-500">Successfully registered</div>
      {/if}
    </div>
    <Fieldset legend="First Name">
      <Input bind:value={firstName} name="firstName" required={true} />
    </Fieldset>
    <Fieldset legend="Last Name">
      <Input bind:value={lastName} name="lastName" required={true} />
    </Fieldset>
    <SubmitButton bind:submitted type="submit">Register</SubmitButton>
    <LinkButton flavor="transparent" href="/sign-in">Sign In</LinkButton>
  </Form>
</div>
