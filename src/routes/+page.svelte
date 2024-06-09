<script lang="ts">
    import { page } from '$app/stores';
    import ActionBtn from "../ActionBtn.svelte";
    import {goto} from "$app/navigation";

    const url = $page.url;

    const firstName  = url.searchParams.get('name')

    const jumpToLogin = () => {
        const telegramID =  url.searchParams.get('id')

        goto(`/sign-in?id=${telegramID}`)
    }

    const jumpToRegistration = () => {
        const telegramID =  url.searchParams.get('id')

        goto(`/sign-up?id=${telegramID}`)
    }
</script>

<div class="box">
    <div><h3>Hello, {firstName}!</h3></div>
    <div class="btns">
        <ActionBtn actionName="SignIn" actionHandler={jumpToLogin} />
        <ActionBtn actionName="SignUp" actionHandler={jumpToRegistration} />
    </div>
</div>

<style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

    .box {
        width: 440px;
        height: fit-content;
        margin: 2rem auto;
        background-color: white;
        border: 1px solid;
        -webkit-box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        position: relative;
    }

    .box h3 {
        text-align: center;
    }

    .box .btns {
        text-align: center;
    }
</style>