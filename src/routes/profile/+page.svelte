<script lang="ts">
    import type {UserData} from "$lib/types";
    import {doLogout} from "$lib/apiclient.js";
    import {goto} from "$app/navigation";
    import UserInfo from "../../UserInfo.svelte";
    import ActionBtn from "../../ActionBtn.svelte";
    import TokenForm from "../../TokenForm.svelte";

    /** @type {import('./$types').PageData} */
    export let data: any;

    let userData: UserData;
    let fullUserData: UserData;

    if (data["data"] === null) {
        console.log("No user data found");
    } else {
        userData = data["data"]
    }

    const handleLogOut = (): void => {
        doLogout().then(() => goto("/sign-in"))
    }

    const validateCallBack = (x: UserData) => {
        fullUserData = x
    }
</script>

{#if userData}
<div class="box">
    {#if fullUserData}
        <UserInfo userData={fullUserData}/>
    {:else}
        <TokenForm validateCallBack={validateCallBack}/>
    {/if}
    <ActionBtn actionName="LogOut" actionHandler={handleLogOut} />
</div>
{:else}
    <p>No userData</p>
{/if}

<style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

    .box {
        text-align: center;
    }
</style>