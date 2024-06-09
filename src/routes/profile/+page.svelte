<script lang="ts">
    import type {UserData} from "$lib/types";
    import {doLogout} from "$lib/apiclient.js";
    import {goto} from "$app/navigation";

    /** @type {import('./$types').PageData} */
    export let data: any;

    let userData: UserData;

    if (data["data"] === null) {
        console.log("No user data found");
    } else {
        userData = data["data"]
    }

    const handleLogOut = (): void => {
        doLogout().then(res_ => goto("/sign-in"))
    }
</script>

{#if userData}
<div>
    <div>
        <p>telegramID: {userData.telegramID}</p>
        <p>password: ******</p>
        <p>token: {userData.token}</p>
        <p>createdAt: {userData.createdAt}</p>
    </div>
    <div class="logout">
        <div on:click={handleLogOut}>Log out</div>
    </div>
</div>
{:else}
    <p>No userData</p>
{/if}

<style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

    .logout {
        display: block;
        margin: 20px auto;
        background-color: #007bff;
        height: 35px;
        width: 100px;
        border-radius: 4px;
        border-style: none;
        color: white;
        cursor: pointer;
        transition: background-color 0.2s;
        font-size: 1.2rem;
    }
</style>