<script lang="ts">
  import * as AlertDialog from '$lib/components/ui/alert-dialog';
  import type { Snippet } from 'svelte';

  let {
    onConfirm,
    title,
    description,
    triggerContent,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
  }: {
    onConfirm: (() => void) | (() => Promise<void>);
    title: string;
    description: string;
    triggerContent: Snippet<[{ props: Record<string, unknown> }]>;
    confirmText?: string;
    cancelText?: string;
  } = $props();
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>
    {#snippet child({ props })}
      {@render triggerContent({ props })}
    {/snippet}
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>{title}</AlertDialog.Title>
      <AlertDialog.Description>{description}</AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>{cancelText}</AlertDialog.Cancel>
      <AlertDialog.Action onclick={onConfirm}>{confirmText}</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
