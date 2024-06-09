<script lang="ts">
    import {quickAddUser} from "$lib/apiclient";
    import ReegistrationError from "../../ReegistrationError.svelte";

    let hasRegistrationError: boolean = false

    let telegramID: string = ""
    let password: string = ""

    $: newUser = {telegramID: telegramID, password: password};

    const handleSubmit = (event: Event) => {
        event.preventDefault()

        quickAddUser(newUser).then(response => {
            if (response.status !== 200) {
                hasRegistrationError = true
                telegramID = ""
                password = ""
            } else {
                console.log("Add user response: ", response)
            }
        })
    }
</script>

<div id="signupquick" class="quicksignup">
    <h3>Sign Up</h3>
    {#if hasRegistrationError === true }
        <ReegistrationError />
    {/if}
    <form on:submit={handleSubmit}>
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
        <input type="submit" value="Submit"/>
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
</style>