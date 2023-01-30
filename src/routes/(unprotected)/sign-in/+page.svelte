<script>
  import { Button, Fieldset, Form, H1, Input } from '$components';

  // props (internal)
  let password = '';
  let username = '';
</script>

<div class="flex flex-grow overflow-hidden items-center justify-center">
  <Form class="w-full max-w-[320px] overflow-auto max-h-full p-[1rem]">
    <H1>Sign In</H1>
    <Fieldset legend="Username">
      <Input bind:value={username} name="username" />
    </Fieldset>
    <Fieldset legend="Password">
      <Input bind:value={password} name="password" type="password" />
    </Fieldset>
    <Button type="submit">Sign In</Button>
  </Form>
</div>
