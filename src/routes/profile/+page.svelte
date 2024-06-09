<script lang="ts">
    import type {UserData} from "$lib/types";
    import {doLogout} from "$lib/apiclient.js";
    import {goto} from "$app/navigation";
    import UserInfo from "../../UserInfo.svelte";

    /** @type {import('./$types').PageData} */
    export let data: any;

    let userData: UserData;

    if (data["data"] === null) {
        console.log("No user data found");
    } else {
        userData = data["data"]
    }

    const handleLogOut = (): void => {
        doLogout().then(() => goto("/sign-in"))
    }
</script>

{#if userData}
<div>
    <UserInfo userData={userData}/>
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
        text-align: center;
    }
</style>