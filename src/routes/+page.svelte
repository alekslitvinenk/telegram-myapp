<script lang="ts">
    import { page } from '$app/stores';

    const url = $page.url;

    const firstName  = url.searchParams.get('name')
</script>

<h1>Hello, {firstName}!</h1>
