<script lang="ts">
    import type {UserData} from "$lib/types";

    /** @type {import('./$types').PageData} */
    export let data: any;

    let userData: UserData;

    if (data["data"] === null) {
        console.log("No user data found");
    } else {
        userData = data["data"]
    }
</script>

{#if userData}
<div>
    <p>telegramID: {userData.telegramID}</p>
    <p>password: ******</p>
    <p>token: {userData.token}</p>
    <p>createdAt: {userData.createdAt}</p>
</div>
{:else}
    <p>No userData</p>
{/if}

<style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
</style>