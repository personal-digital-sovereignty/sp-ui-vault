<script lang="ts">
	import '../app.css';
	import ModuleLayout from '@sp/ui-core/lib/components/ModuleLayout.svelte';
	let { children } = $props();
</script>

<ModuleLayout>
	{@render children()}
</ModuleLayout>
