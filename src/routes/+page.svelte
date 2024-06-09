<script lang="ts">
    import { page } from '$app/stores';

    const url = $page.url;

    const firstName  = url.searchParams.get('name')
</script>

<h1>Hello, {firstName}!</h1>

<style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
</style>