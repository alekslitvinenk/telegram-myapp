<script lang="ts">
    import type {UserData} from "$lib/types";

    export let userData: UserData
</script>

<div class="box">
    <p><strong>telegramID</strong>: {userData.telegramID}</p>
    <p><strong>password</strong>: ******</p>
    <p><strong>token</strong>: {userData.token}</p>
    <p><strong>createdAt</strong>: {userData.createdAt}</p>
</div>

<style>
    .box {
        width: 440px;
        min-height: 300px;
        margin: 2rem auto;
        background-color: white;
        border: 1px solid;
        -webkit-box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        position: relative;
    }
</style>