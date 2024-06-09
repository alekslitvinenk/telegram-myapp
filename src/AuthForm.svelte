<script lang="ts">
    import type {LoginData} from "$lib/types";

    let telegramID: string = ""
    let password: string = ""

    $: newUser = {telegramID: telegramID, password: password};

    const handleAction = (event: Event) => {
        event.preventDefault()
        actionHandler(newUser)
    }

    export let actionHandler: (x:LoginData) => void;
    export let hasAuthError: boolean;
    export let submitName: string;
</script>

<div id="signupquick" class="quicksignup">
    <h3>{submitName}</h3>
    {#if hasAuthError === true }
        <div class="authError">
            Something went wrong!
        </div>
    {/if}
    <form on:submit={handleAction}>
        <label>
            Telegram ID:
            <input
                    name="telegramID"
                    type="text"
                    placeholder="Your telegram ID"
                    bind:value={telegramID} />
        </label>
        <br />
        <label>
            Password:
            <input
                    name="userPassword"
                    type="password"
                    placeholder="password"
                    bind:value={password} />
        </label>
        <input type="submit" value={submitName}/>
    </form>
</div>

<style>
    .quicksignup {
        width: 230px;
        min-height: 300px;
        margin: 2rem auto;
        background-color: white;
        border: 1px solid;
        -webkit-box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        box-shadow: 2px 2px 16px 4px rgba(0,0,0,0.75);
        position: relative;
    }

    .quicksignup form {
        width: 184px !important;
        margin: 0 auto;
    }

    .quicksignup form label {
        font-size: 1rem;
    }

    .quicksignup input[type=submit] {
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

    .quicksignup input[type=submit]:hover {
        background-color: #0051ff;
    }

    .quicksignup h3 {
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
    }

    .authError {
        border: 2px solid red;
        background: red;
        color: white;
        font-size: 0.75rem;
        text-align: center;
    }
</style>